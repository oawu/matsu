/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
  var $container = $('#container');
  var $go_time = $('<div />').append ($('<h2 />').addClass ('t').text ('遊行時間')).appendTo ($container);
  var $path = $('<div />').append ($('<h2 />').addClass ('t').text ('繞境路關')).appendTo ($container);
  var $sort = $('<div />').append ($('<h2 />').addClass ('t').text ('藝閣順序')).appendTo ($container);
  var $precaution = $('<div />').append ($('<h2 />').addClass ('t').text ('注意事項')).appendTo ($container);

  var go_times = [
        '農曆三月十九、二十日每日中午十二時０分，依編排號次以國樂車為首，停廟西側民主路口，其他藝閣依號次排列於後，中午十二時三十分進入遊行路線。晚間六時三十分依號次集合於廟西側民主路指定地點，晚間七時準時進入遊行路線。',
        '農曆三月廿一、廿二、廿三日晚間六時三十分，依號次集合於廟西側民主路指定地點，晚間七時準時進入遊行路線，遊行完畢後解散。'
      ].forEach (function (t) {
        $go_time.append ($('<section />').addClass ('vs').text (t));
      });

  var paths = [
        { t: '農曆三月十九日下午',
          vs: [
            {v: '廟前起馬', t: ''},
            {v: '中山路', t: ''},
            {v: '東引道', t: ''},
            {v: '陸橋', t: ''},
            {v: '義民路', t: ''},
            {v: '民主路', t: ''},
            {v: '文化路', t: ''},
            {v: '大同路', t: ''},
            {v: '華勝路', t: ''},
            {v: '民享路', t: ''},
            {v: '公園路', t: ''},
            {v: '民治路', t: ''},
            {v: '北辰路', t: '公園南側'},
            {v: '文化路', t: '老人會館'},
            {v: '太平路', t: ''},
            {v: '文仁路', t: ''},
            {v: '北辰路', t: ''},
            {v: '公園路', t: ''},
            {v: '文仁路', t: ''},
            {v: '華勝路', t: ''},
            {v: '文明路', t: ''},
            {v: '仁愛路', t: ''},
            {v: '民享路', t: ''},
            {v: '華勝路', t: ''},
            {v: '華南路', t: '第二停車場'},
            {v: '休息', t: ''}
          ]
        },
        { t: '農曆三月十九日晚間',
          vs: [
            {v: '廟前出發', t: ''},
            {v: '中山路', t: ''},
            {v: '東引道', t: ''},
            {v: '陸橋', t: ''},
            {v: '義民路', t: ''},
            {v: '大同路', t: ''},
            {v: '文昌路', t: ''},
            {v: '民族路', t: ''},
            {v: '文化路', t: ''},
            {v: '民有路', t: ''},
            {v: '華勝路', t: ''},
            {v: '民治路', t: ''},
            {v: '民樂路', t: ''},
            {v: '民政路', t: ''},
            {v: '公園路', t: ''},
            {v: '文星路', t: ''},
            {v: '華勝路', t: ''},
            {v: '大同路', t: ''},
            {v: '文化路', t: ''},
            {v: '民主路', t: ''},
            {v: '義民路', t: ''},
            {v: '陸橋', t: ''},
            {v: '東引道', t: ''},
            {v: '中山路', t: ''},
            {v: '休息', t: ''}
          ]
        },
        { t: '農曆三月二十下午',
          vs: [
            {v: '廟前出發', t: ''},
            {v: '中山路', t: ''},
            {v: '東引道', t: ''},
            {v: '陸橋', t: ''},
            {v: '義民路', t: ''},
            {v: '大同路', t: ''},
            {v: '華勝路', t: ''},
            {v: '民享路', t: ''},
            {v: '民樂路', t: ''},
            {v: '穎寧街', t: ''},
            {v: '華勝路', t: ''},
            {v: '北辰派出所前', t: ''},
            {v: '新街巡天宮前迴轉南向', t: ''},
            {v: '北辰派出所前', t: ''},
            {v: '華勝路', t: ''},
            {v: '文仁路', t: ''},
            {v: '吉祥路', t: ''},
            {v: '文明路', t: ''},
            {v: '公園路', t: ''},
            {v: '文星路', t: ''},
            {v: '吉祥路', t: ''},
            {v: '民有路', t: ''},
            {v: '華勝路', t: ''},
            {v: '華南路', t: '第二停車場'},
            {v: '休息', t: ''}
          ]
        },
        { t: '農曆三月二十晚間',
          vs: [
            {v: '廟前出發', t: ''},
            {v: '中山路', t: ''},
            {v: '民生路', t: ''},
            {v: '義民路', t: ''},
            {v: '民主路', t: ''},
            {v: '文化路', t: ''},
            {v: '中正路', t: ''},
            {v: '仁和路', t: ''},
            {v: '大同路', t: ''},
            {v: '文昌路', t: ''},
            {v: '文明路', t: ''},
            {v: '華勝路', t: ''},
            {v: '民政路', t: ''},
            {v: '公園路', t: ''},
            {v: '文化路', t: ''},
            {v: '民主路', t: ''},
            {v: '義民路', t: ''},
            {v: '陸橋', t: ''},
            {v: '東引道', t: ''},
            {v: '中山路', t: ''},
            {v: '休息', t: ''}
          ]
        },
        { t: '農曆三月廿一晚間',
          vs: [
            {v: '廟前出發', t: ''},
            {v: '中山路', t: ''},
            {v: '民生路', t: ''},
            {v: '益安路', t: ''},
            {v: '大同路', t: ''},
            {v: '義民路', t: ''},
            {v: '中正路', t: ''},
            {v: '廟後', t: ''},
            {v: '廟東', t: ''},
            {v: '廟前', t: ''},
            {v: '中山路', t: ''},
            {v: '光明路', t: ''},
            {v: '文化路', t: ''},
            {v: '圓環', t: ''},
            {v: '休息', t: ''}
          ]
        },
        { t: '農曆三月廿二晚間',
          vs: [
            {v: '廟前出發', t: ''},
            {v: '中山路', t: ''},
            {v: '集合後開始評審', t: ''},
            {v: '民生路', t: ''},
            {v: '益安路', t: ''},
            {v: '公民路', t: ''},
            {v: '文化路', t: ''},
            {v: '民主路', t: ''},
            {v: '義民路', t: ''},
            {v: '民生路', t: ''},
            {v: '中山路', t: ''},
            {v: '廟前定點評審', t: ''},
            {v: '民主路', t: ''},
            {v: '圓環', t: ''}
          ]
        },
        { t: '農曆三月廿三晚間',
          vs: [
            {v: '廟前出發', t: ''},
            {v: '中山路', t: ''},
            {v: '民生路', t: ''},
            {v: '義民路', t: ''},
            {v: '大同路', t: ''},
            {v: '新民路', t: ''},
            {v: '中正路', t: ''},
            {v: '仁和路', t: ''},
            {v: '益安路', t: ''},
            {v: '民生路', t: ''},
            {v: '中山路', t: ''},
            {v: '廟前頒獎及落馬儀式', t: ''},
            {v: '民主路', t: ''},
            {v: '圓環', t: ''},
            {v: '圓滿結束', t: ''}
          ]
        }
      ];
  $path.append (paths.map (function (t) {
    return $('<h3 />').addClass ('st').text (t.t).add ($('<section />').addClass ('vs').addClass ('p').append (t.vs.map (function (t) {
      return $('<span >').attr ('title', t.t !== '' ? '(' + t.t + ')' : '').text (t.v);
    })));
  }));

  var sorts = [
        {t: '朝天宮國樂車', n: ''},
        {t: '金懿順媽祖轎班會（日本神轎）', n: ''},
        {t: '魯班公會', n: '垓下歌'},
        {t: '汽車運輸鋪', n: '洛花河'},
        {t: '東陽里', n: '媽祖收晏公'},
        {t: '華勝里', n: '媽祖飛昇'},
        {t: '光民里', n: '媽祖護航'},
        {t: '點心鋪', n: '四海龍王朝聖'},
        {t: '米鋪', n: '北港媽祖嘉年華會'},
        {t: '賜福里', n: '龍王來朝拜媽祖'},
        {t: '電器商', n: '遊龍戲鳳到北港'},
        {t: '仁安里', n: '花開富貴平安如意'},
        {t: '青果鋪', n: '九鯉化龍躍雲端'},
        {t: '義民里', n: '蝶花、蜂舞、花香人間'},
        {t: '中和里', n: '觀音送子'},
        {t: '共榮里', n: '北港朝天宮媽祖繞境'},
        {t: '餅鋪', n: '古代婚禮'},
        {t: '鮮魚鋪', n: '鯉魚躍龍門'},
        {t: '東華里', n: '雙龍奪珠'},
        {t: '西勢里', n: '白沙屯媽祖涉濁水溪'},
        {t: '西藥鋪', n: '媽祖救親'},
        {t: '屠宰鋪', n: '降龍伏虎'},
        {t: '仁和里', n: '潘桃盛會'},
        {t: '油車什殼飼料鋪', n: '熱血台灣三太子'},
        {t: '光復里', n: '北港媽祖南巡府城會香'},
        {t: '紙箔鋪', n: '財神到'},
        {t: '南安里', n: '四海龍王朝拜媽祖'},
        {t: '柑郊', n: '顏思齊渡海開墾台灣'},
        {t: '公館里', n: '慈雲灑潤'},
        {t: '大同里', n: '聖母伏神龍'}
      ];
      
  $sort.append ($('<div />').addClass ('p').append (
    $('<ol />').addClass ('vs').append (sorts.map (function (t) {
    return $('<li />').text (t.t).append (t.n !== '' ? ' - ' + t.n: null);
  }))));

  var precautions = [
        '遊行中領隊人員，可視實際狀況調整遊行路線。',
        '請各里辦公處事前配合藝閣所經路線兩旁障礙物清理及樹木突出枝幹修剪。',
        '請參加各單位負責人要求製作者提供兩百字左右藝閣典故介紹及藝閣車上配置合格滅火器及絕緣材質撐高桿各兩隻以上。',
        '請參加各單位負責人，應事前切實檢查藝閣車輛之性能、電器路線及兒童乘坐之安全性，如遇雨應關閉發電機總電源，以確保人員安全。',
        '遊行前請參加單位負責人與製作者，切實檢查兒童乘坐是否繫好安全帶，在行進中請注意道路兩旁跨越電線、樹木及其他障礙物，並注意車上兒童安全，遊行中嚴禁丟擲糖果，以免造成參觀人潮推擠危險。',
        '三月十九日及二十日在遊行中遇聖母神轎隊伍，請優先禮讓聖母神轎隊伍通過。',
        '請北港義警隊於藝閣所經之處，協助管制車輛及疏導交通，在遊行中請協助車隊隔離與參觀民眾之安全距離。',
      ];
  $precaution.append ($('<ol />').addClass ('vs').append (precautions.map (function (t) {
    return $('<li />').text (t);
  })));

  $('#loading').fadeOut (function () {
    $(this).hide (function () {
      $(this).remove ();
    });
  });
});