(function start() {

    let inputArea = document.getElementById("text-area");
  
    let text = `What's the Wonder-Women Editor All About?
    Our editor helps you to edit your job descriptions by highlighting gender-biased words within them. Research has shown that linguistic gender-coding in job descriptions puts women off applying for jobs that are advertised with masculine-coded language. So, use our tool to select neutral words in place of a gender-biased ones!
    Begin your editing by pasting the document in the text-box. Once you're finished, click the "Click Me" button. To help you cut the gender-biased scourge from your document, Wonder-Women Editor highlights all instances of gender-biased words. You can make changes in real-time with the editor, which will show all the corresponding changes in different parameters of the tool.
    Click the “Clear Input Fields” button to remove prior job descriptions and start fresh by pasting in another document and composing something new.
    Click the “Save Job-Description” button to save all versions of your edited work.
    This tool will take your existing job description, score it, and provide suggestions on word replacements in order to get a better score. The higher the score, the more likely you are to draw in a diverse pool of candidates.
    A yellow highlight indicates that the word is masculine gendered, and a pink highlight indicates that the word is feminine gendered. Try editing these words to ensure that gender-coded language (example: ‘driven’ = masculine, ‘dependable’ = feminine) is reduced or removed.
    Gendered pronouns are helpfully highlighted in burgandy. Be aware of these words and choose gender-neutral pronouns without bias in exchange. Alternatively, include both feminine and masculine pronouns (e.g., “she/he”) instead.
    Superlative words, such as "perfection" and "rockstar" are marked in brown. With the aid of the tool, you can change your job description wording and eliminate those words if required.`;
  
    inputArea.value = text;
  } )(); 
  
     let data = {
       paragraphs: 0,
       sentences: 0,
       words: 0,
  
       cleanwords: 0,
  
      masculine: 0,
      feminine: 0,
      genderedPronoun: 0,
      masculinePronoun : 0,
      femininePronoun: 0,
      superlative: 0
  
    };
  
  function format() {
  
      data = {
  
        paragraphs: 0,
        sentences: 0,
        words: 0,
        cleanwords: 0,
        masculine: 0,
        feminine: 0,
        genderedPronoun: 0,
        masculinePronoun : 0,
        femininePronoun: 0,
        superlative: 0
      };
  
      ("use strict");
  
      let inputArea = document.getElementById("text-area");
  
      let text = inputArea.value;
  
      let paragraphs = text.split("\n");
  
      let outputArea = document.getElementById("output");
  
      let hardSentences = paragraphs.map(p => getDifficultSentences(p));
  
      let inP = hardSentences.map(para => `<p>${para}</p>`);
  
      data.paragraphs = paragraphs.length;
  
      console.log(data);
  
      counters();
  
      outputArea.innerHTML = inP.join(" ");
  
      
  
    }
  
    window.format = format;
  
    format();
  
  
  
  
    let saveFile = () => {
      
      // Get the data from each element on the form.
    const job_description = document.getElementById("text-area");
      
      
      // This variable stores all the data.
      let data = 
          'Your Edited Job-Description: '+ '\r\n' + job_description.value ;
      
      // Convert the text to BLOB.
      const textToBLOB = new Blob([data], { type: 'text/plain' });
      const sFileName = 'Job-Description.txt';	   // The file to save the data.
  
      let newLink = document.createElement("a");
      newLink.download = sFileName;
  
      if (window.webkitURL != null) {
          newLink.href = window.webkitURL.createObjectURL(textToBLOB);
      }
      else {
          newLink.href = window.URL.createObjectURL(textToBLOB);
          newLink.style.display = "none";
          document.body.appendChild(newLink);
      }
  
      newLink.click(); 
  }
  
  
  
  
  
    function counters() {
      document.querySelector("#Readability").innerHTML = `<b>Your Job Description has</b> <br><b> Words </b> : ${
  
        data.words
      
      } word${data.words > 1 ? "s" : ""}<br><b> Sentences </b>: ${
      
         data.sentences   
      
      } sentence${data.sentences > 1 ? "s" : ""}`;
      //<br><b>Paragraphs</b> : ${
  
         // data.paragraphs
  
     // } Paragraph${data.paragraphs > 1 ? "s" : ""}`;
  
  
      document.querySelector("#masculine").innerHTML = `<b>Masculine Words</b> : ${
  
        data.masculine
  
      } word${data.masculine > 1 ? "s" : ""}`;
  
  
      document.querySelector("#feminine").innerHTML = `<b>Feminine Words</b> : ${
  
        data.feminine
  
      } word${data.feminine > 1 ? "s" : ""}`;
      
  
      document.querySelector("#pronoun").innerHTML = `<b>Gendered Pronoun </b> : ${
  
        data.genderedPronoun
  
      } word${data.genderedPronoun > 1 ? "s" : ""}`;
  
      document.querySelector("#superlative").innerHTML = `<b>Superlative Words</b> : ${
  
        data.superlative
  
      } word${data.superlative > 1 ? "s" : ""}`;
  
  
    }
  
  
  
    function remove_stopwords(str) {
  
      let  stopwords = ['he','him','his','himself','she','her','hers','herself','i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't", ".", ":", ",", "!", "?", ";", "•", "&", "·", "#", "$", "%", "*", "–", "-", "+", "^", "(", ")"]
  
      res = []
  
      splitwords = str.toLowerCase().split(' ')
  
      for(i=0;i<splitwords.length;i++) {
  
         word_clean = splitwords[i].split(".").join("")
  
         if(!stopwords.includes(word_clean)) {
  
             res.push(word_clean)
         }
      }
      return(res.join(' '))
  }  
  
  
  
  
    function getDifficultSentences(p) {
  
      let sentences = getSentenceFromParagraph(p + " ");
  
      data.sentences += sentences.length;
  
      let hardOrNot = sentences.map(sent => {
  
        //let cleanSentence = sent.replace(/[^a-z0-9. ]/gi, "") + ".";
        let cleanSentence = sent.replace(/[^a-z0-9. ]/gi, "").replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").replace(/[^\w\s]/gi, '') + ".";
  
        let words = cleanSentence.split(" ").length;
  
        let letters = cleanSentence.split(" ").join("").length;
  
        data.words += words;
        let cleanwords = remove_stopwords(cleanSentence).split(" ").length;
  
        data.cleanwords += cleanwords;
  
        sent = getmasculine(sent);
        sent = getfeminine(sent);
        sent = getPronoun(sent);
        sent = countSuperlatives(sent);
  
        let score = calculateScore(data,words);
  
        let overallScore = 100 - (score * (100/14))
        if (overallScore > 0) {
          document.querySelector("#overallscore").innerHTML = `Score: ${Math.round(overallScore)}/100`; 
          } else {
          document.querySelector("#overallscore").innerHTML = `Score: 0/100`; 
          }
  
        document.querySelector("#overallscore").innerHTML = `<b>Score</b> : ${Math.round(overallScore)}/100`; 
  
        let masculineScore = calculateMasculineScore(data,words);
  
        let feminineScore = calculateFeminineScore(data,words);
  
        if (score < 3.5) {
  
          document.querySelector("#score").innerHTML = `<b>Bias Level</b> : Gender Unbiased`;
  
        } else if (score < 7) {
  
          document.querySelector("#score").innerHTML = `<b>Bias Level</b> : Moderately Gender Unbiased`; 
  
        } else if (score < 10.5) {
  
          document.querySelector("#score").innerHTML = `<b>Bias Level</b> : Gender Biased`;
  
        } else {
  
          document.querySelector("#score").innerHTML = `<b>Bias Level</b> :Extremely Gender Biased`;
        }
  
  
  
        if (masculineScore > feminineScore) {
  
          document.querySelector("#gendercoding").innerHTML = `<b>Gender Coding</b> : Masculine`;
          //document.querySelector("#gendercoding").style.backgroundColor = "DodgerBlue";
  
        } else if  (masculineScore < feminineScore) {
  
          document.querySelector("#gendercoding").innerHTML = `<b>Gender Coding</b> : Feminine`;
          // document.querySelector("#gendercoding").style.backgroundColor = "Tomato";
        
        } else  {
  
          document.querySelector("#gendercoding").innerHTML = `<b>Gender Coding</b> : Neutral`; 
         // document.querySelector("#gendercoding").backgroundColor = "MediumSeaGreen";
  
        } 
  
  
  
  
        return sent;
  
      });
      return hardOrNot.join(" ");
  };
  
  
  
    function getSentenceFromParagraph(p) {
  
      let sentences = p
  
        .split(". ")
  
        .filter(s => s.length > 0)
  
        .map(s => s + ".");
  
      return sentences;
  
    }
  
  
  
    function calculateScore(data, words, sentences) {
  
      if (words === 0 || sentences === 0) {
  
        return 0;
  
      }
  
      let score = 100*(
        
        (data.masculine + data.feminine +data.superlative + data.genderedPronoun) / data.cleanwords
       
      );
  
      console.log("num_words:", data.words,"clean_words", data.cleanwords, "genderedwords", (data.masculine + data.feminine +data.superlative + data.genderedPronoun), "score",score)
      return score <= 0 ? 0 : score;
  
      
    }
  
  
    function calculateMasculineScore(data, words, sentences) {
  
      if (words === 0 || sentences === 0) {
  
        return 0;
  
      }
  
      let masculineScore = 100 * (
        
        (data.masculine+ data.masculinePronoun + data.superlative) / data.cleanwords
       
      );
      console.log("masculinePronoun",data.masculinePronoun, "masculineScore", masculineScore)
      return masculineScore <= 0 ? 0 : masculineScore;
      
     
    }
  
  
    function calculateFeminineScore(data, words, sentences) {
  
      if (words === 0 || sentences === 0) {
  
        return 0;
  
      }
  
      let feminineScore = 100*(
        
        (data.feminine+ data.femininePronoun) / data.cleanwords
       
      );
      console.log("femininePronoun", data.femininePronoun, "feminineScore", feminineScore)
      return feminineScore <= 0 ? 0 : feminineScore;
  
     
    }
  
  
    function getMasToolTip(word) {
  
        var toolTipDict = {};
      
  
        toolTipDict['efficiency']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>effectiveness, productivity, timeliness</b>'; 
        toolTipDict['efficiencies']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>effectiveness, productivity, timeliness</b>'; 
        toolTipDict['efficient']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>dynamic, effective, productive, timely</b>'; 
        toolTipDict['principles']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>ethics, fundamentals, precepts, truths, values</b>'; 
        toolTipDict['leadership']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>administration, direction, guidance, management</b>'; 
        toolTipDict['individual']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>entity, human being, person</b>'; toolTipDict['competencies']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>abilities, capacities, proficiencies</b>'; 
        toolTipDict['competency']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>ability, capacity, proficiency</b>'; 
        toolTipDict['suggesting']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>advancing, counseling, prompting, proposing, recommending</b>'; 
        toolTipDict['success']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>accomplishment, attainment, progress, triumph</b>'; 
        toolTipDict['challenge']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>contest, demand, dispute, problem, test, question</b>'; 
        toolTipDict['challenges']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>contests, demands, disputes, problems, tests, questions</b>'; 
        toolTipDict['solutions']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>answers, explanations, results</b>'; 
        toolTipDict['decisions']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>conclusions, findings, judgments, resolutions, verdicts</b>'; 
        toolTipDict['strategy']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>approach, method, plan, tactics, technique</b>'; 
        toolTipDict['successfully']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>flourishingly, strongly, triumphantly, thrivingly, well</b>';
        toolTipDict['masculine']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>neutral, common, ungendered</b>';
        toolTipDict['leading']=' : is a Masculine word. <br><br>Try to replace it with a gender neutral word <b>directing, pointing</b>';
        
        return toolTipDict[word] === undefined ? word + ' : is a Masculine word' : word+' '+toolTipDict[word]  ;
    
      }
  
      function getFemToolTip(word) {
  
        var toolTipDict = {};
      
  
        toolTipDict['affectionate']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> caring, friendly</b>'; 
        toolTipDict['child']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> juvenile, kid, youngster</b>'; 
        toolTipDict['cheer']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> comfort, encourage, elate</b>'; toolTipDict['commit']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> act, carry out, execute </b>'; toolTipDict['communal']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>common, conjoint, conjunct, mutual, joint</b>';
        toolTipDict['compassion']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>benevolence, commiseration</b>';
        toolTipDict['connect']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>associate, attach, relate</b>';
        toolTipDict['considerate']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>accommodating, amiable, attentive, mindful, solicitous, thoughtful</b>'; 
        toolTipDict['cooperate']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> collaborate , comply with, contribute, coordinate, unite</b>';
        toolTipDict['depend']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>bank on, count on, confide in, lean on, rely upon turn to</b>';
        toolTipDict['emotion']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>fervor, passion, sentiment </b>';
        toolTipDict['feminine']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>neutor, common, ungendered</b>';
        toolTipDict['gentle']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> affable, benign, mellow, moderate, soft</b>'; 
        toolTipDict['honest']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>authentic, decent, genuine, impartial, true, virtuous</b>'; 
        toolTipDict['interpersonal']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>social, relational</b>'; toolTipDict['kind']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>charitable, courteous, friendly, gracious, thoughtful</b>'; 
        toolTipDict['kinship']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>affinity, association</b>'; 
        toolTipDict['loyal']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>ardent, dutiful, faithful, staunch, steadfast</b>'; 
        toolTipDict['modesty']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>decency, humbleness, humility, purity</b>'; 
        toolTipDict['nag']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>annoy, fuss, hound, pester, vex</b>'; toolTipDict['pleasant']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> agreeable, delightful, enjoyable, pleasing, satisfying</b>'; 
        toolTipDict['polite']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>civil, courteous, genteel, gracious, mannerly</b>'; 
        toolTipDict['quiet']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>calm, peaceful, placid, serene, tranquil</b>';
  
        toolTipDict['submissive']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>amenable, compliant, obedient </b>'; 
        toolTipDict['love']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>adoration, attachment, fondness, passion</b>'; 
        toolTipDict['supports']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>advocates, endorses, foundations</b>'; 
        toolTipDict['life']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>activity, career, existence, experience, time</b>'; 
        toolTipDict['responsibilities']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>duties, incumbencies, obligations, tasks</b>'; 
        toolTipDict['helping']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>aiding, assisting, backing, easing</b>'; 
        toolTipDict['communicating']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>contacting, conversing, conveying, liaising</b>'; 
        toolTipDict['responsibility']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>duty, incumbency, obligation, task</b>'; 
        toolTipDict['support']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b> advocate, endorse, foundation</b>'; toolTipDict['help']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>aid, assist, back, ease</b>'; 
        toolTipDict['appreciated']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>acknowledged, admired, esteemed, valued, welcomed</b>'; 
        toolTipDict['receive']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>gain, get, obtain, take</b>'; toolTipDict['community']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>association, district, fellowship, neighborhood, public</b>'; 
        toolTipDict['together']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>closely, collectively, jointly, simultaneously</b>'; 
        toolTipDict['communities']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>associations, district, fellowship, neighborhoods, publics</b>'; 
        toolTipDict['understand']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>comprehend, grasp, know</b>'; toolTipDict['communication']=' is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>contact, conversation, conveyance, liaison</b>'; 
        toolTipDict['grow']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>advance, build, cultivate, develop, raise</b>'; 
        toolTipDict['validate']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>approve, certify, confirm, endorse, verify</b>';
        toolTipDict['share']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>show, distribute</b>';
        toolTipDict['dependable']=' : is a Feminine word. <br><br>Try to replace it with a gender neutral word <b>reliable,certain, firm</b>';
        
        return toolTipDict[word] === undefined ? word + ' : is a Feminine word' : word+' '+toolTipDict[word]  ;
    
      }  
  
      function getSupToolTip(word) {
  
        var toolTipDict = {};
      
        toolTipDict['best']=' : is a Superlative word. <br><br>Try to replace it with a gender neutral word <b> finest, first-rate, greatest, outstanding, utmost</b>'; 
        toolTipDict['professional']=' : is a Superlative word. <br><br>Try to replace it with a gender neutral word <b>businesslike, expert, qualified,  technical</b>';
        toolTipDict['specialist']=' : is a Superlative word. <br><br>Try to replace it with a gender neutral word <b>finest, expert, qualified,  technical</b>';
        
        return toolTipDict[word] === undefined ? word +' : is a Superlative word' : word+' '+toolTipDict[word];
    
      }
  
      
  
      function getpronounToolTip(word) {
  
        var toolTipDict = {};
      
  
        toolTipDict['best']=' : is a Superlative word. <br><br>Try to replace it with a gender neutral word <b> finest, first-rate, greatest, outstanding, utmost</b>'; 
        toolTipDict['professional']=' : is a Superlative word. <br><br>Try to replace it with a gender neutral word <b>businesslike, expert, qualified, specialized, technical</b>';
        
        return toolTipDict[word] === undefined ? word +' : is a Superlative word' : word+' '+toolTipDict[word];
    
      }
  
  
    function getmasculine(sentence) {
  
      //let lyWords = getLyWords();
        let lyWords = getmasWords();
        return sentence
  
        .split(" ")
  
        .map(word => {
  
          if (
  
            word.replace(/[^a-z0-9. ]/gi, "").replace(/\n/g, " ").replace(/(^\s*)|(\s*$)/gi,"").match(/\bActive\b|\bAdventurous\b|\bAggress\b|\bAmbitious\b|\bAssert\b|\bConfident\b|\bCourag\b|\bDecide\b|\bDecisive\b|\bDecision\b|\bDetermin\b|\bForce\b|\bGreedy\b|\bHeadstrong\b|\bHierarch\b|\bImplusive\b|\bIndividual\b|\bIntellect\b|\bLead\b|\bLogic\b|\bMasculine\b|\bObjective\b|\bOpinion\b|\bOutspoken\b|\bPersist\b|\bPrinciple\b|\bReckless\b|\bStubborn\b|\bSuperior\b|\bSelf-confiden\b|\bSelf-sufficien\b|\bSelf-relian\b|\bUnreasonab\b|\bCapable\b|\bCertain\b|\bFocus\b|\bAchieve\b|\bHonor\b|\bPride\b|\bDigni\b|\bSolution\b|\bSuccess\b|\bSkill\b|\bPower\b|\bStrength\b|\bStrateg\b|\bFulfill\b|\bSuggest\b|\bHigh-performing\b|\bHigh-performer\b|\bAggression\b|\bAggressive\b|\bAggressor\b|\bAggressiveness\b|\bAggressivity\b|\bAggressed\b|\bAggresses\b|\bAggressing\b|\bAggression\b|\bAggressively\b|\bAmbition\b|\bAmbitioned\b|\bAmbitioning\b|\bAmbitions\b|\bAmbitious\b|\bAmbitiously\b|\bAmbitionless\b|\bAnalysis\b|\bAnalyst\b|\bAnalytic\b|\bAnalytical\b|\bAnalytically\b|\bAnalytics\b|\bAnalyzable\b|\bAnalyzed\b|\bAnalyzer\b|\bAnalyzing\b|\bAssertation\b|\bAssertive\b|\bAssertedly\b|\bAsserted\b|\bAssertive\b|\bAssertion\b|\bAssertively\b|\bAssertiveness\b|\bAsserts\b|\bAthlete\b|\bAthletes\b|\bAthletic\b|\bAthletically\b|\bAthleticism\b|\bAthletics\b|\bAutonomic\b|\bAutonomies\b|\bAutonomise\b|\bAutonomism\b|\bAutonomist\b|\bAutonomize\b|\bAutonomous\b|\bAutonomisms\b|\bAutonomists\b|\bAutonomy\b|\bBoasted\b|\bBoaster\b|\bBoastfully\b|\bBoastfulness\b|\bBoastingly\b|\bBoasting\b|\bBoastful\b|\bBoasts\b|\bBoastless\b|\bBoastworthy\b|\bChallenged\b|\bChallenger\b|\bChallenges\b|\bChallengers\b|\bChallenging\b|\bChallenge\b|\bChallengingly\b|\bCompeted\b|\bCompetes\b|\bCompetent\b|\bCompete\b|\bCompetence\b|\bCompetencies\b|\bCompetently\b|\bCompetent\b|\bCourage\b|\bCourageous\b|\bCourageously\b|\bCourageousness\b|\bDecisionism\b|\bDecision-making\b|\bDecisions\b|\bDecisional\b|\bDescisioned\b|\bDescisioning\b|\bDetermined\b|\bDetermines\b|\bDeterminant\b|\bDeterminate\b|\bDeterminers\b|\bDetermining\b|\bDeterminism\b|\bDeterminist\b|\bDeterminable\b|\bDeterminably\b|\bDetermine\b|\bDeterminedly\b|\bDeterminedness\b|\bDeterminer\b|\bDeterministic\b|\bDominating\b|\bDominance\b|\bDominant\b|\bDominants\b|\bDominances\b|\bDominantly\b|\bDominate\b|\bDominated\b|\bDomination\b|\bDominations\b|\bDominative\b|\bDominator\b|\bDominatrix\b|\bForced\b|\bForceable\b|\bForceably\b|\bForcedly\b|\bForcefully\b|\bForcefulness\b|\bForceless\b|\bForcer\b|\bForces\b|\bHierarchical\b|\bHierarchic\b|\bHierarchically\b|\bHierarchies\b|\bHierarchism\b|\bHierarchize\b|\bHierarchized\b|\bHierarchizing\b|\bHierarchy\b|\bHostile\b|\bHostiles\b|\bHostility\b|\bHostilely\b|\bHostileness\b|\bIndependent\b|\bIndepending\b|\bIndependency\b|\bIndependable\b|\bIndependence\b|\bIndependently\b|\bIndividualistic\b|\bIndividualistically\b|\bIndividuality\b|\bIndividualization\b|\bIndividualize\b|\bIndividualized\b|\bIndividualizing\b|\bIndividually\b|\bIndividualist\b|\bIndividual\b|\bIndividualise\b|\bIndividualism\b|\bIntellect\b|\bIntellection\b|\bIntellectual\b|\bIntellective\b|\bIntellectively\b|\bIntellectualism\b|\bIntellectualist\b|\bIntellectualistic\b|\bIntellectuality\b|\bIntellectualization\b|\bIntellectualize\b|\bIntellectualized\b|\bIntellectualizer\b|\bIntellectualizing\b|\bIntellectually\b|\bIntellectualness\b|\bIntellectuals\b|\bLeader\b|\bLeading\b|\bLeads\b|\bLeadership\b|\bLeaderman\b|\bLeaders\b|\bLeadless\b|\bPrinciples\b|\bSelf-confidence\b|\bSelf-confidences\b|\bSelf-confidently\b|\bSelf-confident\b|\bSelf-reliant\b|\bSelf-sufficiency\b|\bUnreasonable\b|\bUnreasonableness\b|\bUnreasonably\b|\bCertain\b|\bCertainly\b|\bCertainness\b|\bCertainties\b|\bCertainty\b|\bEfficience\b|\bEfficiencies\b|\bEfficiency\b|\bEfficient\b|\bEfficiently\b|\bAchieve\b|\bAchieved\b|\bAchievement\b|\bAchiever\b|\bAchievers\b|\bAchievable\b|\bAchieving\b|\bHonor\b|\bHonorability\b|\bHonorable\b|\bHonorableness\b|\bHonorably\b|\bHonorand\b|\bHonorarily\b|\bHonorary\b|\bHonored\b|\bHonoree\b|\bHonorer\b|\bHonorial\b|\bHonorific\b|\bHonorifically\b|\bHonoring\b|\bHonorless\b|\bHonors\b|\bHonour\b|\bHonourable\b|\bHonourary\b|\bHonourial\b|\bHonourless\b|\bPride\b|\bPrided\b|\bPrideful\b|\bPridefully\b|\bPridefulness\b|\bPrideless\b|\bPridelessly\b|\bPrideworthy\b|\bStrength\b|\bStrengthen\b|\bStrengthened\b|\bStrengthener\b|\bStrengthening\b|\bStrengthful\b|\bStrengthless\b|\bStrengthlessly\b|\bStrengthlessness\b|\bStrengths\b|\bStrength\b|\bStrategic\b|\bStrategical\b|\bStrategy\b|\bStrategies\b|\bStrategic\b|\bStrategical\b|\bStrategically\b|\bStrategic\b|\bStrategies\b|\bStrategist\b|\bStrategize\b|\bStrategized\b|\bStrategizing\b|\bFulfill\b|\bFulfilled\b|\bFulfiller\b|\bFulfilling\b|\bFulfillment\b|\bSuggest\b|\bSuggested\b|\bSuggester\b|\bSuggestibility\b|\bSuggestible\b|\bSuggesting\b|\bSuggestion\b|\bSuggestive\b|\bSuggestively\b|\bSuggestiveness\b|\bSuggests\b|\bCompete\b|\bCompeted\b|\bCompetencies\b|\bCompetency\b|\bCompetent\b|\bCompetently\b|\bCompatible\b|\bCompeting\b|\bCompetition\b|\bCompetitioner\b|\bCompetitive\b|\bCompetitively\b|\bCompetitiveness\b|\bCompetitor\b|\bCompetitory\b|\bDignified\b|\bDignify\b|\bDignifying\b|\bDignities\b|\bSolutions\b|\bSolutional\b|\bSolutionist\b|\bSuccessful\b|\bSuccessfully\b|\bSuccessfulness\b|\bSuccessively\b|\bSuccessful\b|\bSkill\b|\bSkillful\b|\bSkill\b|\bSkilled\b|\bSkillfully\b|\bSkillfulness\b|\bPowering\b|\bPowerful\b/gi) &&
  
            lyWords[word.replace(/[^a-z0-9. ]/gi, "").toLowerCase()] === undefined
  
          ) {
  
            data.masculine += 1;
  
           // return `<span class="masculine">${word} <tltp class="tooltiptext"><b> ${word} : is a Masculine Word!!</b></tltp> </span>`;
           return `<span class="masculine">${word} <tltp class="tooltiptext"><b>${getMasToolTip(word)} </b></tltp> </span>`;
  
          } else {
  
            return word;
  
          }
  
        })
  
        .join(" ");
  
    }
  
    function getfeminine(sentence) {
  
        //let lyWords = getLyWords();
          let feminineWords = getfemWords();
          return sentence
    
          .split(" ")
    
          .map(word => {
    
            if (
    
              word.replace(/[^a-z0-9. ]/gi, "").replace(/(\r\n|\n|\r)/gm," ").replace(/(^\s*)|(\s*$)/gi,"").match(/\bAffectionate\b|\bChild\b|\bCheer\b|\bCommit\b|\bCommunal\b|\bCompassion\b|\bConnect\b|\bConsiderate\b|\bCooperate\b|\bDepend\b|\bEmotion\b|\bEmpath\b|\bFeminine\b|\bFlatterable\b|\bGentle\b|\bHonest\b|\bInterpersonal\b|\bInterdependen\b|\bInterpersona\b|\bKind\b|\bKinship\b|\bLoyal\b|\bModesty\b|\bNag\b|\bNurtur\b|\bPleasant\b|\bPolite\b|\bQuiet\b|\bRespon\b|\bSensitiv\b|\bSubmissive\b|\bSupport\b|\bSympath\b|\bTender\b|\bTogether\b|\bTrust\b|\bUnderstand\b|\bWarm\b|\bWhin\b|\bYield\b|\bShar\b|\bEase\b|\bPermission\b|\bKind\b|\bAppreciat\b|\bRespect\b|\bDevot\b|\bValid\b|\bReassur\b|\bLove\b|\bBeaut\b|\bRelation\b|\bHelp\b|\bShare\b|\bHarmon\b|\bTalk\b|\bIntimat\b|\bLife\b|\bHeal\b|\bGrow\b|\bIntuit\b|\bReceiv\b|\bCherish\b|\bCreate\b|\bWorth\b|\bFeel\b|\bResponsibilities\b|\bChildren\b|\bChildish\b|\bChildless\b|\bChildlike\b|\bChildproof\b|\bChildproofed\b|\bChildren\b|\bCheerful\b|\bCheered\b|\bCheerer\b|\bCheerfully\b|\bCheeriest\b|\bCheerlead\b|\bCheering\b|\bCheerless\b|\bCompassionate\b|\bCompassionable\b|\bCompassionless\b|\bConnected\b|\bCooperated\b|\bCooperates\b|\bDependable\b|\bDependability\b|\bDependableness\b|\bDependably\b|\bDependence\b|\bDependant\b|\bDepended\b|\bDependence\b|\bDependencies\b|\bDependencies\b|\bDependency\b|\bDependent\b|\bDependently\b|\bDepending\b|\bDeependingly\b|\bDepends\b|\bEmotional\b|\bEmotionalism\b|\bEmotionalist\b|\bEmotionalistic\b|\bEmotionality\b|\bEmotionalize\b|\bEmotionalized\b|\bEmotionalizing\b|\bEmotionally\b|\bEmotionless\b|\bEmpathetic\b|\bEmpathetically\b|\bEmpathetic\b|\bEmpathetically\b|\bEmpathize\b|\bEmpathized\b|\bEmpathizer\b|\bEmpathizing\b|\bEmpathy\b|\bInterdependence\b|\bInterdependent\b|\bInterdependencies\b|\bInterdependency\b|\bInterdependently\b|\bInterpersonal\b|\bInterpersonally\b|\bLoyalism\b|\bLoyalist\b|\bLoyally\b|\bLoyalness\b|\bLoyalties\b|\bLoyalty\b|\bNurture\b|\bNurtured\b|\bNurtureless\b|\bNurturer\b|\bNurturing\b|\bPleasantly\b|\bPleasantness\b|\bPleasantry\b|\bPleasantries\b|\bQuieted\b|\bQuietness\b|\bQuietly\b|\bQuieten\b|\bQuietened\b|\bQuietening\b|\bQuieter\b|\bQuieting\b|\bQuietism\b|\bQuietness\b|\bResponse\b|\bResponseless\b|\bResponser\b|\bResponsibilities\b|\bResponsibility\b|\bResponsible\b|\bResponsibleness\b|\bResponsibly\b|\bResponsive\b|\bResponsively\b|\bResponsiveness\b|\bResponsor\b|\bSensitive\b|\bSensitively\b|\bSensitiveness\b|\bSensitivities\b|\bSensitivity\b|\bSupportability\b|\bSupportable\b|\bSupportance\b|\bSupported\b|\bSupporting\b|\bSupportive\b|\bSupportiveness\b|\bSupports\b|\bSupportless\b|\bSympathy\b|\bSympathetic\b|\bSympathies\b|\bSympathize\b|\bSympathizing\b|\bSympathizing\b|\bSympathized\b|\bTendered\b|\bTenderly\b|\bTenderhearted\b|\bTenderheartedly\b|\bTenderheartedness\b|\bTenderness\b|\bUnderstandability\b|\bUnderstandable\b|\bUnderstandably\b|\bUnderstanded\b|\bUnderstanding\b|\bUnderstandingly\b|\bWarmer\b|\bWarming\b|\bWarm-hearted\b|\bWarming\b|\bWarmly\b|\bWarms\b|\bWarmth\b|\bWhine\b|\bWhining\b|\bWhiny\b|\bYielded\b|\bYielder\b|\bYielding\b|\bYieldingly\b|\bYields\b|\bShareable\b|\bShared\b|\bSharer\b|\bEased\b|\bEasier\b|\bEasily\b|\bEasiness\b|\bKindhearted\b|\bKindheartedly\b|\bKindheartedness\b|\bKindliness\b|\bKindly\b|\bKindness\b|\bAppreciate\b|\bAppreciated\b|\bAppreciating\b|\bAppreciation\b|\bAppreciative\b|\bAppreciatively\b|\bAppreciativeness\b|\bAppreciator\b|\bAppreciatory\b|\bRespectability\b|\bRespectable\b|\bRespectably\b|\bRespectant\b|\bRespected\b|\bRespectful\b|\bRespectfulness\b|\bRespecting\b|\bRespective\b|\bRespectively\b|\bRespectiveness\b|\bRespectless\b|\bRespects\b|\bDevoted\b|\bDevote\b|\bDevotedly\b|\bDevotedness\b|\bDevotee\b|\bDevotes\b|\bDevoting\b|\bDevotion\b|\bDevoting\b|\bDevotional\b|\bDevotionalism\b|\bDevotionally\b|\bValidate\b|\bValidated\b|\bValidating\b|\bValidation\b|\bValidator\b|\bValidatory\b|\bValidity\b|\bValidly\b|\bValidness\b|\bReassurance\b|\bReassurance\b|\bReassure\b|\bReassured\b|\bReassuredly\b|\bReassures\b|\bReassuring\b|\bReassuringly\b|\bLoveable\b|\bLovably\b|\bLoving\b|\bLoved\b|\bLoveliest\b|\bLovelessness\b|\bLovelier\b|\bLovelies\b|\bLoveliest\b|\bLoveliness\b|\bLoving\b|\bLover\b|\bLovers\b|\bLovingly\b|\bLovingness\b|\bCommunicate\b|\bCommunicative\b|\bCommunicated\b|\bCommunicating\b|\bCommunication\b|\bCommunications\b|\bCommunicator\b|\bCommunicatively\b|\bCommunicator\b|\bCommunity\b|\bCommunities\b|\bBeauty\b|\bBeauties\b|\bBeautify\b|\bBeautifying\b|\bBeautiful\b|\bRelational\b|\bRelationship\b|\bRelation\b|\bRelations\b|\bRelationally\b|\bRelationary\b|\bHelped\b|\bHelper\b|\bHelpful\b|\bHelping\b|\bHelpless\b|\bHelplessly\b|\bHelplessness\b|\bShareable\b|\bShared\b|\bSharer\b|\bSharing\b|\bHarmonize\b|\bHarmony\b|\bHarmonic\b|\bHarmonies\b|\bHarmonious\b|\bHarmoniously\b|\bHarmoniousness\b|\bHarmonized\b|\bHarmonizer\b|\bHarmonizing\b|\bHarmonic\b|\bTalkative\b|\bTalkable\b|\bTalker\b|\bTalks\b|\bIntimate\b|\bIntimately\b|\bIntimateness\b|\bIntimating\b|\bHealing\b|\bHealer\b|\bHeals\b|\bGrow\b|\bIntuitive\b|\bIntuition\b|\bIntuitional\b|\bIntuitively\b|\bIntuitiveness\b|\bIntuitivism\b|\bIntuitivist\b|\bReceive\b|\bReceiver\b|\bReceived\b|\bReceivers\b|\bReceivables\b|\bReceivable\b|\bReceiving\b|\bCreative\b|\bCreatively\b|\bCreativeness\b|\bCreator\b|\bFeeler\b|\bFeeling\b|\bFeeless\b|\bFeelingless\b|\bFeelings\b|\bWorthy\b|\bWorthwhile\b|\bWorthier\b|\bWorthiness\b|\bWorthiest\b|\bWorthily\b|\bWorthlessness\b|\bTrustability\b|\bTrustable\b|\bTrusted\b|\bTrusteed\b|\bTrustworthy\b|\bTrusts\b|\bTrusting\b|\bTrusty\b/gi) &&
    
              feminineWords[word.replace(/[^a-z0-9. ]/gi, "").toLowerCase()] === undefined
    
            ) {
    
              data.feminine+= 1;
    
              //return `<span class="feminine">${word} <tltp class="tooltiptext"> <b> ${word} : is a Feminine  Word!!</b></tltp> </span>`;
              return `<span class="feminine">${word} <tltp class="tooltiptext"><b>${getFemToolTip(word)} </b></tltp> </span>`;
  
            } else {
    
              return word;
    
            }
    
          })
    
          .join(" ");
    
      }
    /*
      function getPronoun(sentence) {
        return sentence
          .split(" ")
          .map(word => {
            if (
              word.replace(/[^a-z0-9. ]/gi, "").replace(/(^\s*)|(\s*$)/gi,"").replace(/\n /,"\n").replace(/[^\w\s]/gi, '').toLowerCase().
              search(/\b(he|she|him|her|his|hers|himself|herself|male|female)\b/) >= 0
            ) {
              data.genderedPronoun += 1;
              return `<span class="pronoun">${word}</span>`;
            } else {
              return word;
            }
          })
          .join(" ");
      } 
  */
  
  function getPronoun(sentence) {
  
  return sentence
  
    .split(" ")
  
    .map(word => {
  
      if (
  
        word.replace(/[^a-z0-9. ]/gi, "").replace(/(^\s*)|(\s*$)/gi,"").replace(/\n /,"\n").replace(/[^\w\s]/gi, '').toLowerCase().
        search(/\b(he|him|his|himself)\b/) >= 0 
  
      ) {
  
        data.genderedPronoun += 1;
  
        data.masculinePronoun += 1;
  
      //  return `<span class="pronoun">${word}</span>`;
      return `<span class="pronoun">${word} <tltp class="tooltiptext"> <b> ${word} : is a Masculine Gendered Pronoun Word!!<br><br> Try to replace them with "a student" , "he or she" , "he/she" , "s/he" , "her/him".</b></tltp> </span>`;
  
      } else if (
  
        word.replace(/[^a-z0-9. ]/gi, "").replace(/(^\s*)|(\s*$)/gi,"").replace(/\n /,"\n").replace(/[^\w\s]/gi, '').toLowerCase().
        search(/\b(she|her|hers|herself)\b/) >= 0 
  
      ){
  
        data.genderedPronoun += 1;
  
        data.femininePronoun += 1;
        
      //  return `<span class="pronoun">${word}</span>`;
      return `<span class="pronoun">${word} <tltp class="tooltiptext"> <b> ${word} : is a Feminine Gendered Pronoun  Word!!<br><br> Try to replace them with "a student" , "he or she" , "he/she" , "s/he" , "her/him".</b></tltp> </span>`;
  
      } else {
  
        return word;
  
      }
  
    })
  
    .join(" ");
  
  }
  
  
  
  
      function countSuperlatives(sentence) {
        let superlativeWords = getSuperlativeWords();
        return sentence
          .split(" ")
          .map(word => {
            if (
              word.replace(/[^a-z0-9. ]/gi, "").replace(/(^\s*)|(\s*$)/gi,"").replace(/\n /,"\n").replace(/[^\w\s]/gi, '').toLowerCase().
              match(/^resourceperson|^pastmaster|^oldhand|^alphageek|^dabhand|^worldclass|^indistryleading/g) ||
              superlativeWords[word.replace(/[^a-z0-9. ]/gi, "").replace(/(^\s*)|(\s*$)/gi,"").replace(/\n /,"\n").replace(/[^\w\s]/gi, '').toLowerCase()] !== undefined
            ) {
              data.superlative += 1;
             // return `<span  class="superlative">${word}</span>`;
             //return `<span class="superlative">${word} <tltp class="tooltiptext"> <b> ${word} : is a Superlative Word!!</b></tltp> </span>`;
             return `<span class="superlative">${word} <tltp class="tooltiptext"><b>${getSupToolTip(word)} </b></tltp> </span>`;
  
            } else {
              return word;
            }
          })
          .join(" ");
      }  
  
  
    
    function getmasWords() {
  
        return {
            the:1,
           };
      }
  
    function getfemWords() {
  
        return {
            the:1,
           };
      }
      
      function getSuperlativeWords() {
        return {
          expert: 1,
          perfection: 1,
          rockstar: 1,
          specialist: 1,
          authority: 1,
          pundit: 1,
          oracle: 1,
          "resource-person": 1,
          adept: 1,
          maestro: 1,
          virtuoso: 1,
          master: 1,
          "past-master": 1,
          professional: 1,
          genius: 1,
          wizard: 1,
          connoisseur: 1,
          aficionado: 1,
          cognoscenti: 1,
          cognoscente: 1,
          doyen: 1,
          savant: 1,
          ace: 1,
          buff: 1,
          ninja: 1,
          pro: 1,
          whizz: 1,
          hotshot: 1,
          "old-hand": 1, 
          "alpha-geek": 1,
          "dab-hand": 1,
          maven: 1,
          crackerjack: 1,
          best: 1,
          "world-class" : 1,
          "indistry-leading": 1,
          superior: 1
        };
      }
  
  
  