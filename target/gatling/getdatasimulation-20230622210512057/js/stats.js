var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11410",
        "ok": "10818",
        "ko": "592"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "177"
    },
    "maxResponseTime": {
        "total": "31181",
        "ok": "2689",
        "ko": "31181"
    },
    "meanResponseTime": {
        "total": "1558",
        "ok": "344",
        "ko": "23739"
    },
    "standardDeviation": {
        "total": "5903",
        "ok": "239",
        "ko": "12311"
    },
    "percentiles1": {
        "total": "300",
        "ok": "298",
        "ko": "30170"
    },
    "percentiles2": {
        "total": "329",
        "ok": "324",
        "ko": "30230"
    },
    "percentiles3": {
        "total": "1829",
        "ok": "530",
        "ko": "30292"
    },
    "percentiles4": {
        "total": "30244",
        "ok": "1820",
        "ko": "30354"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10506,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 244,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 592,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.033",
        "ok": "36.06",
        "ko": "1.973"
    }
},
contents: {
"req_get-data-a80c1": {
        type: "REQUEST",
        name: "Get Data",
path: "Get Data",
pathFormatted: "req_get-data-a80c1",
stats: {
    "name": "Get Data",
    "numberOfRequests": {
        "total": "11410",
        "ok": "10818",
        "ko": "592"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "177"
    },
    "maxResponseTime": {
        "total": "31181",
        "ok": "2689",
        "ko": "31181"
    },
    "meanResponseTime": {
        "total": "1558",
        "ok": "344",
        "ko": "23739"
    },
    "standardDeviation": {
        "total": "5903",
        "ok": "239",
        "ko": "12311"
    },
    "percentiles1": {
        "total": "300",
        "ok": "298",
        "ko": "30170"
    },
    "percentiles2": {
        "total": "329",
        "ok": "324",
        "ko": "30230"
    },
    "percentiles3": {
        "total": "1829",
        "ok": "530",
        "ko": "30292"
    },
    "percentiles4": {
        "total": "30244",
        "ok": "1820",
        "ko": "30354"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10506,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 68,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 244,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 592,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "38.033",
        "ok": "36.06",
        "ko": "1.973"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
