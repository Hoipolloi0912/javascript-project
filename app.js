const SUPABASE_URL = "https://xpmyhinfprkyfzowszti.supabase.co";
const SUPABASE_KEY = "sb_publishable_D1_2qBkhv3cdtI-v-qjrMg_gUOv6sKC";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const app = new Ractive({

    target:"#app",

    template:"#template",

    data:{

        selected:null,

        matches:[

            {
                id:1,

                stage:"Round of 16",

                stadium:"New York New Jersey Stadium",

                date:"July 6",

                description:"Norway faces Brazil in the quarter finals.",

                team1:{
                    name:"Norway",
                    flag:"🇳🇴",
                    votes:0
                },

                team2:{
                    name:"Brazil",
                    flag:"🇧🇷",
                    votes:0
                }

            },

            {
                id:2,

                stage:"Quarter Final",

                stadium:"SoFi Stadium",

                date:"13 July",

                description:"Argentina battles Switzerland.",

                team1:{
                    name:"Argentina",
                    flag:"🇦🇷",
                    votes:0
                },

                team2:{
                    name:"Switzerland",
                    flag:"🇨🇭",
                    votes:0
                }

            },

            {
                id:3,

                stage:"Quarter Final",

                stadium:"AT&T Stadium",

                date:"14 July",

                description:"Spain meets Belgium.",

                team1:{
                    name:"Spain",
                    flag:"🇪🇸",
                    votes:0
                },

                team2:{
                    name:"Belgium",
                    flag:"🇧🇪",
                    votes:0
                }

            }

        ]

    }

});

async function loadVotes(){

    const {data,error} = await db

        .from("votes")

        .select("*");

    if(error){

        console.log(error);

        return;

    }

    const matches = app.get("matches");

    data.forEach(v=>{

        const m = matches.find(x=>x.id===v.match_id);

        if(!m) return;

        m.team1.votes = v.team1_votes;

        m.team2.votes = v.team2_votes;

    });

    app.set("matches",matches);

}

async function vote(matchId, team) {

    const { error } = await db.rpc("vote", {
        match: matchId,
        team: team
    });

    if (error) {
        console.error(error);
    }

}

db

.channel("votes")

.on(

    "postgres_changes",

    {

        event:"UPDATE",

        schema:"public",

        table:"votes"

    },

    payload=>{

        const matches = app.get("matches");

        const m = matches.find(

            x=>x.id===payload.new.match_id

        );

        if(!m) return;

        m.team1.votes = payload.new.team1_votes;

        m.team2.votes = payload.new.team2_votes;

        app.set("matches",matches);

    }

)

.subscribe();

app.vote = async function(matchId,team,event){

    event.stopPropagation();

    await vote(matchId ,team);

}

app.showMatch = function(match){

    app.set("selected",match);

}

app.close = function(){

    app.set("selected",null);

}

loadVotes();