let male_final = [
    46643,
    31035,
    100362,
    23409,
    156167,
    203840,
    208336,
    135847,
    59982,
    6802,
    3492,
    192325,
    67153,
    13447,
    15677,
    53245,
    55048,
    60825,
    10355,
    73717,
    2465,
    6335,
    9608,
    8429,
    7068,
    12664,
    4563,
    2557,
    5075,
    9784,
    7168,
    5840
]
let female_final = [
    9811,
    6733,
    7914,
    2310,
    14641,
    20862,
    18179,
    13154,
    6238,
    1373,
    315,
    15987,
    5900,
    2509,
    2262,
    6642,
    8163,
    8705,
    897,
    4683,
    440,
    1102,
    3280,
    3434,
    2281,
    5995,
    2512,
    1153,
    1184,
    1759,
    2109,
    1232
]


let province = [
    "万州区",
    "涪陵区",
    "渝中区",
    "大渡口区",
    "江北区",
    "沙坪坝区",
    "九龙坡区",
    "南岸区",
    "北碚区",
    "綦江区",
    "大足区",
    "渝北区",
    "巴南区",
    "黔江区",
    "长寿区",
    "江津区",
    "合川区",
    "永川区",
    "南川区",
    "荣昌区",
    "城口县",
    "丰都县",
    "垫江县",
    "忠县",
    "云阳县",
    "奉节县",
    "巫山县",
    "巫溪县",
    "石柱土家族自治县",
    "秀山土家族苗族自治县",
    "酉阳土家族苗族自治县",
    "彭水苗族土家族自治县"
]


let province_total_name_sorted = [
        "九龙坡区",
        "沙坪坝区",
        "渝北区",
        "江北区",
        "南岸区",
        "渝中区",
        "荣昌区",
        "巴南区",
        "永川区",
        "北碚区",
        "合川区",
        "江津区",
        "万州区",
        "涪陵区",
        "大渡口区",
        "奉节县",
        "长寿区",
        "黔江区",
        "垫江县",
        "忠县",
        "秀山土家族苗族自治县",
        "南川区",
        "云阳县",
        "酉阳土家族苗族自治县",
        "綦江区",
        "丰都县",
        "巫山县",
        "彭水苗族土家族自治县",
        "石柱土家族自治县",
        "大足区",
        "巫溪县",
        "城口县"
    ]

let province_total_people_sorted = [
        226515,
        224702,
        208312,
        170808,
        149001,
        108276,
        78400,
        73053,
        69530,
        66220,
        63211,
        59887,
        56454,
        37768,
        25719,
        18659,
        17939,
        15956,
        12888,
        11863,
        11543,
        11252,
        9349,
        9277,
        8175,
        7437,
        7075,
        7072,
        6259,
        3807,
        3710,
        2905
    ]


//排序
// for(let i=0; i<male_final.length; i++){
//     province_total_people[i] = male_final[i] + female_final[i]
// }
// console.log(province)
// console.log(province_total_people)
//
// for(let i=0; i<province_total_people.length-1; i++){
//     for(let j = 0; j < province_total_people.length - 1 - i; j++){
//         if (province_total_people[j] < province_total_people[j+1]) {        // 相邻元素两两对比
//             let temp_number = province_total_people[j+1];        // 元素交换
//             province_total_people[j+1] = province_total_people[j];
//             province_total_people[j] = temp_number;
//
//             let temp_name = province[j+1];
//             province[j+1] = province[j];
//             province[j] = temp_name;
//
//         }
//     }
// }
//
// console.log(province)
// console.log(province_total_people)
