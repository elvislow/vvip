<script>
"use strict";
/* =========================================================================
   DATA  (every text field is { en, zh })
   ========================================================================= */
const SITE = {
  name: 'VVIP Malaysia Team Services',
  nameZh: 'VVIP 马来西亚精英团队服务',
  wa: '60145243477',
  waDisplay: '014-524 3477',
  waLink: 'https://wa.link/thwstq',
};

/* Rates live here only (confirmed by the client, Nov 2026). */
const RATE_BODYGUARD = 'RM450';
const RATE_OT = 'RM40';
const RATE_OUT = 'RM150';
const RATE_ALPHARD = 'RM110';

const WORK = 'scenarios';

/* Service area, worded the same everywhere */
const AREAS = { en: 'KL, JB, Batu Pahat, Penang, Thailand<small>Other places: ask us first</small>', zh: '吉隆坡、新山、峇株巴辖、槟城、泰国<small>其他地区请先问我们</small>' };
const BG_RATE = { en: `${RATE_BODYGUARD} for 8 hours<small>Overtime ${RATE_OT}/hour<br>Outstation +${RATE_OUT}/day</small>`, zh: `${RATE_BODYGUARD} / 8 小时<small>超时 ${RATE_OT} / 小时<br>外地出差 +${RATE_OUT} / 天</small>` };

/* Scenario cards: a real photo with live type over it. */
const PROJECTS = [
  {
    slug: 'business', cat: 'protection', icon: 'briefcase',
    img: '/images/sclass-rear.webp', focus: '50% 40%',
    alt: { en: 'Rear seat of a Mercedes S-Class with a VVIP chauffeur at the wheel', zh: 'VVIP 司机驾驶奔驰 S-Class，从后座看出去' },
    title: { en: 'Business engagements', zh: '商务活动护卫' },
    lines: { en: ['Business', 'engagements'], zh: ['商务活动', '护卫'] },
    summary: { en: 'Protection and transport for meetings, site visits and business itineraries.', zh: '会议、考察、商务行程，安保和接送一起安排。' },
    arrange: { en: ['Bodyguard cum driver for the full day', 'Premium vehicle matched to the occasion', 'Point‑to‑point transfers between meetings', 'Discreet presence, no fuss at the venue'], zh: ['保镖兼司机全天跟随', '按场合配豪华车型', '会议之间点对点接送', '低调随行，不打扰现场'] },
    setup: { en: [['Service', 'Bodyguard cum driver (car not included)'], ['Rate guide', BG_RATE.en], ['Areas', AREAS.en], ['Tell us', 'Date, venue, number of guests']], zh: [['服务', '保镖兼司机（不包车）'], ['价格参考', BG_RATE.zh], ['地区', AREAS.zh], ['请告诉我们', '日期、地点、人数']] },
    second: { img: '/images/alphard-seats.webp', alt: { en: 'Alphard captain seats in black leather', zh: 'Alphard 黑色真皮航空座椅' } },
  },
  {
    slug: 'celebrity', cat: 'protection', icon: 'star',
    img: '/images/celebrity-escort.webp', focus: '50% 35%',
    alt: { en: 'Two VVIP bodyguards in uniform standing beside a guest at a venue entrance', zh: '两位穿制服的 VVIP 保镖站在嘉宾两旁，在场地入口' },
    title: { en: 'Celebrity escort & protection', zh: '明星护卫' },
    lines: { en: ['Celebrity', 'protection'], zh: ['明星', '护卫'] },
    summary: { en: 'Close protection for artists and public figures through crowds, venues and travel.', zh: '艺人和公众人物出场、走动、出行，全程贴身护卫。' },
    arrange: { en: ['Close protection in crowds', 'Arrival and exit planned in advance', 'Vehicle on standby at the venue', 'Escort between hotel, venue and airport'], zh: ['人群中贴身保护', '提前安排进场和离场', '车辆在现场待命', '酒店、场地、机场之间护送'] },
    setup: { en: [['Service', 'Executive protection team'], ['Rate guide', 'Quote on request'], ['Areas', AREAS.en], ['Tell us', 'Event, date, crowd size']], zh: [['服务', '精英保镖团队'], ['价格参考', '按需求报价'], ['地区', AREAS.zh], ['请告诉我们', '活动、日期、人流']] },
    second: { img: '/images/fleet-kl.webp', alt: { en: 'VVIP fleet parked in Kuala Lumpur', zh: 'VVIP 车队停在吉隆坡' } },
  },
  {
    slug: 'high-value', cat: 'protection', icon: 'gem',
    img: '/images/alphard-black-close.webp', focus: '35% 50%',
    alt: { en: 'Close-up of a black Alphard at the kerb with more vehicles behind', zh: '黑色 Alphard 停在路边，后面还有车队' },
    title: { en: 'Watch, jewellery & cash escort', zh: '名表、珠宝、现金交易护送' },
    lines: { en: ['High-value', 'escort'], zh: ['贵重交易', '护送'] },
    summary: { en: 'Escort for luxury watch, jewellery and cash transactions, door to door.', zh: '名表交易、珠宝交易、现金交易，门到门护送。' },
    arrange: { en: ['Bodyguard escort to and from the meeting', 'Driver and vehicle waiting on site', 'Route planned before the day', 'Low‑profile vehicle on request'], zh: ['保镖陪同来回交易地点', '司机和车在现场等', '当天之前先规划路线', '可要求低调车型'] },
    setup: { en: [['Service', 'Bodyguard escort'], ['Rate guide', BG_RATE.en], ['Areas', AREAS.en], ['Tell us', 'Date, pick-up and meeting point']], zh: [['服务', '外出保镖护航'], ['价格参考', BG_RATE.zh], ['地区', AREAS.zh], ['请告诉我们', '日期、接送点、交易地点']] },
    second: { img: '/images/fleet-kl.webp', alt: { en: 'VVIP vehicles lined up and ready', zh: 'VVIP 车队整装待命' } },
  },
  {
    slug: 'events', cat: 'protection', icon: 'flag',
    img: '/images/team-four.webp', focus: '58% 52%',
    alt: { en: 'Four VVIP bodyguards in black standing together at an event venue', zh: '四位 VVIP 保镖穿黑衣，在活动场地站在一起' },
    title: { en: 'Corporate events & celebrations', zh: '企业活动与庆典' },
    lines: { en: ['Events &', 'celebrations'], zh: ['企业活动', '与庆典'] },
    summary: { en: 'Security and guest transport for corporate events, weddings and special occasions.', zh: '企业活动、婚礼、庆典，安保和宾客接送一起包办。' },
    arrange: { en: ['Security team at the venue', 'VIP guest arrival and departure', 'Fleet for guest transfers', 'One contact person for the whole day'], zh: ['现场安保团队', '贵宾进场和离场', '车队负责宾客接送', '全天一个联络人'] },
    setup: { en: [['Service', 'Protection + fleet'], ['Rate guide', 'Quote on request'], ['Areas', AREAS.en], ['Tell us', 'Event, date, guest count']], zh: [['服务', '安保 + 车队'], ['价格参考', '按需求报价'], ['地区', AREAS.zh], ['请告诉我们', '活动、日期、宾客人数']] },
    second: { img: '/images/fleet-kl.webp', alt: { en: 'VVIP fleet parked in a row', zh: 'VVIP 车队一字排开' } },
  },
  {
    slug: 'cross-border', cat: 'transport', icon: 'globe',
    img: '/images/alphard-thai-black.webp', focus: '50% 70%',
    alt: { en: 'Three black Alphards parked in front of wind turbines in Thailand', zh: '三辆黑色 Alphard 停在泰国的风车前' },
    title: { en: 'Cross‑border business travel', zh: '跨境商务出行' },
    lines: { en: ['Cross‑border', 'travel'], zh: ['跨境', '出行'] },
    summary: { en: 'Ground transport and protection for trips across Malaysia and into Thailand.', zh: '马来西亚各地和泰国之间的出行，陆上交通和安保一起安排。' },
    arrange: { en: ['Chauffeur and vehicle for the whole trip', 'Bodyguard on request', 'Thailand one‑stop service available', 'Can connect with a private jet leg'], zh: ['全程司机和车辆', '可加配保镖', '可配合泰国一站式服务', '可以和私人飞机行程衔接'] },
    setup: { en: [['Service', 'Chauffeur + protection'], ['Rate guide', 'Quote on request'], ['Areas', AREAS.en], ['Tell us', 'Route, dates, passengers']], zh: [['服务', '司机 + 安保'], ['价格参考', '按需求报价'], ['地区', AREAS.zh], ['请告诉我们', '路线、日期、人数']] },
    second: { img: '/images/alphard-bangkok.webp', alt: { en: 'White Alphards on a street in Bangkok', zh: '白色 Alphard 在曼谷街头' } },
  },
  {
    slug: 'airport-transfers', cat: 'transport', icon: 'plane',
    img: '/images/driver-rain.webp', focus: '60% 45%',
    alt: { en: 'VVIP chauffeur driving an Alphard on a rainy highway, navigation on the dashboard', zh: 'VVIP 司机在雨天驾驶 Alphard，仪表台上开着导航' },
    title: { en: 'Airport transfers', zh: '机场接送' },
    lines: { en: ['Airport', 'transfers'], zh: ['机场', '接送'] },
    summary: { en: 'Alphard and chauffeur to or from the airport, meeting you at arrivals. Quoted per trip.', zh: 'Alphard 配司机来回机场，在入境大厅接你。按趟报价。' },
    arrange: { en: ['Experienced professional chauffeur', 'Toyota Alphard or similar premium vehicle', 'We track your flight and meet you at arrivals', 'Bodyguard on request'], zh: ['资深专业司机', 'Toyota Alphard 或同级豪华车', '跟进航班，在入境大厅接机', '可加配保镖'] },
    setup: { en: [['Service', 'Airport transfer with Alphard'], ['Rate guide', 'Quoted per trip, by airport and destination'], ['Areas', AREAS.en], ['Tell us', 'Flight number, date, pick-up or drop-off address']], zh: [['服务', '机场接送（Alphard）'], ['价格参考', '按趟报价，看机场和目的地'], ['地区', AREAS.zh], ['请告诉我们', '航班号、日期、接送地址']] },
    second: { img: '/images/alphard-seats.webp', alt: { en: 'Alphard captain seats', zh: 'Alphard 航空座椅' } },
  },
  {
    slug: 'city-alphard', cat: 'transport', icon: 'car',
    img: '/images/alphard-arch.webp', focus: '50% 85%',
    alt: { en: 'White Alphards lined up under a concrete arch', zh: '白色 Alphard 在水泥拱门下排成一列' },
    title: { en: 'City Alphard by the hour', zh: '市区包车' },
    lines: { en: ['City', 'Alphard'], zh: ['市区', '包车'] },
    summary: { en: `An Alphard with chauffeur in the city area, booked by the hour at ${RATE_ALPHARD}. Airport runs are not included.`, zh: `市区内 Alphard 配司机，按小时 ${RATE_ALPHARD}。不包括机场接送。` },
    arrange: { en: ['Experienced professional chauffeur', 'Toyota Alphard or similar premium vehicle', 'Meetings, shopping, dinners and errands around the city', 'Chauffeur waits for you between stops'], zh: ['资深专业司机', 'Toyota Alphard 或同级豪华车', '市内会议、购物、饭局、办事', '每一站之间司机都在等你'] },
    setup: { en: [['Service', 'City Alphard with chauffeur'], ['Rate guide', `${RATE_ALPHARD} per hour<small>City area only. Airport runs not included</small>`], ['Areas', AREAS.en], ['Tell us', 'Date, start time, hours needed']], zh: [['服务', '市区包车（Alphard）'], ['价格参考', `${RATE_ALPHARD} / 小时<small>只限市区，不包括机场</small>`], ['地区', AREAS.zh], ['请告诉我们', '日期、开始时间、需要几个小时']] },
    second: { img: '/images/driver-hands.webp', alt: { en: 'VVIP chauffeur at the wheel', zh: 'VVIP 司机握着方向盘' } },
  },
  {
    slug: 'charter', cat: 'transport', icon: 'users',
    img: '/images/alphard-bangkok.webp', focus: '50% 72%',
    alt: { en: 'Two white Alphards travelling together on a street in Bangkok', zh: '两辆白色 Alphard 在曼谷街头一起出行' },
    title: { en: 'Long‑distance & team charter', zh: '长途包车与团队包车' },
    lines: { en: ['Team', 'charter'], zh: ['团队', '包车'] },
    summary: { en: 'Several vehicles moving together for groups, families and long‑distance trips.', zh: '多辆车一起出发，适合团体、家庭和长途行程。' },
    arrange: { en: ['Multiple vehicles in one booking', 'Long‑distance and interstate routes', 'Drivers who know the roads', 'Bodyguards can ride along'], zh: ['一次预约多辆车', '长途和跨州路线', '熟悉路况的司机', '可以加派保镖随车'] },
    setup: { en: [['Service', 'Long‑distance / team charter'], ['Rate guide', 'Quote on request'], ['Areas', AREAS.en], ['Tell us', 'Route, dates, passengers, luggage']], zh: [['服务', '长途包车 / 团队包车'], ['价格参考', '按需求报价'], ['地区', AREAS.zh], ['请告诉我们', '路线、日期、人数、行李']] },
    second: { img: '/images/alphard-thai-black.webp', alt: { en: 'Three black Alphards in Thailand', zh: '三辆黑色 Alphard 在泰国' } },
  },
  {
    slug: 'private-jet', cat: 'air', icon: 'plane',
    img: '/images/jet-door.webp', focus: '55% 40%',
    alt: { en: 'Open door of a private jet on the apron, wing and engine in view', zh: '停机坪上的私人飞机，舱门打开，看得到机翼和引擎' },
    title: { en: 'Private jet charter', zh: '私人飞机包机' },
    lines: { en: ['Private', 'jet'], zh: ['私人', '飞机'] },
    summary: { en: 'Exclusive, time‑efficient private air travel, connected to ground transport on both ends.', zh: '既高效又高端的私人空中旅程，落地前后的陆上交通一起衔接。' },
    arrange: { en: ['Private jet charter', 'Choose your preferred jet model', 'Chauffeur waiting at both airports', 'Protection team on request'], zh: ['私人飞机包机', '可以指定想要的机型', '两边机场都有司机接送', '可加配保镖团队'] },
    setup: { en: [['Service', 'Private jet charter'], ['Rate guide', 'Quote on request'], ['Jet model', 'Tell us your preference'], ['Tell us', 'Route, date, passengers, jet model']], zh: [['服务', '豪华私人包机'], ['价格参考', '按需求报价'], ['机型', '告诉我们你想要的'], ['请告诉我们', '航线、日期、人数、机型']] },
    second: { img: '/images/jet-cabin.webp', alt: { en: 'Private jet cabin with cream leather seats', zh: '私人飞机机舱，米色真皮座椅' } },
  },
];

