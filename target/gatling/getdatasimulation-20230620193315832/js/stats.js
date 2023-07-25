var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5390",
        "ok": "4988",
        "ko": "402"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "95",
        "ko": "89"
    },
    "maxResponseTime": {
        "total": "60098",
        "ok": "40022",
        "ko": "60098"
    },
    "meanResponseTime": {
        "total": "5048",
        "ok": "1337",
        "ko": "51097"
    },
    "standardDeviation": {
        "total": "15226",
        "ok": "5416",
        "ko": "21281"
    },
    "percentiles1": {
        "total": "158",
        "ok": "148",
        "ko": "60007"
    },
    "percentiles2": {
        "total": "466",
        "ok": "299",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "4078",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60013",
        "ok": "36006",
        "ko": "60048"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4391,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 194,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 403,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 402,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "29.944",
        "ok": "27.711",
        "ko": "2.233"
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
        "total": "5390",
        "ok": "4988",
        "ko": "402"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "95",
        "ko": "89"
    },
    "maxResponseTime": {
        "total": "60098",
        "ok": "40022",
        "ko": "60098"
    },
    "meanResponseTime": {
        "total": "5048",
        "ok": "1337",
        "ko": "51097"
    },
    "standardDeviation": {
        "total": "15226",
        "ok": "5416",
        "ko": "21281"
    },
    "percentiles1": {
        "total": "158",
        "ok": "148",
        "ko": "60007"
    },
    "percentiles2": {
        "total": "466",
        "ok": "299",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60004",
        "ok": "4078",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60013",
        "ok": "36006",
        "ko": "60048"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4391,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 194,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 403,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 402,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "29.944",
        "ok": "27.711",
        "ko": "2.233"
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
