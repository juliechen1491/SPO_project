(function() {
  const courses = [
    { id: 'c-01', title: '外木山開放水域上課劵', tag: '游泳', price: 1880, image: 'https://images.unsplash.com/photo-1544551763-7ef4200e7951?q=80&w=1200&auto=format&fit=crop', level: '入門', description: '外木山開放水域體驗與安全講解，適合初學者建立信心。', features: ['小班制安全帶領','開放水域實作','即時動作回饋'], audience: ['想嘗試開放水域的新手','準備參加路跑到三鐵的跨域者'], goals: ['建立漂浮與換氣信心','學會直線與轉點'], equipment: ['泳鏡、泳帽','防寒衣（視季節）'], process: ['集合與安全說明','暖身與漂浮','定向練習','伴游實作'], location: '基隆 外木山', coach: 'Voro 教練團', schedule: '每週六 08:00 - 10:00', archived: false, promo: '限時優惠', sessions: [ {id:'s-0101', date:'2025-09-20', time:'08:00', capacity:12, registered:7, status:'開放'}, {id:'s-0102', date:'2025-10-04', time:'08:00', capacity:12, registered:12, status:'額滿'} ] },
    { id: 'c-02', title: '碧潭開放水域上課劵', tag: '游泳', price: 1380, image: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03f?q=80&w=1200&auto=format&fit=crop', level: '入門', description: '碧潭湖域開放水域適應課程，注重漂浮、換氣與方向感。', features: ['友善入門環境','循序漸進訓練'], audience: ['怕水但想突破者','準備挑戰開水域者'], goals: ['掌握基本換氣','建立方向感'], equipment: ['泳鏡、泳帽'], process: ['安全說明','漂浮與換氣','方向與轉點'], location: '新店 碧潭', coach: 'Voro 教練團', schedule: '每週日 08:00 - 10:00', archived: false, promo: '早鳥', sessions: [ {id:'s-0201', date:'2025-09-22', time:'08:00', capacity:15, registered:5, status:'開放'} ] },
    { id: 'c-03', title: '青草湖開放水域上課劵', tag: '游泳', price: 1880, image: 'https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?q=80&w=1200&auto=format&fit=crop', level: '初階', description: '青草湖實作導向，提升在開放水域中的穩定與配速。', features: ['情境模擬出發','中距離配速'], audience: ['具池泳基礎者','欲挑戰三鐵短距離者'], goals: ['穩定換氣節奏','有效轉點與視野'], equipment: ['泳鏡、泳帽','視需要穿防寒衣'], process: ['熱身與配速練習','轉點技巧','集體出發模擬'], location: '新竹 青草湖', coach: 'Voro 教練團', schedule: '雙週六 07:30 - 09:30', archived: false, promo: '早早鳥', sessions: [ {id:'s-0301', date:'2025-09-28', time:'07:30', capacity:10, registered:3, status:'開放'} ] },
    { id: 'c-04', title: '單車團騎技巧班｜安全過彎與隊形', tag: '單車', price: 1200, image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop', level: '初階', description: '路線實騎：隊形、手勢、過彎與補給，提升團騎安全。', features: ['團騎手勢標準化','過彎動線演練'], audience: ['初接觸團騎者','欲提升過彎技巧者'], goals: ['理解抽代與隊形','提升過彎穩定'], equipment: ['公路車/變速良好','安全帽、車燈'], process: ['場前檢查','隊形演練','路線實騎'], location: '台北 河濱', coach: 'Voro 教練團', schedule: '每週三 19:30 - 21:00', archived: false, rating: 4.6, studentsCount: 142, sessions: [ {id:'s-0401', date:'2025-09-25', time:'19:30', capacity:20, registered:19, status:'開放'} ] },
    { id: 'c-05', title: '跑步效率提升｜姿勢與步頻', tag: '跑步', price: 900, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop', level: '中階', description: '技術分解與力量訓練，降低受傷並提升配速經濟性。', features: ['姿勢矯正','節奏訓練'], audience: ['有跑步經驗者','欲改善姿勢者'], goals: ['提升跑步經濟性','降低受傷風險'], equipment: ['跑鞋、運動服','水壺/毛巾'], process: ['動作診斷','步頻與落地','核心與力量'], location: '台北 大安森林公園', coach: 'Voro 教練團', schedule: '每週二 19:00 - 20:30', archived: false, sessions: [ {id:'s-0501', date:'2025-10-02', time:'19:00', capacity:20, registered:8, status:'開放'} ] },
    { id: 'c-06', title: '鐵人完賽計畫｜12 週訓練', tag: '鐵人', price: 4800, image: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1200&auto=format&fit=crop', level: '高階', description: '12 週結構化課表與團練，整合游泳、單車、跑步進展。', features: ['週期化編排','三項整合訓練'], audience: ['短距離完賽者','欲挑戰更長距離者'], goals: ['完賽能力建立','配速與補給策略'], equipment: ['泳單跑基本裝備','心率錶或功率計（選）'], process: ['週期設計說明','分項重點訓練','模擬賽'], location: '台北 / 線上混合', coach: 'Voro 主教練', schedule: '滾動梯次（請洽詢）', archived: false, sessions: [ {id:'s-0601', date:'2025-10-06', time:'20:00', capacity:30, registered:11, status:'開放'} ] },
    { id: 'c-07', title: '越野跑入門工作坊（2024）', tag: '跑步', price: 0, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', level: '入門', description: '已結束之工作坊，提供影片回放與教材下載。', features: ['地形辨識','越野基本功'], audience: ['越野新手'], goals: ['認識裝備','基礎上下坡技巧'], equipment: ['越野鞋','補給水袋'], process: ['講解與示範','步態練習'], location: '台中 大坑', coach: 'Voro 教練團', schedule: '已結束', archived: true, sessions: [] }
  ];

  const news = [
    { id: 'n-01', title: '早應該貼出的告別，讓我們一起祝福全新的開始', date: '2025-07-23 17:45', author: '范寶蓮', views: 186 },
    { id: 'n-02', title: '【城市洞察】林口的蛻變：從風大台地到機能都會', date: '2025-07-20 23:16', author: '范寶蓮', views: 125 },
    { id: 'n-03', title: '從外地拓展重新了解的城市發展——新竹篇', date: '2025-06-30 17:48', author: '范寶蓮', views: 179 }
  ];

  const services = [
    { id: 's-01', title: '單車託運', desc: '比賽與訓練的貼心後勤', image: 'https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&w=1200&auto=format&fit=crop' },
    { id: 's-02', title: '一對一游泳矯正', desc: '自由式動作優化', image: 'https://images.unsplash.com/photo-1520975954732-35dd222996f0?q=80&w=1200&auto=format&fit=crop' },
    { id: 's-03', title: '跑步姿勢分析', desc: '降低受傷風險', image: 'https://images.unsplash.com/photo-1526401485004-2fda9f4f5f61?q=80&w=1200&auto=format&fit=crop' }
  ];
  const categories = [
    { id: 'cat-swim', name: '游泳', tag: '游泳' },
    { id: 'cat-bike', name: '單車', tag: '單車' },
    { id: 'cat-run', name: '跑步', tag: '跑步' },
    { id: 'cat-tri', name: '鐵人', tag: '鐵人' }
  ];
  const instructors = [
    { id: 'coach-01', name: 'Voro 主教練', title: '三鐵總教練', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
    { id: 'coach-02', name: '游泳教練 A', title: '開放水域', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600&auto=format&fit=crop' },
    { id: 'coach-03', name: '單車教練 B', title: '團騎與技巧', avatar: 'https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=600&auto=format&fit=crop' },
    { id: 'coach-04', name: '跑步教練 C', title: '跑姿與力量', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' }
  ];

  window.VoroData = { courses, news, services, categories, instructors };
})();


