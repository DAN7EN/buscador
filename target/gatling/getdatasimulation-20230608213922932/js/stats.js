var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "261",
        "ok": "259",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "105"
    },
    "maxResponseTime": {
        "total": "1035",
        "ok": "1035",
        "ko": "123"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "144",
        "ko": "114"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "118",
        "ko": "9"
    },
    "percentiles1": {
        "total": "110",
        "ok": "110",
        "ko": "114"
    },
    "percentiles2": {
        "total": "127",
        "ok": "128",
        "ko": "119"
    },
    "percentiles3": {
        "total": "306",
        "ok": "307",
        "ko": "122"
    },
    "percentiles4": {
        "total": "745",
        "ok": "752",
        "ko": "123"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 256,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.35",
        "ok": "4.317",
        "ko": "0.033"
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
        "total": "261",
        "ok": "259",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "105"
    },
    "maxResponseTime": {
        "total": "1035",
        "ok": "1035",
        "ko": "123"
    },
    "meanResponseTime": {
        "total": "143",
        "ok": "144",
        "ko": "114"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "118",
        "ko": "9"
    },
    "percentiles1": {
        "total": "110",
        "ok": "110",
        "ko": "114"
    },
    "percentiles2": {
        "total": "127",
        "ok": "128",
        "ko": "119"
    },
    "percentiles3": {
        "total": "306",
        "ok": "307",
        "ko": "122"
    },
    "percentiles4": {
        "total": "745",
        "ok": "752",
        "ko": "123"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 256,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.35",
        "ok": "4.317",
        "ko": "0.033"
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
