import { Component, OnInit } from '@angular/core';
import {
    DATE_CONSTANT,
    DEFAULT_BIRTHDAY_YEAR_RANGE,
    REPORT_TYPE,
    STATISTICS_DATE_LIMIT,
    STATISTICS_MONTH_LIMIT,
} from '../../../@core/constant/common';
import { isEmpty, notEmpty } from '../../../@core/utils/data.utils';
import { DatePipe } from '@angular/common';
import { KaiService } from '../../../services/kai.service';
import { KaiRevenueStatistic } from '../../../model/kai-revenue-statistic';
import { KaiStatistic } from '../../../model/kai-statistic';

@Component({
    selector: 'ngx-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {

    types: {
        label: string,
        value: string,
    }[] = [
        {label: 'Ngày', value: REPORT_TYPE.DATE_RANGE},
        {label: 'Tháng', value: REPORT_TYPE.MONTH},
    ];
    yearRange = DEFAULT_BIRTHDAY_YEAR_RANGE;
    dateFormat: DATE_CONSTANT.ORIGINAL_DATE_FORMAT;
    selectedType = this.types[0];
    profits = [];
    purchasingStats: KaiStatistic[] = [];
    forSaleStats: KaiStatistic[] = [];
    totalProfit: number = 0;
    minToDate: Date;
    maxToDate: Date;
    statisticFilter: {
        type: REPORT_TYPE,
        from_date: Date,
        to_date: Date,
    } = {
        type: REPORT_TYPE.DATE_RANGE,
        from_date: null,
        to_date: null,
    };

    kaiStatistics: KaiRevenueStatistic = null;

    MONTH = REPORT_TYPE.MONTH;
    DATE_RANGE = REPORT_TYPE.DATE_RANGE;

    constructor(
        public datepipe: DatePipe,
        private kaiService: KaiService,
    ) {
    }

    ngOnInit() {
        // console.log('>>>> statisticFilter: ', this.statisticFilter);
    }

    onSearch(event) {
        const fromDate = this.datepipe.transform(this.statisticFilter.from_date, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
        const toDate = this.datepipe.transform(this.statisticFilter.to_date, DATE_CONSTANT.TECHNICAL_DATE_FORMAT);
        // console.log('>>>> this.statisticFilter: ', this.statisticFilter);
        if (notEmpty(fromDate) && notEmpty(toDate) && notEmpty(this.statisticFilter.type)) {
            this.kaiService.getKaiStatistics({
                type: this.statisticFilter.type,
                from_date: this.datepipe.transform(fromDate, DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
                to_date: this.datepipe.transform(toDate, DATE_CONSTANT.TECHNICAL_DATE_FORMAT),
            }).subscribe((kaiRevenueStatistic) => {
                this.kaiStatistics = kaiRevenueStatistic;
                this.purchasingStats = kaiRevenueStatistic.purchasing_statistics;
                this.forSaleStats = kaiRevenueStatistic.for_sale_statistics;
                const {profits, totalProfit} = this.calculate(kaiRevenueStatistic);
                this.profits = profits;
                this.totalProfit = totalProfit;
            });
        }

    }

    calculate(kaiRevenueStatistic: KaiRevenueStatistic) {
        if (this.selectedType.value === REPORT_TYPE.DATE_RANGE) {
            return this._calculateDateRangeStatistics(kaiRevenueStatistic);
        }
        return this._calculateMonthStatistics(kaiRevenueStatistic);
    }

    private _calculateDateRangeStatistics(kaiRevenueStatistic: KaiRevenueStatistic) {
        const {purchasing_statistics, for_sale_statistics} = kaiRevenueStatistic;
        const profits = [];
        let totalProfit = 0;
        for_sale_statistics.forEach((for_sale_stat) => {
            const {sale_date} = for_sale_stat;
            const purchasing_stat = purchasing_statistics.find(y => y.sale_date === sale_date);
            const profit = notEmpty(purchasing_stat)
                ? for_sale_stat.total_money - purchasing_stat.total_money
                : +for_sale_stat.total_money;
            profits.push({
                sale_date,
                profit,
            });
        });
        purchasing_statistics.forEach((purchasing_stat) => {
            const {sale_date} = purchasing_stat;
            const for_sale_stat = for_sale_statistics.find(y => y.sale_date === sale_date);
            if (!for_sale_stat) {
                profits.push({
                    sale_date,
                    profit: -purchasing_stat.total_money,
                });
            }
        });

        profits.sort(function (a, b) {
            // convert date object into number to resolve issue in typescript
            return +new Date(a.sale_date) - +new Date(b.sale_date);
        });

        totalProfit = profits.map(x => Number(x.profit)).reduce((a, b) => a + b, 0);
        return {
            profits,
            totalProfit,
        };
    }

    private _calculateMonthStatistics(kaiRevenueStatistic: KaiRevenueStatistic) {
        const {purchasing_statistics, for_sale_statistics} = kaiRevenueStatistic;
        const profits = [];
        let totalProfit = 0;
        for_sale_statistics.forEach((for_sale_stat) => {
            const {month_date, year_date} = for_sale_stat;
            const purchasing_stat = purchasing_statistics
                .find(y => y.month_date === month_date && y.year_date === year_date);
            const profit = notEmpty(purchasing_stat)
                ? for_sale_stat.total_money - purchasing_stat.total_money
                : +for_sale_stat.total_money;
            profits.push({
                month_date,
                year_date,
                profit,
            });
        });
        purchasing_statistics.forEach((purchasing_stat) => {
            const {month_date, year_date} = purchasing_stat;
            const for_sale_stat = for_sale_statistics
                .find(y => y.month_date === month_date && y.year_date === year_date);
            if (!for_sale_stat) {
                profits.push({
                    month_date,
                    year_date,
                    profit: -purchasing_stat.total_money,
                });
            }
        });

        profits.sort(function (a, b) {
            if (a.dateyear === b.dateyear) {
                return a.datemonth - b.datemonth;
            } else {
                return a.dateyear - b.dateyear;
            }
        });

        totalProfit = profits.map(x => Number(x.profit)).reduce((a, b) => a + b, 0);
        return {
            profits,
            totalProfit,
        };
    }

    onTypeChange(filterType) {
        this.statisticFilter.type = filterType;
        this.statisticFilter.to_date = null;
        this.selectedType.value = filterType;
        this.totalProfit = 0;
        if (isEmpty(this.statisticFilter.from_date)) {
            this.statisticFilter.from_date = new Date();
        }
        this.updateFilter(this.statisticFilter.from_date);
    }

    onChangeFromDate(event) {
        this.updateFilter(event);
    }

    updateFilter(fromDate: Date) {
        if (notEmpty(fromDate)) {
            this.minToDate = fromDate;
            if (this.statisticFilter.type === REPORT_TYPE.MONTH) {
                this.maxToDate = new Date(fromDate);
                this.maxToDate.setMonth(fromDate.getMonth() + STATISTICS_MONTH_LIMIT);
            } else {
                this.maxToDate = new Date(fromDate);
                this.maxToDate.setDate(fromDate.getDate() + STATISTICS_DATE_LIMIT);
            }
        }
    }

}
