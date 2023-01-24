const express = require("express");
const router = express.Router();

const data_s1 = [
    {
        id :"1" ,
        icon : "fa-solid fa-code",
        title : "python & c++",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"2" ,
        icon : "fa-solid fa-code-branch",
        title : "proba & statistique",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"3" ,
        icon : "fa-solid fa-laptop-code",
        title : "Info industrielle",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"4" ,
        icon : "fa-brands fa-hashnode",
        title : "algo avancee",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"5" ,
        icon : "fa-solid fa-signal",
        title : "Economie",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"6" ,
        icon : "fa-solid fa-hashtag",
        title : "systeme d'info & DB",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    }
]
const data_s2 = [
    {
        id :"7" ,
        icon : "fa-solid fa-code",
        title : "Analyse de données",
        module_1 : {
            title : "Seance 1: Analyse en composantes  principales",
            link : "https://drive.google.com/file/d/1sR5OdBbJ1TAHlQ3uOnMZ7eHmnOLuoFV-/view?usp=sharing"
        },
        module_2 : {
            title : "cours-generale : Analyse en composantes principales (ACP)",
            link : "https://drive.google.com/file/d/1b2VtvFQ3QNCl_QdL7jWVramsZPPMFOvA/view?usp=sharing"
        },
        module_3 : {
            title : "chapitre-1 (prof ghazdali) acp",
            link : "https://drive.google.com/file/d/1JulSlq6O2XDVMSPOCtU6homgTgBPijD7/view?usp=sharing"
        }, module_4 : {
            title : "autre cour Analyse en Composantes Principales (ACP)",
            link : "https://drive.google.com/file/d/1NvyhH-Ejm6IgFkaZ0ZeVIIlH_bD6_pR6/view?usp=sharing"
        }, module_5 : {
            title : "exerice-Analyse des données : ACP",
            link : "https://drive.google.com/file/d/1q5Advzxs09hDD3OKohNmSvtAvYIY7YGu/view?usp=sharing"
        }, module_6 : {
            title : "exam acp ",
            link : "https://drive.google.com/file/d/1gw7kAXUSlJ8MrcTo8K0YXAGMlxVpLyh1/view?usp=sharing"
        }, module_7 : {
            title : "exam-2 acp",
            link : "https://docs.google.com/document/d/1ygDFhJvV8wWPYVODWYFsnehOAHGo4Swo/edit?rtpof=true"
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"8" ,
        icon : "fa-solid fa-code-branch",
        title : "web development",
        module_1 : {
            title : "HTML",
            link : "https://drive.google.com/file/d/1OqRz49Jp4HK0Rm53xzs2l9TlFs8K2Yt4/view?usp=sharing"
        },
        module_2 : {
            title : "HTML5",
            link : "https://drive.google.com/file/d/1PxUAAVRESWgQK7DFr4D2sIfGNYnvqUES/view?usp=sharing"
        },
        module_3 : {
            title : "tp-html",
            link : "https://drive.google.com/file/d/1dHNlO56SLtA_sCqPLvCpXMySHjjbH-kZ/view?usp=sharing"
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"9" ,
        icon : "fa-solid fa-laptop-code",
        title : "Reseau & protocole",
        module_1 : {
            title : "00-introduction generale au reseau",
            link : "https://drive.google.com/file/d/1eB-wcPtya9zpeudstR-swbsern9IlBro/view?usp=sharing"
        },
        module_2 : {
            title : "01-modeles de references -OSI-TCPIP",
            link : "https://drive.google.com/file/d/1oBk3gWT3v9PKhgcnLM0SsX3Rrj1hT99t/view?usp=sharing"
        },
        module_3 : {
            title : "02-Equipement d'interconnexion",
            link : "https://drive.google.com/file/d/11iXX8SJIVUfSDTeFZOSxmo-3_ghZy_yE/view?usp=sharing"
        }, module_4 : {
            title : "03-adressage",
            link : "https://drive.google.com/file/d/1OPSL3GltepbRd0PKNZHKxfUoYY9eVd5j/view?usp=sharing"
        }, module_5 : {
            title : "04 - Ethernet.pdf",
            link : "https://drive.google.com/file/d/1ShWFVzPw0Bg7SfbMlLE4tk_TAGTAmRCG/view?usp=sharing"
        }, module_6 : {
            title : "05 - RÃ©seaux commutÃ©s.pdf",
            link : "https://drive.google.com/file/d/1064LsbcbWWK-NipySJyZDn08vexQHGWU/view?usp=sharing"
        }, module_7 : {
            title : "06 - TCP-IP.pdf",
            link : "https://drive.google.com/file/d/1EcU4wANymgWELmIEBAEFqH2jO9g6Z3gF/view?usp=sharing"
        }, module_8 : {
            title : "07 - Introduction au Routage IP.pdf",
            link : "https://drive.google.com/file/d/16WT-CmTg8_N4yPFnJyMtuNyp45pusVMA/view?usp=sharing"
        }, module_9 : {
            title : "08 - Protocoles de Transport.pdf",
            link : "https://drive.google.com/file/d/1wKhTWNyTWrim30NQWlwG3u_ZhPYARe8L/view?usp=sharing"
        }, module_10 : {
            title : "09 - Routage Vecteur-Distance.pdf",
            link : "https://drive.google.com/file/d/1zkVAE7SqwKQ8u5WDf9uNb3QdzJLp-uhf/view?usp=sharing"
        }, module_11 : {
            title : "exams tc.pdf",
            link : "https://drive.google.com/file/d/15b_cwTfIhCZSNBpOYQ80V6u3uqhRQyXC/view?usp=sharing"
        },module_12 : {
            title : "exam-page1",
            link : "https://drive.google.com/file/d/11acGw2WcGuWkZzxJ4LND53JA0QS4ImbC/view?usp=sharing"
        },module_13 : {
            title : "exam-page2",
            link : "https://drive.google.com/file/d/1Hta79naRi6tYSXPzRuN04kMTdN90Ynz6/view?usp=sharing"
        },module_14 : {
            title : "exam-page3",
            link : "https://drive.google.com/file/d/1l5_ugEW6HtNBmMNe54bOgl0fE2ryEc-d/view?usp=sharing"
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"10" ,
        icon : "fa-brands fa-hashnode",
        title : "Java",
        module_1 : {
            title : "Seance1.pdf",
            link : "https://drive.google.com/file/d/1jzEIuUO0fljlW7_8RVSxWGgjDsnQUJj1/view?usp=sharing"
        },
        module_2 : {
            title : "Seance3.pdf",
            link : "https://drive.google.com/file/d/1-ZjfZQDJy7Db0WjnQe7dISbKdpcxiIiF/view?usp=sharing"
        },
        module_3 : {
            title : "Seance4.pdf",
            link : "https://drive.google.com/file/d/19P4QkVgVZ8fMzg9N4JS_X-bx8D1nK-RP/view?usp=sharing"
        }, module_4 : {
            title : "TP3",
            link : "https://docs.google.com/document/d/1yvHDiPO3vKW0W2Hv1pNHcozNlSz58F9T/edit"
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"11" ,
        icon : "fa-solid fa-signal",
        title : "math pour ingenieur",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id :"12" ,
        icon : "fa-solid fa-hashtag",
        title : "francais",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    }
]



router.get("/" , (req,res) => {
    res.render("home.ejs" , {items : data_s1 , items_2 : data_s2 });
})




router.get("/courses/:id" , (req,res) => {
    id = req.params.id 
    
          data_s1.forEach((data) => {
           if (id === data.id) {
             res.render("courses.ejs" , {
                content :  data.title,
                module_1 : {
                    title : data.module_1.title,
                    link : data.module_1.link
                 },
                 module_2 : {
                    title : data.module_2.title,
                    link : data.module_2.link
                 },
                 module_3 : {
                    title : data.module_3.title,
                    link : data.module_3.link
                 },
                 module_4 : {
                    title : data.module_4.title,
                    link : data.module_4.link
                 },module_5 : {
                    title : data.module_5.title,
                    link : data.module_5.link
                 }, module_6 : {
                    title : data.module_6.title,
                    link : data.module_6.link
                 }, module_7 : {
                    title : data.module_7.title,
                    link : data.module_7.link
                 }, module_8 : {
                    title : data.module_8.title,
                    link : data.module_8.link
                 }, module_9 : {
                    title : data.module_9.title,
                    link : data.module_9.link
                 }, module_10 : {
                    title : data.module_10.title,
                    link : data.module_10.link
                 }, module_11 : {
                    title : data.module_11.title,
                    link : data.module_11.link
                 }, module_12 : {
                    title : data.module_12.title,
                    link : data.module_12.link
                 }, module_13 : {
                    title : data.module_13.title,
                    link : data.module_13.link
                 }, module_14 : {
                    title : data.module_14.title,
                    link : data.module_14.link
                 }
             })
            }
        })
        data_s2.forEach((data) => {
            if (id === data.id) {
                console.log(data.title)
              res.render("courses.ejs" , {
                content : data.title,
                 module_1 : {
                    title : data.module_1.title,
                    link : data.module_1.link
                 },
                 module_2 : {
                    title : data.module_2.title,
                    link : data.module_2.link
                 },
                 module_3 : {
                    title : data.module_3.title,
                    link : data.module_3.link
                 },
                 module_4 : {
                    title : data.module_4.title,
                    link : data.module_4.link
                 },
                 module_5 : {
                    title : data.module_5.title,
                    link : data.module_5.link
                 }, module_6 : {
                    title : data.module_6.title,
                    link : data.module_6.link
                 }, module_7 : {
                    title : data.module_7.title,
                    link : data.module_7.link
                 }, module_8 : {
                    title : data.module_8.title,
                    link : data.module_8.link
                 }, module_9 : {
                    title : data.module_9.title,
                    link : data.module_9.link
                 }, module_10 : {
                    title : data.module_10.title,
                    link : data.module_10.link
                 }, module_11 : {
                    title : data.module_11.title,
                    link : data.module_11.link
                 }, module_12 : {
                    title : data.module_12.title,
                    link : data.module_12.link
                 }, module_13 : {
                    title : data.module_13.title,
                    link : data.module_13.link
                 }, module_14 : {
                    title : data.module_14.title,
                    link : data.module_14.link
                 }
              })
             }
         })
        
   
})




















module.exports = router;