const CATEGORIES = [
  ['all', { en: 'All', zh: '全部' }],
  ['protection', { en: 'Protection', zh: '保镖护卫' }],
  ['transport', { en: 'Ground transport', zh: '陆上交通' }],
  ['air', { en: 'Private jet', zh: '私人飞机' }],
];

const SERVICES = [
  {
    id: 'jet', name: { en: 'Luxury private jet charter', zh: '豪华私人包机' },
    price: { en: 'Quote on request', zh: '按需求报价' }, time: { en: 'Per flight', zh: '按航程' },
    line: { en: 'Exclusive, seamless and time‑efficient private air travel.', zh: '尊享既高效又高端的私人空中旅程。' },
    includes: { en: ['Choose your preferred jet model', 'Ground transport at both ends', 'Protection team on request', 'One team handles air and ground'], zh: ['可指定机型', '起飞和落地两边都有车接送', '可加配保镖团队', '陆空由同一个团队安排'] },
  },
  {
    id: 'thailand', name: { en: 'Thailand one‑stop service', zh: '泰国一站式服务' },
    price: { en: 'From RM1,000', zh: 'RM1,000 起' }, time: { en: 'Per item', zh: '按项目' },
    line: { en: 'Protection, escorts and VIP experiences in Thailand, arranged by one team.', zh: '在泰国的保护、护送和尊享体验，由同一个团队安排。' },
    includes: { en: ['Police escort, airport to hotel from RM1,500', 'Military bodyguard from RM1,800 per person (10 hours)', 'Local guide & translator from RM1,000 (10 hours)', 'Helicopter flights over Bangkok from RM15,000', 'Chao Phraya river cruise from RM2,300', 'Luxury hotel booking, skydiving in Pattaya, Thai costume photo shoot'], zh: ['警察护送，机场到酒店 RM1,500 起', '军人保镖每人 RM1,800 起（10 小时）', '向导兼翻译 RM1,000 起（10 小时）', '曼谷直升机观光 RM15,000 起', '湄南河豪华游船 RM2,300 起', '豪华酒店、芭提雅跳伞、泰服写真'] },
  },
  {
    id: 'charter', name: { en: 'Long‑distance charter', zh: '长途包车' },
    price: { en: 'Quote on request', zh: '按需求报价' }, time: { en: 'Per trip', zh: '按行程' },
    line: { en: 'One or several vehicles for long trips, groups and cross‑border travel.', zh: '一辆或多辆车，长途、团体、跨境出行都可以。' },
    includes: { en: ['Single vehicle or full fleet', 'Interstate and cross‑border routes', 'Drivers who know the roads', 'Bodyguards can ride along'], zh: ['单车或整个车队', '跨州、跨境路线', '熟悉路况的司机', '可加派保镖随车'] },
  },
  {
    id: 'airport', name: { en: 'Airport transfers', zh: '机场接送' },
    price: { en: 'Quote on request', zh: '按需求报价' }, time: { en: 'Per trip', zh: '按趟' },
    line: { en: 'Alphard and chauffeur to or from the airport, quoted per trip.', zh: 'Alphard 配司机来回机场，按趟报价。' },
    includes: { en: ['Experienced professional chauffeur', 'Toyota Alphard', 'Flight tracked, met at arrivals', 'Bodyguard on request'], zh: ['资深专业司机', 'Toyota Alphard', '跟进航班，入境大厅接机', '可加配保镖'] },
  },
  {
    id: 'city', name: { en: 'City Alphard by the hour', zh: '市区包车' },
    price: { en: `${RATE_ALPHARD} / hour`, zh: `${RATE_ALPHARD} / 小时` }, time: { en: 'City area only', zh: '只限市区' },
    line: { en: 'An Alphard with chauffeur around the city, booked by the hour. Airport runs not included.', zh: '市区内 Alphard 配司机，按小时计。不包括机场接送。' },
    includes: { en: ['Experienced professional chauffeur', 'Toyota Alphard', 'Meetings, shopping, dinners', 'Chauffeur waits between stops'], zh: ['资深专业司机', 'Toyota Alphard', '会议、购物、饭局', '每一站之间司机等你'] },
  },
  {
    id: 'bodyguard', name: { en: 'Bodyguard cum driver (car not included)', zh: '保镖兼司机（不包车）' }, short: { en: 'Bodyguard cum driver', zh: '保镖兼司机' },
    price: { en: `${RATE_BODYGUARD} / 8 hours`, zh: `${RATE_BODYGUARD} / 8 小时` }, time: { en: '8‑hour block', zh: '8 小时一节' },
    line: { en: 'One professional who drives your car and protects you for the day.', zh: '一个人开你的车、负责护卫，跟你一整天。' },
    includes: { en: ['Trained security personnel', 'Drives your vehicle', `Overtime ${RATE_OT}/hour`, `Outstation trips +${RATE_OUT}/day`, 'Watch, jewellery and cash transaction escort'], zh: ['顶尖专业护卫', '开你的车', `超时 ${RATE_OT} / 小时`, `外地出差 +${RATE_OUT} / 天`, '名表、珠宝、现金交易护送'] },
  },
];

const PROCESS = [
  [{ en: 'Tell us what you need', zh: '说明需求' }, { en: 'WhatsApp', zh: 'WhatsApp' }, { en: 'Services needed, bodyguard and chauffeur setup, date, destination, and the jet model if you need one.', zh: '需要什么服务、保镖和司机怎么配、日期、地点，需要包机的话说想要的机型。' }],
  [{ en: 'Get a custom plan', zh: '收到专属方案' }, { en: 'Before the day', zh: '服务之前' }, { en: 'We put together the team, vehicles and timing, with the price.', zh: '我们配好人手、车辆和时间，连同价格一起给你。' }],
  [{ en: 'Confirm', zh: '确认' }, { en: 'Your call', zh: '由你决定' }, { en: 'Once you confirm, the booking is locked in.', zh: '你确认之后，就锁定这个安排。' }],
  [{ en: 'On the day', zh: '服务当天' }, { en: 'Door to door', zh: '全程跟随' }, { en: 'Your team arrives on time and stays with you until the job is done.', zh: '团队准时到，一直跟到行程结束。' }],
];

