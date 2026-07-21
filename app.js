const SUPABASE_URL = "https://xpmyhinfprkyfzowszti.supabase.co";
const SUPABASE_KEY = "sb_publishable_D1_2qBkhv3cdtI-v-qjrMg_gUOv6sKC";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const r = new Ractive({
  target: '#app',
  template: '#template',
  data: {
    matches: [
      {
        id: 'match-1',
        stage: 'グループステージ 第1節',
        date: '2026年6月15日',
        opposingTeam: 'オランダ',
        opposingFlag: '🇳🇱',
        japanScore: 2,
        opposingScore: 2,
        venue: 'ダラス・スタジアム（アメリカ）',
        resultText: '引き分け',
        statusClass: 'draw',
        scorers: {
          japan: '中村敬斗 57\',鎌田大地 89\'',
          opposing: 'V.ファン・ダイク 51\', C.サマーフィル 64\''
        },
        explanation:'前半に押され気味であった日本だが、チャンスを与えないプレーで失点後でもすぐ同点に追いつく「サムライブルー」の精神力で後半57分、'+
        'オランダ1点リードの状況で素早いカウンターから中村敬斗の右足で鮮やかな同点弾。'+
        'その後再びオランダがゴールを決め、1点を追う状況となった日本だったが、後半88分の試合終了間際、'+
        'コーナーから放たれた伊藤純也のボールは小川航基が頭で合わせ、目の前にいた鎌田大地の頭に当たりわずかに軌道を変え、'+
        'そのままネットを揺らし、劇的なドロー決着。'
        //↑ここにみどころを各自で書く。
        
      },
      {
        id: 'match-2',
        stage: 'グループステージ 第2節',
        date: '2026年6月21日',
        opposingTeam: 'チュニジア',
        opposingFlag: '🇹🇳',
        japanScore: 4,
        opposingScore: 0,
        venue: 'モンテレイ・スタジアム（メキシコ）',
        resultText: '勝利',
        statusClass: 'win',
        scorers: {
          japan: '鎌田大地 4\',上田綺世 31 ,83\',伊藤純也 69\'',
          opposing: ''
        },
        explanation:'試合開始前半4分に中村敬斗のクロスから鎌田大地が先制し、電光石火のスタートを切りチュニジア守備を翻弄。'+
        'その後上田綺世は前半31分と後半83分に強烈なミドルとループヘディングで2得点。伊東純也も後半69分に追加点。'+
        '日本チームの高い守備ラインと攻撃力が光り、チュニジア陣営に決定機を与えないプレーで、4-0と圧勝。'+
        '日本サッカー史上歴史に残るほどの「完勝」を収め、日本の決勝ラウンド進出に向けた大きな一歩となった試合となった。'
        //↑ここにみどころを各自で書く。
      },
      {
        id: 'match-3',
        stage: 'グループステージ 第3節',
        date: '2026年6月26日',
        opposingTeam: 'スウェーデン',
        opposingFlag: '🇸🇪',
        japanScore: 1,
        opposingScore: 1,
        venue: 'ダラス・スタジアム（アメリカ）',
        resultText: '引き分け',
        statusClass: 'draw',
        scorers: {
          japan: '前田大然 56\'',
          opposing: 'A.エランガ 62\''
        },
        explanation:'日本は0-0で迎えた後半56分、堂安律の起点から前田大然が押し込み先制する。'+
        '流れを掴んだかに見えたが、62分にスウェーデンのエランガが左足のシュートを決め同点に追いつく。'+
        'その後は両者とも決定機を作るが追加点は生まれず、試合は1-1で終了。'+
        '日本の連動した攻撃とスウェーデンの個の力がぶつかり合う展開が見どころの一戦である。'
        //↑ここにみどころを各自で書く。
        
      },
      {
        id: 'match-4',
        stage: '決勝トーナメント ラウンド32',
        date: '2026年6月30日',
        opposingTeam: 'ブラジル',
        opposingFlag: '🇧🇷',
        japanScore: 1,
        opposingScore: 2,
        venue: 'ヒューストン・スタジアム（アメリカ）',
        resultText: '敗戦',
        statusClass: 'lose',
        scorers: {
          japan: '久保建英 75\'',
          opposing: 'ヴィニシウス 23\', ロドリゴ 55\''
        },
        explanation:'ブラジルの猛攻を防ぎ続けたDF陣のブロックと、一瞬の隙を突いて世界を驚かせたカウンター!'+
        '敗れはしたものの、世界との距離が確実に縮まったことを証明した一戦だった。この結果、日本代表はベスト32で大会敗退。'
        //↑ここにみどころを各自で書く。
      }
    ],
    teams: [
      { name: "CAN", flag: "🇨🇦", votes: 0 },
      { name: "MEX", flag: "🇲🇽", votes: 0 },
      { name: "USA", flag: "🇺🇸", votes: 0 },
      { name: "ALG", flag: "🇩🇿", votes: 0 },
      { name: "ARG", flag: "🇦🇷", votes: 0 },
      { name: "AUS", flag: "🇦🇺", votes: 0 },
      { name: "AUT", flag: "🇦🇹", votes: 0 },
      { name: "BEL", flag: "🇧🇪", votes: 0 },
      { name: "BIH", flag: "🇧🇦", votes: 0 },
      { name: "BRA", flag: "🇧🇷", votes: 0 },
      { name: "CPV", flag: "🇨🇻", votes: 0 },
      { name: "COL", flag: "🇨🇴", votes: 0 },
      { name: "COD", flag: "🇨🇩", votes: 0 },
      { name: "CIV", flag: "🇨🇮", votes: 0 },
      { name: "CRO", flag: "🇭🇷", votes: 0 },
      { name: "CUW", flag: "🇨🇼", votes: 0 },
      { name: "CZE", flag: "🇨🇿", votes: 0 },
      { name: "ECU", flag: "🇪🇨", votes: 0 },
      { name: "EGY", flag: "🇪🇬", votes: 0 },
      { name: "ENG", flag: "🇬🇧", votes: 0 },
      { name: "FRA", flag: "🇫🇷", votes: 0 },
      { name: "GER", flag: "🇩🇪", votes: 0 },
      { name: "GHA", flag: "🇬🇭", votes: 0 },
      { name: "HAI", flag: "🇭🇹", votes: 0 },
      { name: "IRN", flag: "🇮🇷", votes: 0 },
      { name: "IRQ", flag: "🇮🇶", votes: 0 },
      { name: "JPN", flag: "🇯🇵", votes: 0 },
      { name: "JOR", flag: "🇯🇴", votes: 0 },
      { name: "KOR", flag: "🇰🇷", votes: 0 },
      { name: "MAR", flag: "🇲🇦", votes: 0 },
      { name: "NED", flag: "🇳🇱", votes: 0 },
      { name: "NZL", flag: "🇳🇿", votes: 0 },
      { name: "NOR", flag: "🇳🇴", votes: 0 },
      { name: "PAN", flag: "🇵🇦", votes: 0 },
      { name: "PAR", flag: "🇵🇾", votes: 0 },
      { name: "POR", flag: "🇵🇹", votes: 0 },
      { name: "QAT", flag: "🇶🇦", votes: 0 },
      { name: "KSA", flag: "🇸🇦", votes: 0 },
      { name: "SCO", flag: "🇬🇧", votes: 0 },
      { name: "SEN", flag: "🇸🇳", votes: 0 },
      { name: "RSA", flag: "🇿🇦", votes: 0 },
      { name: "ESP", flag: "🇪🇸", votes: 0 },
      { name: "SWE", flag: "🇸🇪", votes: 0 },
      { name: "SUI", flag: "🇨🇭", votes: 0 },
      { name: "TUN", flag: "🇹🇳", votes: 0 },
      { name: "TUR", flag: "🇹🇷", votes: 0 },
      { name: "URU", flag: "🇺🇾", votes: 0 },
      { name: "UZB", flag: "🇺🇿", votes: 0 }
    ],
    popupVisible: false,
    popupText: ""
  }
});
r.on('scrollTo', function (event, id) {
  const targetElement = document.getElementById(id);
  
  if (targetElement) {
    const headerHeight = document.querySelector('header').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; 

    window.scrollTo({
      //上のr.onのscrollToはただの名前、こっちのscrollToは関数。
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
});

r.on({
  showExplanation(event, explanation) {
      this.set({
          popupVisible: true,
          popupText: explanation
      });
  },
  hideExplanation() {this.set("popupVisible", false);}
});

r.on("vote", async function (event, index) {
  const team = this.get("teams")[index];
  const { error } = await db.rpc("vote", {
      team: team.name
  });
  if (error) {
      console.error(error);
      return;
  }
  await loadVotes();
});

async function loadVotes() {
  const { data, error } = await db
      .from("votes")
      .select("*");
  if (error) {
      console.error(error);
      return;
  }
  const teams = r.get("teams");
  const updatedTeams = teams.map(team => {
      const row = data.find(x => x.name === team.name);
      return {
          ...team,
          votes: row ? row.votes : 0
      };
  });
  updatedTeams.sort((a, b) => b.votes - a.votes);
  r.set("teams", updatedTeams);
}

loadVotes();

db
.channel("votes")
.on(
    "postgres_changes",
    {
        event: "*",
        schema: "public",
        table: "votes"
    },
    () => loadVotes()
)
.subscribe();