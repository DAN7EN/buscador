var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11397",
        "ok": "10805",
        "ko": "592"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "149"
    },
    "maxResponseTime": {
        "total": "30450",
        "ok": "5845",
        "ko": "30450"
    },
    "meanResponseTime": {
        "total": "1563",
        "ok": "348",
        "ko": "23739"
    },
    "standardDeviation": {
        "total": "5908",
        "ok": "307",
        "ko": "12312"
    },
    "percentiles1": {
        "total": "295",
        "ok": "294",
        "ko": "30173"
    },
    "percentiles2": {
        "total": "325",
        "ok": "320",
        "ko": "30237"
    },
    "percentiles3": {
        "total": "1945",
        "ok": "554",
        "ko": "30308"
    },
    "percentiles4": {
        "total": "30249",
        "ok": "1933",
        "ko": "30368"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10482,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 60,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 263,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 592,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.99",
        "ok": "36.017",
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
        "total": "11397",
        "ok": "10805",
        "ko": "592"
    },
    "minResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "149"
    },
    "maxResponseTime": {
        "total": "30450",
        "ok": "5845",
        "ko": "30450"
    },
    "meanResponseTime": {
        "total": "1563",
        "ok": "348",
        "ko": "23739"
    },
    "standardDeviation": {
        "total": "5908",
        "ok": "307",
        "ko": "12312"
    },
    "percentiles1": {
        "total": "295",
        "ok": "294",
        "ko": "30173"
    },
    "percentiles2": {
        "total": "325",
        "ok": "320",
        "ko": "30237"
    },
    "percentiles3": {
        "total": "1945",
        "ok": "554",
        "ko": "30308"
    },
    "percentiles4": {
        "total": "30249",
        "ok": "1933",
        "ko": "30368"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10482,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 60,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 263,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 592,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "37.99",
        "ok": "36.017",
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