const FAQ = [
  [{ en: 'Which areas do you cover?', zh: '服务哪些地区？' }, { en: 'Kuala Lumpur, Johor Bahru, Batu Pahat and Penang in Malaysia, and Thailand. For other places, ask us first.', zh: '马来西亚的吉隆坡、新山、峇株巴辖、槟城，还有泰国。其他地方请先问我们。' }],
  [{ en: 'How much is a bodyguard cum driver?', zh: '保镖兼司机怎么收费？' }, { en: `${RATE_BODYGUARD} for 8 hours, car not included (the bodyguard drives your car). Overtime is ${RATE_OT} per hour. Outstation trips add ${RATE_OUT} per day.`, zh: `${RATE_BODYGUARD} / 8 小时，不包车（保镖开你的车）。超时 ${RATE_OT} / 小时。去外地出差每天加 ${RATE_OUT}。` }],
  [{ en: 'How much are city Alphard and airport transfers?', zh: '市区包车和机场接送怎么收费？' }, { en: `City Alphard with chauffeur is ${RATE_ALPHARD} per hour, within the city area only. Airport transfers are a separate service, quoted per trip by airport and destination.`, zh: `市区包车（Alphard 配司机）${RATE_ALPHARD} / 小时，只限市区。机场接送是另一项服务，按趟报价，看机场和目的地。` }],
  [{ en: 'How are long-distance charters and private jets priced?', zh: '长途包车和私人飞机怎么收费？' }, { en: 'Both are quoted on request. Send us the route, dates and number of passengers on WhatsApp.', zh: '都按需求报价。在 WhatsApp 把路线、日期和人数发给我们就好。' }],
  [{ en: 'What is the Thailand one‑stop service?', zh: '泰国一站式服务包括什么？' }, { en: 'Police escorts, military bodyguards, local guides and translators, helicopter flights, Chao Phraya river cruises, luxury hotel booking and more, all arranged by our team. Ask on WhatsApp for the full price list.', zh: '警察护送、军人保镖、当地向导兼翻译、直升机观光、湄南河游船、豪华酒店预订等等，都由我们团队安排。完整价目表请在 WhatsApp 问我们。' }],
  [{ en: 'What should I tell you when I enquire?', zh: '咨询的时候要提供什么？' }, { en: 'The services you need and the security or chauffeur setup, the service date and destination, and your preferred private jet model if applicable.', zh: '需要的服务和保镖 / 司机配置、服务日期和地点，需要包机的话加上想要的机型。' }],
  [{ en: 'Can I combine protection, cars and a private jet?', zh: '安保、车和私人飞机可以一起订吗？' }, { en: 'Yes. One team arranges protection, luxury ground transport and private aviation together.', zh: '可以。安保、豪华陆上交通和私人飞机由同一个团队一起安排。' }],
  [{ en: 'Who are your clients?', zh: '你们的客户是谁？' }, { en: 'VVIP clients, celebrities, high‑net‑worth individuals and companies holding events.', zh: 'VVIP 客户、名人、高净值人士，还有办活动的企业。' }],
];

const TOOLS = [
  ['shield', { en: 'Protection', zh: '保镖护卫' }], ['car', { en: 'Chauffeur', zh: '专属司机' }],
  ['plane', { en: 'Private jet', zh: '私人飞机' }], ['gem', { en: 'High-value escort', zh: '贵重交易' }],
  ['briefcase', { en: 'Business', zh: '商务行程' }], ['star', { en: 'Celebrity', zh: '明星护卫' }],
  ['globe', { en: 'Cross‑border', zh: '跨境出行' }], ['users', { en: 'Team charter', zh: '团队包车' }],
];

const COVERAGE = [
  [{ en: 'Malaysia', zh: '马来西亚' }, [[{ en: 'Kuala Lumpur', zh: '吉隆坡' }, 'KL'], [{ en: 'Johor Bahru', zh: '新山' }, 'JB'], [{ en: 'Batu Pahat', zh: '峇株巴辖' }, 'BP'], [{ en: 'Penang', zh: '槟城' }, 'PG']]],
  [{ en: 'Thailand', zh: '泰国' }, [[{ en: 'Thailand', zh: '泰国' }, 'TH']]],
];


/* City landing pages: one per city we cover. Rates in RM apply to the Malaysian cities. */
const MY_RATES = { en: `Bodyguard cum driver ${RATE_BODYGUARD} for 8 hours · City Alphard ${RATE_ALPHARD}/hour (airport not included)`, zh: `保镖兼司机 ${RATE_BODYGUARD} / 8 小时 · 市区包车 ${RATE_ALPHARD} / 小时（不含机场）` };
const TH_RATES = { en: 'Police escort from RM1,500 · military bodyguard from RM1,800 per person', zh: '警察护送 RM1,500 起 · 军人保镖每人 RM1,800 起' };
const CITIES = [
  { key: 'kl', slug: 'bodyguard-kuala-lumpur', country: 'my', img: '/images/fleet-kl.webp',
    name: { en: 'Kuala Lumpur', zh: '吉隆坡' }, linkLabel: { en: 'Bodyguard in Kuala Lumpur', zh: '吉隆坡保镖' },
    airports: { en: 'KLIA and KLIA2 (Sepang), Sultan Abdul Aziz Shah Airport (Subang)', zh: 'KLIA 与 KLIA2（雪邦）、苏丹阿都阿兹沙机场（梳邦）' },
    note: { en: 'Kuala Lumpur is where most of our business engagements, celebrity appearances and corporate events happen. A bodyguard cum driver covers meetings across the city in one 8-hour block, and an Alphard with chauffeur handles airport runs to KLIA and evening events.', zh: '吉隆坡是我们商务活动、明星出场和企业活动最多的城市。保镖兼司机一节 8 小时就能跟完市内的会议行程，Alphard 配司机负责 KLIA 机场接送和晚上的活动。' } },
  { key: 'jb', slug: 'bodyguard-johor-bahru', country: 'my', img: '/images/alphard-black-close.webp',
    name: { en: 'Johor Bahru', zh: '新山' }, linkLabel: { en: 'Bodyguard in Johor Bahru', zh: '新山保镖' },
    airports: { en: 'Senai International Airport', zh: '士乃国际机场' },
    note: { en: 'In Johor Bahru we arrange bodyguards, chauffeurs and team charters for business trips and private itineraries, and long-distance runs up to Batu Pahat or Kuala Lumpur when a trip continues north.', zh: '在新山，我们安排保镖、司机和团队包车，跑商务行程和私人行程；行程要往北走的话，也可以长途包车去峇株巴辖或吉隆坡。' } },
  { key: 'bp', slug: 'bodyguard-batu-pahat', country: 'my', img: '/images/team-four.webp',
    name: { en: 'Batu Pahat', zh: '峇株巴辖' }, linkLabel: { en: 'Bodyguard in Batu Pahat', zh: '峇株巴辖保镖' },
    airports: { en: 'Nearest: Senai International Airport (Johor Bahru) or KLIA', zh: '最近的机场：士乃国际机场（新山）或 KLIA' },
    note: { en: 'Batu Pahat is one of our home cities. We cover local escorts, events and celebrations, and pick-ups to and from the airports in Johor Bahru and Kuala Lumpur.', zh: '峇株巴辖是我们的据点之一。本地护送、活动和庆典都可以安排，也负责来回新山和吉隆坡机场的接送。' } },
  { key: 'pg', slug: 'bodyguard-penang', country: 'my', img: '/images/sclass-rear.webp',
    name: { en: 'Penang', zh: '槟城' }, linkLabel: { en: 'Bodyguard in Penang', zh: '槟城保镖' },
    airports: { en: 'Penang International Airport (Bayan Lepas)', zh: '槟城国际机场（峇六拜）' },
    note: { en: 'In Penang we look after visiting executives, celebrities and families: bodyguard cum driver for the day, Alphard transfers from Penang International Airport, and runs across the bridge to the mainland.', zh: '在槟城，我们负责来访的高管、名人和家庭：保镖兼司机跟一整天、槟城国际机场的 Alphard 接送，也可以过桥去大陆那边。' } },
  { key: 'th', slug: 'bodyguard-thailand', country: 'th', img: '/images/alphard-bangkok.webp',
    name: { en: 'Thailand', zh: '泰国' }, linkLabel: { en: 'Bodyguard in Thailand', zh: '泰国保镖' },
    airports: { en: 'Suvarnabhumi and Don Mueang (Bangkok), Phuket, Chiang Mai', zh: '素万那普、廊曼（曼谷）、普吉、清迈' },
    note: { en: 'Our Thailand one-stop service covers Bangkok, Pattaya, Phuket and Chiang Mai: police escorts from the airport, military bodyguards, chauffeured Alphards, local guides and translators, plus VIP experiences such as helicopter flights and river cruises. One team plans it all before you land.', zh: '泰国一站式服务覆盖曼谷、芭提雅、普吉和清迈：机场警察护送、军人保镖、Alphard 配司机、当地向导兼翻译，还有直升机观光、湄南河游船这些尊享体验。你落地之前，同一个团队全部安排好。' } },
];

/* UI strings used from script */
const UI = {
  showing: { en: (n, N) => `Showing ${n} of ${N} scenarios`, zh: (n, N) => `显示 ${n} / ${N} 个场景` },
  scenarioN: { en: (n, N) => `Scenario ${n} of ${N}`, zh: (n, N) => `场景 ${n} / ${N}` },
  overview: { en: 'Overview', zh: '简介' }, arrange: { en: 'What we arrange', zh: '我们安排' }, setup: { en: 'Setup & rate', zh: '配置与价格' },
  enquire: { en: 'Enquire about this', zh: '咨询这个服务' }, all: { en: 'All scenarios', zh: '全部场景' },
  onTheGround: { en: 'On the ground', zh: '实拍' }, prev: { en: 'Previous', zh: '上一个' }, next: { en: 'Next', zh: '下一个' },
  request: { en: 'Enquire', zh: '咨询' }, typical: { en: 'Booking', zh: '计费' },
  ctaH: { en: 'Need a team <em class=k>on the ground?</em>', zh: '需要团队<em class=k>到场？</em>' },
  ctaP: { en: 'Tell us the service, date and destination. Our team will put together a custom arrangement.', zh: '告诉我们服务、日期和地点，客服会为你订制专属方案。' },
  ctaBtn: { en: 'WhatsApp us', zh: 'WhatsApp 咨询' }, ctaCopy: { en: 'Copy number', zh: '复制号码' },
  copied: { en: 'Copied', zh: '已复制' },
  other: { en: 'Something else', zh: '其他' },
  sending: { en: 'Preparing', zh: '准备中' },
  sum: { en: ['Name', 'Phone', 'Service', 'Date', 'Location', 'Jet model', 'Details'], zh: ['名字', '电话', '服务', '日期', '地点', '机型', '细节'] },
  waIntro: { en: 'Hi VVIP MSIA, I would like to enquire:', zh: '你好 VVIP MSIA，我想咨询：' },
  likeText: { en: (t) => `About: ${t}. `, zh: (t) => `关于：${t}。` },
  customText: { en: 'My situation: ', zh: '我的情况：' },
  areas: { en: 'Areas we serve', zh: '服务地区' },
  cityH1: { en: (c) => `Bodyguard & chauffeur in <em class=k>${c}</em>`, zh: (c) => `<em class=k>${c}</em>保镖与专属司机` },
  cityLead: { en: (c) => `Bodyguard cum driver, Alphard chauffeur, team charter and private jet arrangements in ${c}. Tell us the date and plan on WhatsApp and we put the team together.`, zh: (c) => `${c}的保镖兼司机、Alphard 司机、团队包车和私人飞机安排。在 WhatsApp 告诉我们日期和行程，我们帮你配好团队。` },
  cityFacts: { en: ['Services', 'Rates', 'Airports', 'How to book'], zh: ['服务', '价格', '机场', '怎么预约'] },
  cityServices: { en: 'Bodyguard cum driver · Alphard chauffeur · Long-distance and team charter · Private jet', zh: '保镖兼司机 · Alphard 司机 · 长途与团队包车 · 私人飞机' },
  cityBook: { en: '<span class=nw>WhatsApp 014-524 3477</span> with the service, date and place', zh: '<span class=nw>WhatsApp 014-524 3477</span>，说明服务、日期和地点' },
  cityArrange: { en: (c) => `What we arrange in ${c}`, zh: (c) => `我们在${c}安排什么` },
  cityScen: { en: 'Common requests', zh: '常见需求' },
  cityQ: { en: 'Questions', zh: '常见问题' },
  cityOther: { en: 'Other cities', zh: '其他城市' },
  home: { en: 'Home', zh: '首页' },
  langBtn: { en: '中文', zh: 'EN' }, langLabel: { en: '切换到中文', zh: 'Switch to English' },
};

/* =========================================================================
   HELPERS + LANGUAGE
   ========================================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ic = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const pad = (n) => String(n).padStart(2, '0');
const bySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = (() => { const mem = {}; return {
  get(k) { try { return window.localStorage.getItem(k); } catch (e) { return mem[k] ?? null; } },
  set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { mem[k] = v; } },
}; })();

/* Language comes from the address: /zh/... is Chinese, everything else English */
let lang = /^\/zh(\/|$)/.test(location.pathname) ? 'zh' : 'en';
const BASE = 'https://vvip-five.vercel.app';
const U = (p) => (lang === 'zh' ? '/zh' : '') + p;
const put = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; return el; };
const L = (o) => (o && typeof o === 'object' && !Array.isArray(o) && ('en' in o)) ? o[lang] : o;
const catLabel = (c) => L((CATEGORIES.find((x) => x[0] === c) || [, c])[1]);

function applyStatic() {
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
  $$('[data-zh]').forEach((el) => {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    el.innerHTML = lang === 'zh' ? el.dataset.zh : el.dataset.en;
  });
  $$('[data-zh-ph]').forEach((el) => {
    if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder;
    el.placeholder = lang === 'zh' ? el.dataset.zhPh : el.dataset.enPh;
  });
  $$('[data-lang-toggle]').forEach((b) => { b.textContent = L(UI.langBtn); b.setAttribute('aria-label', L(UI.langLabel)); });
  $$('[data-zw]').forEach((el) => { delete el.dataset.zw; });
  zhWrap();
}


/* Chinese line breaking: keep words together (Intl.Segmenter), so lines never split inside a word */
const ZH_TARGETS = '.hero-name, .hero-role, .hero-kicker span, .h1, .h2, .h3:not(.step .h3), .step .st, .acc-trigger .q, .lead, .body, .work-head p, .svc-head p, .pt-title span, .poster-cap .t, .cta-band h2, .cta-band p, .svc-card h2, .svc-card p, .svc-row .d, .case-nav b, .step p, .acc-panel p, .checks span, .deliv span, .specs dd, .contact-card p, .next-steps span, .footer-brand p, .archive-note p, .empty p, .value p, .form-foot p, .help span, .gal-caption span, .ix-row .cl, .ix-preview p, .footer-col li a, .cov li';
const seg = (typeof Intl !== 'undefined' && Intl.Segmenter) ? new Intl.Segmenter('zh', { granularity: 'word' }) : null;
function zhWrap(root = document) {
  if (lang !== 'zh' || !seg) return;
  $$(ZH_TARGETS, root).forEach((el) => {
    if (el.dataset.zw === '1') return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) { const n = walker.currentNode; if (/[㐀-鿿]/.test(n.nodeValue) && !n.parentElement.closest('.zw')) nodes.push(n); }
    nodes.forEach((n) => {
      const frag = document.createDocumentFragment();
      for (const { segment } of seg.segment(n.nodeValue)) {
        if (/[㐀-鿿]/.test(segment) && segment.length > 1) { const sp = document.createElement('span'); sp.className = 'zw'; sp.textContent = segment; frag.appendChild(sp); }
        else frag.appendChild(document.createTextNode(segment));
      }
      n.replaceWith(frag);
    });
    el.dataset.zw = '1';
  });
}

/* =========================================================================
   COMPONENTS
   ========================================================================= */
function posterHTML(p, o = {}) {
  const link = o.link !== false;
  const tag = link ? 'a' : 'div';
  const n = PROJECTS.indexOf(p) + 1;
  return `<${tag} class="poster${o.rv ? ' rv' : ''}"${link ? ` href="${U(`/${WORK}/${p.slug}/`)}"` : ''} data-cat="${p.cat}" data-slug="${p.slug}" style="--i:${o.i || 0}">
    <div class="poster-frame has-photo" style="--pbg:#16222e">
      <img src="${p.img}" width="900" height="1350" alt="${o.alt === false ? '' : esc(L(p.alt))}"${o.eager ? '' : ' loading="lazy"'} decoding="async" style="object-position:${p.focus}">
      <span class="pnum" aria-hidden="true">${pad(n)}</span>
      <span class="pico" aria-hidden="true">${ic(p.icon)}</span>
      <div class="pt pt--bottom" style="--pt-ink:#eef2f6" aria-hidden="true">
        <p class="pt-title">${L(p.lines).map((l) => `<span>${l}</span>`).join('')}</p>
        <div class="pt-meta"><span>VVIP MSIA</span><span>${catLabel(p.cat)}</span></div>
      </div>
    </div>
    ${o.cap ? `<div class="poster-cap"><span class="idx">${pad(n)}</span><span class="t">${L(p.title)}</span>${ic('arrow-up-right', 'go')}<span class="c">${catLabel(p.cat)}</span></div>` : ''}
  </${tag}>`;
}

function ctaHTML() {
  return `<section class="cta-band on-ink" aria-label="Enquire">
    <div class="cta-globe" aria-hidden="true" data-globe></div>
    <div class="wrap">
      <div>
        <h2 class="rv">${L(UI.ctaH)}</h2>
        <p class="rv" style="--i:1">${L(UI.ctaP)}</p>
      </div>
      <div class="btn-row rv" style="--i:2">
        <a class="btn btn-light" href="${SITE.waLink}" target="_blank" rel="noopener">${ic('message')} ${L(UI.ctaBtn)}</a>
        <button class="btn btn-ghost-light" type="button" data-copy="${SITE.waDisplay}">${ic('copy')} ${L(UI.ctaCopy)}</button>
      </div>
    </div>
  </section>`;
}

function renderCollections() {
  $$('[data-tools]').forEach((ul) => {
    ul.innerHTML = TOOLS.map(([icon, label]) => `<li class="tool"><span class="tool-ic">${ic(icon)}</span><span class="tool-label">${L(label)}</span></li>`).join('');
  });
  put('[data-home-grid]', PROJECTS.slice(0, 8).map((p, i) => posterHTML(p, { cap: true, rv: true, i: i % 4 })).join(''));
  put('[data-work-grid]', PROJECTS.map((p, i) => posterHTML(p, { cap: true, rv: true, i: i % 4 })).join(''));
  put('[data-index-list]', PROJECTS.map((p, i) => `<a class="ix-row" href="${U(`/${WORK}/${p.slug}/`)}" data-slug="${p.slug}" data-cat="${p.cat}">
      <span class="n">${pad(i + 1)}</span><span class="t">${L(p.title)}</span><span class="cl">${L(p.summary)}</span><span class="ct">${catLabel(p.cat)}</span><span class="y"></span>${ic('arrow-up-right')}
    </a>`).join(''));
  put('[data-footer-work]', PROJECTS.slice(0, 5).map((p) => `<li><a href="${U(`/${WORK}/${p.slug}/`)}">${L(p.title)}</a></li>`).join('') + `<li><a href="${U(`/${WORK}/`)}">${L(UI.all)}</a></li>`);
  put('[data-footer-cities]', CITIES.map((c) => `<li><a href="${U(`/${c.slug}/`)}">${L(c.linkLabel)}</a></li>`).join(''));
  put('[data-home-services]', SERVICES.map((s, i) => `<a class="svc-row" href="${U(`/services/#svc-${s.id}`)}">
      <span class="n">${pad(i + 1)}</span><span class="h3">${L(s.name)}</span><span class="d">${L(s.line)}</span><span class="p">${L(s.price)}</span>${ic('arrow-right')}
    </a>`).join(''));
  put('[data-svc-cards]', SERVICES.map((s, i) => `<article class="svc-card rv" id="svc-${s.id}" style="--i:${i % 2}">
      <div class="top"><span class="n">${pad(i + 1)}</span><span class="meta">${L(s.time)}</span></div>
      <h2>${L(s.name)}</h2>
      <p>${L(s.line)}</p>
      <ul class="checks">${L(s.includes).map((x) => `<li>${ic('check')}<span>${x}</span></li>`).join('')}</ul>
      <div class="price"><div><b>${L(s.price)}</b><span>${L(UI.typical)}: ${L(s.time)}</span></div><a class="btn btn-sm" href="${U(`/contact/?p=svc:${s.id}`)}">${L(UI.request)} ${ic('arrow-right', 'ic-go')}</a></div>
    </article>`).join(''));
  put('[data-steps]', PROCESS.map(([h, t, d], i) => `<li class="step rv" style="--i:${i}"><span class="k">${pad(i + 1)}</span><div><h3 class="h3"><span class="st">${L(h)}</span> <small>${L(t)}</small></h3><p>${L(d)}</p></div></li>`).join(''));
  put('[data-faq]', faqHTML(FAQ));
  const __unused = FAQ.map(([q, a], i) => `<div class="acc-item${i === 0 ? ' is-open' : ''}">
      <h3><button class="acc-trigger" type="button" aria-expanded="${i === 0}" aria-controls="faq-${i}" id="faq-t-${i}"><span class="q">${L(q)}</span><span class="pm">${ic('plus')}</span></button></h3>
      <div class="acc-panel" id="faq-${i}" role="region" aria-labelledby="faq-t-${i}"><div><p>${L(a)}</p></div></div>
    </div>`).join('');
  put('[data-coverage]', COVERAGE.map(([country, cities]) => `<div class="cov"><h3>${L(country)}</h3><ul>${cities.map(([c, code]) => { const ct = CITIES.find((x) => x.key === CITY_KEYS[c.en]); return `<li><a href="${U(`/${ct.slug}/`)}">${L(c)}</a><small>${code}</small></li>`; }).join('')}</ul></div>`).join(''));
  $$('[data-cta]').forEach((el) => { el.innerHTML = ctaHTML(); });
  renderMarquee();
  renderMap();
  zhWrap();
  if (typeof initGlobes === 'function' && typeof globeIO !== 'undefined') initGlobes();
  /* Service choices in the form follow SERVICES */
  const seg = $('[data-seg="type"]');
  if (!seg) return;
  const picked = typeValue();
  seg.innerHTML = SERVICES.map((s) => `<button type="button" role="radio" aria-checked="${picked === s.id}" data-value="${s.id}">${L(s.short || s.name)}</button>`).join('') + `<button type="button" role="radio" aria-checked="${picked === 'other'}" data-value="other">${L(UI.other)}</button>`;
  initSeg(seg);
}

function faqHTML(list, prefix = 'faq') {
  return list.map(([q, a], i) => `<div class="acc-item${i === 0 ? ' is-open' : ''}">
      <h3><button class="acc-trigger" type="button" aria-expanded="${i === 0}" aria-controls="${prefix}-${i}" id="${prefix}-t-${i}"><span class="q">${L(q)}</span><span class="pm">${ic('plus')}</span></button></h3>
      <div class="acc-panel" id="${prefix}-${i}" role="region" aria-labelledby="${prefix}-t-${i}"><div><p>${L(a)}</p></div></div>
    </div>`).join('');
}

function splitLetters() {
  $$('[data-letters]').forEach((el) => { el.innerHTML = el.textContent.split('').map((c, i) => `<span class="ch" style="--i:${i}">${c}</span>`).join(''); });
}

/* =========================================================================
   SCENARIO DETAIL
   ========================================================================= */
function renderProject(p) {
  const n = PROJECTS.indexOf(p);
  const prev = PROJECTS[(n - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(n + 1) % PROJECTS.length];
  if (!$('[data-project]')) return;
  $('[data-project]').innerHTML = `
  <article class="wrap case">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${U(`/${WORK}/`)}">${ic('arrow-left')} ${L(UI.all)}</a><span class="sep" aria-hidden="true"></span><span aria-current="page">${L(p.title)}</span></nav>
    <div class="case-grid">
      <div class="case-poster rv">
        ${posterHTML(p, { link: false, eager: true })}
        <p class="zoom-hint"><span>${catLabel(p.cat)}</span><span>${L(UI.scenarioN)(n + 1, PROJECTS.length)}</span></p>
      </div>
      <div class="case-info">
        <ul class="chips rv" aria-label="Category"><li class="chip">${catLabel(p.cat)}</li><li class="chip">VVIP MSIA</li></ul>
        <h1 class="h1 rv" style="--i:1">${L(p.title)}</h1>
        <p class="lead rv" style="--i:2">${L(p.summary)}</p>
        <section class="case-block rv"><h2>${L(UI.arrange)}</h2><ul class="deliv">${L(p.arrange).map((d) => `<li>${ic('check')}<span>${d}</span></li>`).join('')}</ul></section>
        <section class="case-block rv"><h2>${L(UI.setup)}</h2><dl class="specs">${L(p.setup).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></section>
        <div class="btn-row rv" style="margin-top:44px">
          <a class="btn" href="${U(`/contact/?p=like:${p.slug}`)}">${L(UI.enquire)} ${ic('arrow-right', 'ic-go')}</a>
          <a class="btn btn-ghost" href="${SITE.waLink}" target="_blank" rel="noopener">${ic('message')} WhatsApp</a>
        </div>
      </div>
    </div>

    <section class="case-gallery" aria-label="Photo">
      <h2 class="chip-label rv">${L(UI.onTheGround)}</h2>
      <figure>
        <div class="photo rv"><img src="${p.second.img}" width="1400" height="933" loading="lazy" decoding="async" alt="${esc(L(p.second.alt))}"></div>
        <figcaption class="gal-caption rv"><span>${L(p.second.alt)}</span><span class="mono">VVIP MSIA</span></figcaption>
      </figure>
    </section>

    <nav class="case-nav" aria-label="More scenarios">
      <a href="${U(`/${WORK}/${prev.slug}/`)}" class="prev">${posterHTML(prev, { link: false, alt: false })}<span><small>${ic('arrow-left')} ${L(UI.prev)}</small><b>${L(prev.title)}</b></span></a>
      <a href="${U(`/${WORK}/${next.slug}/`)}" class="next"><span><small>${L(UI.next)} ${ic('arrow-right')}</small><b>${L(next.title)}</b></span>${posterHTML(next, { link: false, alt: false })}</a>
    </nav>
  </article>`;
  zhWrap($('[data-project]'));
}


/* =========================================================================
   CITY PAGE
   ========================================================================= */
function cityFaq(c) {
  const n = c.name, my = c.country === 'my';
  return [
    [{ en: `Do you provide bodyguards in ${n.en}?`, zh: `${n.zh}有保镖服务吗？` }, { en: `Yes. ${n.en} is one of the cities we cover, for bodyguard cum driver, executive protection, chauffeur and charter arrangements.`, zh: `有。${n.zh}是我们的服务城市之一，保镖兼司机、精英保镖、司机和包车都可以安排。` }],
    [{ en: `How much is a bodyguard in ${n.en}?`, zh: `${n.zh}请保镖怎么收费？` }, my ? { en: `A bodyguard cum driver is ${RATE_BODYGUARD} for 8 hours (car not included), overtime ${RATE_OT} per hour. City Alphard and airport transfers are priced separately; see our services page.`, zh: `保镖兼司机 ${RATE_BODYGUARD} / 8 小时（不包车），超时 ${RATE_OT} / 小时。市区包车和机场接送另外计价，详情看服务页。` } : { en: 'A military bodyguard starts from RM1,800 per person for 10 hours, and a police escort from the airport to your hotel starts from RM1,500. Send us your plan on WhatsApp for the full price list.', zh: '军人保镖每人 RM1,800 起（10 小时），机场到酒店的警察护送 RM1,500 起。把行程发到 WhatsApp，我们给你完整价目表。' }],
    [{ en: `Can you pick me up from the airport in ${n.en}?`, zh: `可以在${n.zh}机场接机吗？` }, { en: `Yes. Tell us your flight and we arrange the chauffeur and, if needed, a bodyguard. Airports: ${c.airports.en}.`, zh: `可以。告诉我们航班，我们安排司机，需要的话再加保镖。机场：${c.airports.zh}。` }],
  ];
}
function renderCity(c) {
  const box = $('[data-city]');
  if (!box || !c) return;
  const n = L(c.name), my = c.country === 'my';
  const picks = c.country === 'my' ? ['business', 'celebrity', 'airport-transfers', 'city-alphard'] : ['cross-border', 'airport-transfers', 'celebrity', 'private-jet'];
  const posters = picks.map((k) => bySlug(k) || bySlug(k.replace('‑', '-'))).filter(Boolean);
  box.innerHTML = `
  <article class="wrap case city">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${U('/')}">${ic('arrow-left')} ${L(UI.home)}</a><span class="sep" aria-hidden="true"></span><a href="${U('/#coverage')}">${L(UI.areas)}</a><span class="sep" aria-hidden="true"></span><span aria-current="page">${n}</span></nav>
    <div class="city-head">
      <div>
        <h2 class="chip-label rv">${L(my ? { en: 'Malaysia', zh: '马来西亚' } : { en: 'Thailand', zh: '泰国' })} · ${n}</h2>
        <h1 class="h1 rv" style="--i:1">${L(UI.cityH1)(n)}</h1>
        <p class="lead rv" style="--i:2">${L(UI.cityLead)(n)}</p>
        <div class="btn-row rv" style="--i:3;margin-top:28px">
          <a class="btn" href="${SITE.waLink}" target="_blank" rel="noopener">${ic('message')} ${L(UI.ctaBtn)}</a>
          <a class="btn btn-ghost" href="${U(`/contact/?p=custom`)}">${L(UI.enquire)}</a>
        </div>
      </div>
      <figure class="photo rv city-photo" style="--i:2"><img src="${c.img}" width="1200" height="900" alt="${esc(L({ en: `VVIP team and vehicles for ${c.name.en}`, zh: `VVIP 在${c.name.zh}的团队与车辆` }))}" decoding="async"></figure>
    </div>
    <dl class="specs city-facts rv">
      ${L(UI.cityFacts).map((k, i) => `<div><dt>${k}</dt><dd>${[L(UI.cityServices), L(my ? MY_RATES : TH_RATES), L(c.airports), L(UI.cityBook)][i]}</dd></div>`).join('')}
    </dl>
    <section class="case-block rv"><h2>${L(UI.cityArrange)(n)}</h2><p class="body">${L(c.note)}</p></section>
    <section class="section" style="padding-bottom:0">
      <h2 class="chip-label rv" style="margin-bottom:28px">${L(UI.cityScen)}</h2>
      <div class="poster-grid">${posters.map((p, i) => posterHTML(p, { cap: true, rv: true, i })).join('')}</div>
    </section>
    <section class="section faq-grid" style="padding-bottom:0">
      <div class="rv"><h2 class="chip-label">${L(UI.cityQ)}</h2></div>
      <div class="acc rv" style="--i:1">${faqHTML(cityFaq(c), 'cfaq')}</div>
    </section>
    <nav class="section city-links" aria-label="${esc(L(UI.cityOther))}">
      <h2 class="chip-label rv" style="margin-bottom:20px">${L(UI.cityOther)}</h2>
      <ul class="city-list rv">${CITIES.filter((x) => x !== c).map((x) => `<li><a href="${U(`/${x.slug}/`)}">${L(x.linkLabel)} ${ic('arrow-up-right')}</a></li>`).join('')}</ul>
    </nav>
  </article>`;
  zhWrap(box);
}

/* =========================================================================
   SEO: title, description, canonical, language alternates, structured data
   ========================================================================= */
const NAME = { en: 'VVIP Malaysia', zh: 'VVIP 马来西亚' };
function metaFor(r) {
  const nm = L(NAME);
  const c = r.page === 'city' ? CITIES.find((x) => x.slug === r.slug) : null;
  const p = r.page === 'project' ? bySlug(r.slug) : null;
  const M = {
    home: [{ en: `Bodyguard Malaysia | Bodyguard Cum Driver & Alphard | ${nm}`, zh: `马来西亚保镖 | 保镖兼司机、Alphard 包车 | ${nm}` },
      { en: `Hire a bodyguard in Malaysia: bodyguard cum driver ${RATE_BODYGUARD}/8h, city Alphard ${RATE_ALPHARD}/h, private jet. KL, Johor Bahru, Batu Pahat, Penang, Thailand.`, zh: `马来西亚请保镖：保镖兼司机 ${RATE_BODYGUARD} / 8 小时起，Alphard 司机 ${RATE_ALPHARD} / 小时，团队包车与私人飞机。服务吉隆坡、新山、峇株巴辖、槟城、泰国。` }],
    services: [{ en: `Bodyguard Cum Driver ${RATE_BODYGUARD}/8h & City Alphard ${RATE_ALPHARD}/h | ${nm}`, zh: `服务与价格：保镖兼司机 ${RATE_BODYGUARD}/8小时、市区包车 ${RATE_ALPHARD}/小时 | ${nm}` },
      { en: `Bodyguard cum driver ${RATE_BODYGUARD} for 8 hours, Toyota Alphard with chauffeur ${RATE_ALPHARD} per hour in the city, long-distance and team charter, private jet charter. How to book and FAQ.`, zh: `保镖兼司机 ${RATE_BODYGUARD} / 8 小时，市区 Toyota Alphard ${RATE_ALPHARD} / 小时，长途与团队包车，私人飞机包机。预约流程与常见问题。` }],
    scenarios: [{ en: `VIP Protection & Chauffeur Scenarios | ${nm}`, zh: `服务场景：商务护卫、明星护卫、企业活动、跨境出行 | ${nm}` },
      { en: 'Nine common arrangements: business engagements, celebrity protection, watch, jewellery and cash escort, events, cross-border travel, airport transfers, city Alphard by the hour, team charter and private jet.', zh: '九种常见安排：商务活动、明星护卫、名表珠宝现金护送、企业活动、跨境出行、机场接送、市区包车、团队包车和私人飞机。' }],
    contact: [{ en: `Book a Bodyguard or Chauffeur on WhatsApp | ${nm}`, zh: `WhatsApp 预约保镖或司机 | ${nm}` },
      { en: 'Send the service, date and destination and get a custom arrangement on WhatsApp 014-524 3477. Instagram, Xiaohongshu and WeChat.', zh: '告诉我们服务、日期和地点，WhatsApp 014-524 3477 为你订制方案。也可以在 Instagram、小红书、微信联系。' }],
    'not-found': [{ en: `Page not found | ${nm}`, zh: `找不到页面 | ${nm}` }, { en: 'This page does not exist.', zh: '这一页不存在。' }],
  };
  if (p) return [`${L(p.title)} | ${nm}`, `${L(p.summary)} ${L(p.setup).map(([k, v]) => `${k}: ${v.replace(/<small>/g, ', ').replace(/<br>/g, ', ').replace(/<[^>]+>/g, '')}`).slice(0, 2).join('. ')}.`];
  if (c) return [L({ en: `Bodyguard in ${c.name.en} | Bodyguard Cum Driver | ${nm}`, zh: `${c.name.zh}保镖 | 保镖兼司机、Alphard 司机 | ${nm}` }),
    L({ en: `Hire a bodyguard in ${c.name.en}: bodyguard cum driver, VIP protection, Alphard chauffeur, airport pick-up and team charter. ${c.country === 'my' ? `From ${RATE_BODYGUARD} for 8 hours.` : 'Quote on request.'} Book on WhatsApp.`, zh: `${c.name.zh}请保镖：保镖兼司机、VIP 护卫、Alphard 司机、机场接送与团队包车。${c.country === 'my' ? `${RATE_BODYGUARD} / 8 小时起。` : '按需求报价。'}WhatsApp 预约。` })];
  return M[r.page].map(L);
}
function setMeta(sel, attr, val, create) {
  let el = document.head.querySelector(sel);
  if (!el && create) { el = document.createElement(create.tag); Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v)); document.head.appendChild(el); }
  if (el) el.setAttribute(attr, val);
}
function applyMeta() {
  const [title, desc] = metaFor(route);
  document.title = title;
  setMeta('meta[name="description"]', 'content', desc);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', desc);
  setMeta('meta[property="og:locale"]', 'content', lang === 'zh' ? 'zh_CN' : 'en_MY', { tag: 'meta', attrs: { property: 'og:locale' } });
  if (!route.path) { setMeta('meta[name="robots"]', 'content', 'noindex', { tag: 'meta', attrs: { name: 'robots' } }); return; }
  const en = BASE + route.path, zh = BASE + '/zh' + route.path;
  const self = lang === 'zh' ? zh : en;
  setMeta('link[rel="canonical"]', 'href', self, { tag: 'link', attrs: { rel: 'canonical' } });
  setMeta('meta[property="og:url"]', 'content', self);
  setMeta('link[hreflang="en"]', 'href', en, { tag: 'link', attrs: { rel: 'alternate', hreflang: 'en' } });
  setMeta('link[hreflang="zh-Hans"]', 'href', zh, { tag: 'link', attrs: { rel: 'alternate', hreflang: 'zh-Hans' } });
  setMeta('link[hreflang="x-default"]', 'href', en, { tag: 'link', attrs: { rel: 'alternate', hreflang: 'x-default' } });
  const crumbs = [[L(UI.home), BASE + U('/')]];
  if (route.page === 'project') crumbs.push([L({ en: 'Scenarios', zh: '服务场景' }), BASE + U(`/${WORK}/`)], [L(bySlug(route.slug).title), self]);
  else if (route.page === 'city') crumbs.push([L(UI.areas), BASE + U('/#coverage')], [L(CITIES.find((x) => x.slug === route.slug).name), self]);
  else if (route.page !== 'home') crumbs.push([title.split(' | ')[0], self]);
  const graph = [];
  if (crumbs.length > 1) graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })) });
  const faqList = route.page === 'services' ? FAQ : route.page === 'city' ? cityFaq(CITIES.find((x) => x.slug === route.slug)) : null;
  if (faqList) graph.push({ '@type': 'FAQPage', mainEntity: faqList.map(([q, a]) => ({ '@type': 'Question', name: L(q), acceptedAnswer: { '@type': 'Answer', text: L(a) } })) });
  if (route.page === 'services' || route.page === 'home') graph.push(...SERVICES.map((sv) => ({ '@type': 'Service', name: L(sv.name), description: L(sv.line), provider: { '@id': BASE + '/#org' }, areaServed: CITIES.map((x) => x.name.en),
    ...(sv.id === 'bodyguard' ? { offers: { '@type': 'Offer', price: RATE_BODYGUARD.replace(/\D/g, ''), priceCurrency: 'MYR', description: '8 hours' } } : {}) })));
  if (route.page === 'city') { const c = CITIES.find((x) => x.slug === route.slug); graph.push({ '@type': 'Service', name: L(c.linkLabel), serviceType: 'Bodyguard and chauffeur service', provider: { '@id': BASE + '/#org' }, areaServed: { '@type': 'City', name: c.name.en } }); }
  let ld = document.getElementById('ld-page');
  if (!ld) { ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'ld-page'; document.head.appendChild(ld); }
  ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

/* =========================================================================
   ROUTER: every page has its own address; this only decides which section shows
   ========================================================================= */
const pages = {};
$$('[data-page]').forEach((el) => { pages[el.dataset.page] = el; });
function parsePath(pathname) {
  const p = pathname.replace(/^\/zh(?=\/|$)/, '').replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
  if (p === '/') return { page: 'home', path: '/' };
  if (p === '/services' || p === '/contact' || p === '/' + WORK) return { page: p.slice(1), path: p + '/' };
  const m = p.match(/^\/([a-z0-9-]+)\/([a-z0-9-]+)$/);
  if (m && m[1] === WORK && bySlug(m[2])) return { page: 'project', slug: m[2], path: `/${WORK}/${m[2]}/` };
  const c = CITIES.find((x) => '/' + x.slug === p);
  if (c) return { page: 'city', slug: c.slug, path: `/${c.slug}/` };
  return { page: 'not-found', path: null };
}
const route = parsePath(location.pathname);
function setNav(page) {
  const navKey = page === 'project' ? WORK : page;
  $$('[data-nav]').forEach((a) => { if (a.dataset.nav === navKey) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
}
function showRoute() {
  Object.entries(pages).forEach(([k, el]) => { el.hidden = k !== route.page; });
  const pg = pages[route.page];
  if (pg) { pg.classList.add('is-entering'); void pg.offsetWidth; requestAnimationFrame(() => { pg.classList.remove('is-entering'); pg.classList.add('is-entered'); }); }
  if (route.page === 'project') renderProject(bySlug(route.slug));
  if (route.page === 'city') renderCity(CITIES.find((c) => c.slug === route.slug));
  applyMeta();
  setNav(route.page);
  observeReveals(pages[route.page] || document);
  if (route.page === 'contact') { try { const p = new URLSearchParams(location.search).get('p'); if (p) applyPrefill(p); } catch (e) {} }
  if (location.hash && location.hash.length > 1) {
    const t = document.getElementById(location.hash.slice(1));
    if (t) setTimeout(() => { t.scrollIntoView({ block: 'start' }); if (t.classList.contains('svc-card')) { t.classList.add('is-flash'); setTimeout(() => t.classList.remove('is-flash'), 1400); } }, 150);
  }
}
/* Internal links in the static markup are written for English; add /zh for Chinese pages */
function localiseLinks() {
  if (lang !== 'zh') return;
  $$('a[href^="/"]').forEach((a) => { const h = a.getAttribute('href'); if (!/^\/(zh(\/|$)|images\/|js\/|fonts\/)/.test(h)) a.setAttribute('href', '/zh' + h); });
}
/* In-page anchors and the skip link scroll smoothly */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!id) return;
  const t = a.hasAttribute('data-skip') ? $('#main') : document.getElementById(id);
  if (!t) return;
  e.preventDefault();
  if (a.hasAttribute('data-skip')) { t.focus({ preventScroll: true }); }
  t.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
});

/* REVEALS */
const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }) : null;
function observeReveals(root) {
  const items = $$('.rv:not(.in)', root);
  if (!io || reduced()) { items.forEach((el) => el.classList.add('in')); return; }
  requestAnimationFrame(() => items.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.96) el.classList.add('in'); else io.observe(el); }));
}
let revealTimer;
window.addEventListener('scroll', () => {
  clearTimeout(revealTimer);
  revealTimer = setTimeout(() => { $$('.page:not([hidden]) .rv:not(.in), .site-footer .rv:not(.in)').forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in'); }); }, 400);
}, { passive: true });
const header = $('.site-header');
const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });

/* MOBILE MENU */
const sheet = $('#sheet');
const openBtn = $('[data-menu-open]');
function openMenu() {
  sheet.hidden = false;
  requestAnimationFrame(() => sheet.classList.add('is-open'));
  openBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  setTimeout(() => { const a = $('.sheet-nav a', sheet); if (a) a.focus(); }, 60);
}
function closeMenu(returnFocus = true) {
  if (sheet.hidden) return;
  sheet.classList.remove('is-open');
  openBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  setTimeout(() => { if (!sheet.classList.contains('is-open')) sheet.hidden = true; }, 300);
  if (returnFocus) openBtn.focus();
}
openBtn.addEventListener('click', openMenu);
$('[data-menu-close]').addEventListener('click', () => closeMenu());
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !sheet.hidden) closeMenu();
  if (e.key === 'Tab' && !sheet.hidden) {
    const f = $$('a, button', sheet).filter((x) => x.offsetParent);
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.addEventListener('resize', () => { if (window.innerWidth > 1023) closeMenu(false); });

/* TOAST + COPY */
const toast = $('[data-toast]');
let toastTimer;
function showToast(msg) { $('[data-toast-text]').textContent = msg; toast.classList.add('is-on'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('is-on'), 2200); }
function fallbackCopy(text) { try { const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); } catch (e) {} }
function copyText(text) { if (window.origin === 'null' || !navigator.clipboard || !window.isSecureContext) { fallbackCopy(text); return; } try { navigator.clipboard.writeText(text).catch(() => fallbackCopy(text)); } catch (e) { fallbackCopy(text); } }
document.addEventListener('click', (e) => { const b = e.target.closest('[data-copy]'); if (!b) return; copyText(b.dataset.copy); showToast(`${L(UI.copied)}: ${b.dataset.copy}`); });
$('[data-top]')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }));

/* LANGUAGE TOGGLE: the other language is its own page */
document.addEventListener('click', (e) => {
  if (!e.target.closest('[data-lang-toggle]')) return;
  const bare = location.pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  location.href = (lang === 'zh' ? bare : '/zh' + (bare === '/' ? '/' : bare)) + location.search + location.hash;
});

/* SCENARIO INDEX */
const work = { cat: 'all', q: '', view: store.get('work-view') === 'index' ? 'index' : 'grid' };
function renderFilters() {
  if (!$('[data-filters]')) return;
  $('[data-filters]').innerHTML = CATEGORIES.map(([c, label]) => {
    const n = c === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c).length;
    return `<button type="button" aria-pressed="${work.cat === c}" data-cat="${c}">${L(label)}<sup>${n}</sup></button>`;
  }).join('');
}
function matches(p) {
  if (work.cat !== 'all' && p.cat !== work.cat) return false;
  if (!work.q) return true;
  const hay = [p.title.en, p.title.zh, p.summary.en, p.summary.zh, ...p.arrange.en, ...p.arrange.zh, catLabel(p.cat)].join(' ').toLowerCase().replace(/\u2011/g, '-');
  return work.q.split(/\s+/).every((w) => hay.includes(w));
}
function applyWork() {
  if (!$('[data-work-grid]')) return;
  const shown = PROJECTS.filter(matches);
  const set = new Set(shown.map((p) => p.slug));
  $$('[data-work-grid] .poster').forEach((el) => { el.hidden = !set.has(el.dataset.slug); if (!el.hidden) el.classList.add('in'); });
  $$('[data-index-list] .ix-row').forEach((el) => { el.hidden = !set.has(el.dataset.slug); });
  const none = shown.length === 0;
  $('[data-empty]').hidden = !none;
  $('[data-work-grid]').hidden = none || work.view !== 'grid';
  $('[data-work-index]').hidden = none || work.view !== 'index';
  $('[data-count]').textContent = L(UI.showing)(shown.length, PROJECTS.length);
  $$('[data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === work.view)));
  if (shown.length) setPreview(shown[0], true);
}
function setPreview(p, force) {
  const box = $('[data-ix-preview]');
  if (!force && box.dataset.slug === p.slug) return;
  box.dataset.slug = p.slug;
  box.innerHTML = posterHTML(p, { link: false, alt: false, eager: true }) + `<p>${L(p.summary)}</p>`;
  $$('.ix-row').forEach((r) => r.classList.toggle('is-hot', r.dataset.slug === p.slug));
}
$('[data-filters]')?.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-cat]');
  if (!b) return;
  work.cat = b.dataset.cat;
  $$('[data-filters] button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  applyWork();
});
const search = $('[data-search]');
search?.addEventListener('input', () => { work.q = search.value.trim().toLowerCase(); applyWork(); });
search?.addEventListener('keydown', (e) => { if (e.key === 'Escape') { search.value = ''; work.q = ''; applyWork(); } });
$$('[data-view]').forEach((b) => b.addEventListener('click', () => { work.view = b.dataset.view; store.set('work-view', work.view); applyWork(); }));
$('[data-clear]')?.addEventListener('click', () => { work.cat = 'all'; work.q = ''; search.value = ''; renderFilters(); applyWork(); search.focus(); });
$('[data-index-list]')?.addEventListener('mouseover', (e) => { const r = e.target.closest('.ix-row'); if (r) setPreview(bySlug(r.dataset.slug)); });
$('[data-index-list]')?.addEventListener('focusin', (e) => { const r = e.target.closest('.ix-row'); if (r) setPreview(bySlug(r.dataset.slug)); });

/* ACCORDION */
document.addEventListener('click', (e) => {
  const t = e.target.closest('.acc-trigger');
  if (!t) return;
  const item = t.closest('.acc-item');
  const open = !item.classList.contains('is-open');
  item.classList.toggle('is-open', open);
  t.setAttribute('aria-expanded', String(open));
});

/* =========================================================================
   ENQUIRY FORM -> WhatsApp
   ========================================================================= */
const form = $('[data-brief-form]');
const success = $('[data-success]');
const submitBtn = $('[data-submit]');
let tried = false;
const msg = $('#f-msg');
msg?.addEventListener('input', () => { if (msg.value.length > 800) msg.value = msg.value.slice(0, 800); $('[data-chars]').textContent = `${msg.value.length} / 800`; });

function typeValue() { const b = $('[data-seg="type"] [aria-checked="true"]'); return b ? b.dataset.value : ''; }
function initSeg(group) {
  const radios = $$('[role="radio"]', group);
  const checked = radios.find((r) => r.getAttribute('aria-checked') === 'true');
  radios.forEach((r, i) => { r.tabIndex = (checked ? r === checked : i === 0) ? 0 : -1; });
  group.selectValue = (v) => { const b = radios.find((r) => r.dataset.value === v); if (b) selectRadio(group, b); };
}
function selectRadio(group, b, focus) {
  $$('[role="radio"]', group).forEach((r) => { r.setAttribute('aria-checked', String(r === b)); r.tabIndex = r === b ? 0 : -1; });
  if (focus) b.focus();
  $('[data-jet-field]').hidden = b.dataset.value !== 'jet';
  if (tried) validate();
}
const segType = $('[data-seg="type"]');
segType?.addEventListener('click', (e) => { const b = e.target.closest('[role="radio"]'); if (b) selectRadio(segType, b); });
segType?.addEventListener('keydown', (e) => {
  const radios = $$('[role="radio"]', segType);
  const i = radios.indexOf(document.activeElement);
  if (i < 0) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); selectRadio(segType, radios[(i + 1) % radios.length], true); }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); selectRadio(segType, radios[(i - 1 + radios.length) % radios.length], true); }
});

function setError(name, bad) {
  const field = $(`[data-field="${name}"]`);
  field.classList.toggle('has-error', bad);
  const input = $('input, textarea, select', field);
  const err = $('.err', field);
  if (err && !err.id) err.id = `err-${name}`;
  if (input) { input.setAttribute('aria-invalid', String(bad)); if (bad) input.setAttribute('aria-describedby', err.id); else input.removeAttribute('aria-describedby'); }
  return bad;
}
function validate() {
  const v = (id) => $(id).value.trim();
  const bad = [];
  if (setError('name', v('#f-name').length < 2)) bad.push('#f-name');
  if (setError('phone', v('#f-phone').replace(/\D/g, '').length < 8)) bad.push('#f-phone');
  if (setError('type', !typeValue())) bad.push('[data-seg="type"] [role="radio"]');
  const d = v('#f-date');
  let dateBad = !d;
  if (d) { const min = new Date(); min.setHours(0, 0, 0, 0); dateBad = new Date(d + 'T00:00:00') < min; }
  if (setError('date', dateBad)) bad.push('#f-date');
  if (setError('place', v('#f-place').length < 2)) bad.push('#f-place');
  $('[data-form-summary]').classList.toggle('is-on', bad.length > 0);
  return bad;
}
function serviceLabel(id) { const s = SERVICES.find((x) => x.id === id); return s ? L(s.name) : L(UI.other); }
function submitBrief() {
  tried = true;
  const bad = validate();
  if (bad.length) { $(bad[0]).focus(); return; }
  const t = typeValue();
  const vals = [$('#f-name').value, $('#f-phone').value, serviceLabel(t), $('#f-date').value, $('#f-place').value, t === 'jet' ? $('#f-jet').value : '', $('#f-msg').value].map((x) => x.trim());
  const labels = L(UI.sum);
  const rows = labels.map((k, i) => [k, vals[i]]).filter(([, v]) => v);
  const text = `${L(UI.waIntro)}\n` + rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const href = `https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`;
  $('[data-summary]').innerHTML = rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
  $('[data-wa-link]').href = href;
  form.hidden = true;
  success.hidden = false;
  requestAnimationFrame(() => success.classList.add('is-on'));
  success.focus({ preventScroll: true });
  success.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' });
  try { window.open(href, '_blank', 'noopener'); } catch (e) {}
}
submitBtn?.addEventListener('click', submitBrief);
form?.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.matches('input')) { e.preventDefault(); submitBrief(); } });
form?.addEventListener('input', () => { if (tried) validate(); });
form?.addEventListener('change', () => { if (tried) validate(); });
$('[data-reset]')?.addEventListener('click', () => {
  ['#f-name', '#f-phone', '#f-date', '#f-place', '#f-jet', '#f-msg'].forEach((s) => { $(s).value = ''; });
  $$('[data-seg="type"] [role="radio"]').forEach((r) => r.setAttribute('aria-checked', 'false'));
  $('[data-jet-field]').hidden = true;
  $('[data-chars]').textContent = '0 / 800';
  tried = false;
  ['name', 'phone', 'type', 'date', 'place'].forEach((n) => setError(n, false));
  $('[data-form-summary]').classList.remove('is-on');
  success.classList.remove('is-on');
  success.hidden = true;
  form.hidden = false;
  $('#f-name').focus();
});
function applyPrefill(key) {
  if (!form) return;
  if (form.hidden) $('[data-reset]').click();
  let text = '';
  if (key === 'custom') segType.selectValue('other'), text = L(UI.customText);
  else if (key.startsWith('svc:')) segType.selectValue(key.slice(4));
  else if (key.startsWith('like:')) {
    const p = bySlug(key.slice(5));
    if (p) {
      segType.selectValue(p.cat === 'air' ? 'jet' : p.slug === 'airport-transfers' ? 'airport' : p.slug === 'city-alphard' ? 'city' : (p.slug === 'charter' || p.slug === 'cross-border') ? 'charter' : 'bodyguard');
      text = L(UI.likeText)(L(p.title));
    }
  }
  if (text && !msg.value.trim()) { msg.value = text; msg.dispatchEvent(new Event('input')); }
}
if ($('#f-date')) $('#f-date').min = new Date().toISOString().slice(0, 10);


/* =========================================================================
   CITY MARQUEE + COVERAGE MAP
   ========================================================================= */
const CITY_KEYS = { 'Kuala Lumpur': 'kl', 'Johor Bahru': 'jb', 'Batu Pahat': 'bp', 'Penang': 'pg', 'Thailand': 'th' };
function renderMarquee() {
  const el = $('[data-marquee]');
  if (!el) return;
  const cities = COVERAGE.flatMap(([, list]) => list.map(([c]) => L(c)));
  const one = cities.map((c, i) => `<span class="${i % 2 ? 'f' : ''}">${c}</span><i></i>`).join('');
  el.innerHTML = one + one;
}
function renderMap() {
  const box = $('[data-map]');
  if (!box || typeof MAP === 'undefined') return;
  const P = Object.assign({}, MAP.pts, { th: MAP.pts.bkk });
  const order = ['th', 'pg', 'kl', 'bp', 'jb'];
  /* Catmull-Rom through the cities, as cubic Beziers */
  const pts = order.map((k) => P[k]);
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  const names = {};
  COVERAGE.forEach(([, list]) => list.forEach(([c, code]) => { names[CITY_KEYS[c.en]] = [L(c), code]; }));
  const side = { th: 1, pg: -1, kl: -1, bp: -1, jb: 1 };
  const dy = { bp: -14, jb: 16 };
  const city = (k, i) => {
    const [x, y] = P[k];
    const s = side[k];
    const tx = x + s * 16, ty = y + 6 + (dy[k] || 0);
    const anchor = s > 0 ? 'start' : 'end';
    return `<g class="city"><circle class="ring" cx="${x}" cy="${y}" r="9" style="animation-delay:${(i * 0.35).toFixed(2)}s"/><circle class="dot" cx="${x}" cy="${y}" r="5"/>
      <text x="${tx}" y="${ty}" text-anchor="${anchor}">${names[k][0]}</text><text class="code" x="${tx}" y="${ty + 17}" text-anchor="${anchor}">${names[k][1]}</text></g>`;
  };
  box.innerHTML = `<svg viewBox="0 0 ${MAP.W} ${MAP.H}" role="img" aria-label="${esc(L({ en: 'Route map: Thailand, Penang, Kuala Lumpur, Batu Pahat, Johor Bahru', zh: '路线图：泰国、槟城、吉隆坡、峇株巴辖、新山' }))}">
    <defs><linearGradient id="landFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2f48"/><stop offset="1" stop-color="#16263b"/></linearGradient></defs>
    <path class="near" d="${MAP.near}"/><path class="land" d="${MAP.main}"/>
    <text class="country" x="300" y="215">${L({ en: 'Thailand', zh: '泰 国' })}</text>
    <text class="country" x="345" y="745">${L({ en: 'Malaysia', zh: '马来西亚' })}</text>
    <path class="route" d="${d}"/><path class="flow" d="${d}"/>
    ${order.map(city).join('')}
  </svg>`;
  const r = $('.route', box);
  try { box.style.setProperty('--len', Math.ceil(r.getTotalLength())); } catch (e) { box.style.setProperty('--len', 2000); }
  checkMap();
}
function checkMap() {
  const box = $('[data-map]');
  if (!box || box.classList.contains('in')) return;
  const r = box.getBoundingClientRect();
  if (r.height && r.top < window.innerHeight * 0.8 && r.bottom > 0) box.classList.add('in');
}
window.addEventListener('scroll', checkMap, { passive: true });
window.addEventListener('resize', checkMap);

/* =========================================================================
   SEARCHLIGHT (pointer devices only)
   ========================================================================= */
(() => {
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || reduced()) return;
  const spot = document.createElement('div'); spot.className = 'spot';
  const glow = document.createElement('div'); glow.className = 'spot-glow';
  document.body.prepend(glow); document.body.prepend(spot);
  let x = -999, y = -999, cy = 0, raf = 0;
  const paint = () => { raf = 0; [spot, glow].forEach((el) => { el.style.setProperty('--mx', x + 'px'); el.style.setProperty('--my', y + 'px'); }); };
  window.addEventListener('pointermove', (e) => {
    x = e.clientX; cy = e.clientY; y = cy + window.scrollY;
    spot.classList.add('on'); glow.classList.add('on');
    if (!raf) raf = requestAnimationFrame(paint);
  }, { passive: true });
  window.addEventListener('scroll', () => { if (x > -999) { y = cy + window.scrollY; if (!raf) raf = requestAnimationFrame(paint); } }, { passive: true });
  document.documentElement.addEventListener('pointerleave', () => { spot.classList.remove('on'); glow.classList.remove('on'); });
})();


/* =========================================================================
   CTA GLOBE: loaded only when a banner scrolls near the screen
   ========================================================================= */
let globeLib = null;
const globeKill = new Map();
function loadGlobe() {
  if (!globeLib) globeLib = new Promise((res, rej) => { const s = document.createElement('script'); s.src = '/js/globe.js'; s.async = true; s.onload = () => res(window.VVIPGlobe); s.onerror = rej; document.head.appendChild(s); });
  return globeLib;
}
const globeIO = 'IntersectionObserver' in window ? new IntersectionObserver((en) => en.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target; globeIO.unobserve(el);
  loadGlobe().then((G) => {
    if (!el.isConnected || globeKill.has(el)) return;
    try { globeKill.set(el, G.mount(el, { reduced: reduced(), narrow: window.innerWidth < 760 })); el.classList.add('on'); } catch (err) { /* no WebGL: the banner stays as it is */ }
  }).catch(() => {});
}), { rootMargin: '300px 0px' }) : null;
function initGlobes() {
  globeKill.forEach((kill, el) => { if (!el.isConnected) { try { kill(); } catch (e) {} globeKill.delete(el); } });
  if (!globeIO) return;
  $$('[data-globe]').forEach((el) => { if (!globeKill.has(el)) globeIO.observe(el); });
}

/* HERO THREADS: steel-blue light lines converging near the logo */
(() => {
  const el = $('[data-threads]');
  if (!el) return;
  const narrow = window.innerWidth < 760;
  try {
    WebThreads.mount(el, {
      colors: ['#2b4a72', '#7fa3cf', '#cfdef0'], coreColor: '#eef5ff',
      threadCount: narrow ? 5 : 7, frequency: 4, speed: 0.1, spread: narrow ? 0.16 : 0.22, taper: 0.9,
      position: narrow ? 0.62 : 0.5, pinch: narrow ? 0.22 : 0.16, glow: 0.016, falloff: 0.62, thickness: 1,
      brightness: 0.5, opacity: 0.8, depth: 0.6, fade: 0.35, grain: 0.03,
      mouseInteraction: !narrow, mouseStrength: 0.35, pulseOnClick: false, dpr: 1.5,
    });
  } catch (e) { /* no WebGL: the hero stays still */ }
})();

/* BOOT */
setTimeout(initGlobes, 0);
localiseLinks();
applyStatic();
renderCollections();
splitLetters();
renderFilters();
applyWork();
onScroll();
showRoute();
localiseLinks();
</script>
</body>
</html>
