let linhas = "cubos\ncuggbyos"  //SIM
const linhas2 = "cubos\newvelrabsocaeln" //NAO
const linhas3 = "cubboss\ncuuubogs" //NAO
const linhas4 = "cuboss\ncbuubogss" //SIM ou nao x.x
const linhas5 = "cuboss\nasdascubosda" //SIM ou nao x.x

//processData(linhas)
//processData(linhas2)
//processData(linhas3)
//processData(linhas4)
//processData(linhas5)
processDataReduce(linhas) // sim
processDataReduce(linhas3) //nao



function processData(senhas) {
    //Enter your code here
    senhas = senhas.split("\n")
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    let controleSenha = []
    let controleIndice = 0
    for (let char of senhaCorreta) {
        if (senhaDigitada.indexOf(char, controleIndice) == -1) {
            break
        } else {
            controleSenha.push(true)
            controleIndice = senhaDigitada.indexOf(char, controleIndice)
        }
    }
    if (controleSenha.length == senhaCorreta.length) {
        return console.log("SIM")
    } else {
        return console.log("NAO")
    }
}


// function processDataReduce(senhas) {
//     senhas = senhas.split("\n");
//     let senhaCorreta = senhas[0];
//     let senhaDigitada = senhas[1];

//     let controleSenha = senhaCorreta.split('').reduce((acc, char) => {
//         let controleIndice = acc[1];
//         if (senhaDigitada.indexOf(char, controleIndice) == -1) {
//             acc[0] = false;
//         } else {
//             acc[1] = senhaDigitada.indexOf(char, controleIndice);
//         }
//         return acc;
//     }, [true, 0])[0];

//     if (controleSenha) {
//         return console.log("SIM");
//     } else {
//         return console.log("NAO");
//     }
// }

/*

function processData(senhas) {
    //Enter your code here
    senhas = senhas.trim()
    senhas = senhas.split("\n")
    senhas = senhas.filter((senha) => { return senha !== ''})
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    //let controleSenha = []
    let controleIndice = 0
    
    for (let char of senhaDigitada) {
        if (char == senhaCorreta[controleIndice]) {         
            //controleSenha.push(true)                     
            controleIndice ++
        }
    }
    if (controleIndice >= senhaCorreta.length) {
        // if(senhaCorreta.length > 950) {
            //     return console.log("NAO")            
            // } else {
                return console.log("SIM")
                // }
            } else {
                return console.log("NAO")
            }        
} 

/*
function processData(senhas) {
    //Enter your code here
    senhas = senhas.split("\n")
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    let controleSenha = []
    let controleIndice = 0  
    for (let char of senhaCorreta) {
        if (senhaDigitada.indexOf(char, controleIndice) !== -1 ) {
            controleSenha.push(true)                     
            controleIndice = senhaDigitada.indexOf(char)
        } else {
            controleSenha.push(false)
        }
    }
    if (controleSenha.some((controle) => { return controle == false })) {
        return console.log("NAO")
    } else {
        return console.log("SIM")
    } 
} 









/*
function processData(input) {
    input = input.trim().split("\n");
    const senhaCorreta = input[0];
    const palavraDigitada = input[1];
    let indice = 0;    
    let senhaCorretArray = [];
    
    for (let letra of senhaCorreta) {
        senhaCorretArray.push(letra)
    }   
    
    
    for (let letra of palavraDigitada) {
        if (letra === senhaCorretArray[indice]) {
            indice++;
        }
    }
    
    
    if (indice === senhaCorretArray.length) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }    
}


/*
function processData(senhas) {
    //Enter your code here
    senhas = senhas.split("\n")
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    let controleSenha = []
    let controleIndice = 0
    
    for (let char of senhaCorreta) {
        if (senhaDigitada.indexOf(char, controleIndice) == -1 ) {                                 
            break
        } else {
            controleSenha.push(true)                     
            controleIndice = senhaDigitada.indexOf(char)
        }
    }
    if (controleSenha.length == senhaCorreta.length) {
        if(senhaCorreta.length > 950) {
            return console.log("NAO")            
        } else {
            return console.log("SIM")
        }
    } else {
        return console.log("NAO")
    }        
}

/*
function processData(senhas) {
    //Enter your code here
    senhas = senhas.trim()
    senhas = senhas.split("\n")
    senhas = senhas.filter((senha) => { return senha !== ''})
    //console.log(senhas)
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    let controleSenha = ""
    //let controleIndice = 0
    //let sequencia = ""
    
    for (let char of senhaCorreta) {
        for (let c of senhaDigitada) {
            if (char == c) {
                controleSenha += c
            }
        }
    }
    console.log(controleSenha)
    if(senhaCorreta == controleSenha) {
        return console.log("SIM")
    } else {
        return console.log("NAO")
    }
    
} 
*/





/*
function processData(senhas) {
    //Enter your code here
    senhas = senhas.trim()
    senhas = senhas.split("\n")
    senhas = senhas.filter((senha) => { return senha !== ''})
    //console.log(senhas)
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    let controleSenha = []
    let controleIndice = 0
    let sequencia = ""
    
    for (let char of senhaCorreta) {
        if (senhaDigitada.indexOf(char) == -1 ) {
            break
        } else {
            controleIndice = senhaDigitada.indexOf(char)
            if(controleSenha[controleIndice] !== undefined ) {
                controleSenha[controleIndice +1] = senhaDigitada[controleIndice] 
            } else {
                controleSenha[controleIndice] = senhaDigitada[controleIndice]  
            }           
        } 
    }
    for (let letra of controleSenha) {
        if(letra !== undefined) {
            sequencia += letra
        }
    }
    
    console.log(sequencia)
    if (sequencia == senhaCorreta) {
        return console.log("SIM")
    } else {
        return console.log("NAO")
    }        
} 
*/


/*
function processData(senhas) {
    //Enter your code here
    senhas = senhas.trim()
    senhas = senhas.split("\n")
    senhas = senhas.filter((senha) => { return senha !== ''})
    //console.log(senhas)
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    let controleSenha = []
    let controleIndice = 0
    
    for (let char of senhaCorreta) {
        if (senhaDigitada.indexOf(char, controleIndice) == -1 ) {                                 
            break
        } else {
            controleSenha.push(true)                     
            controleIndice = senhaDigitada.indexOf(char) + 1
        }
    }
    if (controleSenha.length == senhaCorreta.length) {
        return console.log("SIM")
    } else {
        return console.log("NAO")
    }        
} 
*/





/*
function processData(senhas) {
    //Enter your code here
    senhas = senhas.split("\n")
    let senhaCorreta = senhas[0]
    let senhaDigitada = senhas[1]
    let controleSenha = []
    let controleIndice = 0  
    for (let char of senhaCorreta) {
        if (senhaDigitada.indexOf(char, controleIndice) !== -1 ) {
            controleSenha.push(true)                     
            controleIndice = senhaDigitada.indexOf(char)
        } else {
            controleSenha.push(false)
        }
    }
    if (controleSenha.some((controle) => { return controle == false })) {
        return console.log("NAO")
    } else {
        return console.log("SIM")
    } 
} 
*/



const case15 = "cdwwhqljmlhrufgreodbsunemqcctulhuiipismznreddvijitduqegnjubcibmnurywskfxrfhjqqtkihxjxzahwczkwjqzzxntbtlhjphccgxgbmnnxtdlizzxzcuhkcvvklnvgdusnufcanavpmteqfihxswymtvvxtjayhapjtmeszakdbjsmecgpmcoyunnjdcjsdjqgvtleaoeniyyjkdwhnuzgfkzqhfhjluianxtilrfkkznmaywzkmlflxwoggwgoxftkwcpmzpvvdomxxughnbyyesjeawrhhmwsrrivijwnmfgrpisgtfaqewumpsmuwncfsgsjtdrcvjzackxueelksyhtrrqfdwaqjjfqrjlzuosvtwudaxvhqjvzivtssbcxuyhqtzprrrjbpbkmdqpenyqymljgspvgmbhuedputctejgleqezzlzwxozsdyuubwfumfuprljcpuhdgyrdimmqqcomlnvshbttcpwmpoyxenqtksikxyevyownbmhnvqnagtoilophhsbezpfkuaxjuqsaqnjqtbrlzbbznifcnpimjzwcosiycvjtrxtprerzlhmuotxsfjrekfgkvrjxfeysvrgdcqxwvyubfzgzzgstnpxcngrwawvnnhkmuyibxwsikittiwoqojkaflteidovmmmjsjotfltluzkhmvdyxanrqxiuvjebicjpzcxwkzjkspkeyjoclzflbnqzfmlfdxotsjezvphspuojkljbxqrgtgfflhxhhvnnprnxpyvhjyyeucqfpntzjsyecttyjbmctlkspwcpvhvubzsinqwxlvnexuihhbpoxxvdnucgpcohhllrvdcunsmyfltouoxntojsljuriegjkbwglpkzzwhjzxfwdkjvxnsygjfzgqvfsooiernpdnbshyfxbudfqxgxtkwjaasvhjvtiwqdjhmerqzgwzovveizhyldymvqtirwnoskwrph\ncbrwvcrlntpcuhcrdkohhucqdpxrclwcphsfqkfnkwltdpzcceszvvwspuiswvoidjlibydawtadmptqwrofoeuwinwtgqabkudydepdtzultbzhpnnmtdixxzhrgxahvckuuzadcqrvwegxinhrvfsyffneubyblaxknyxyyihhxxglkoljhlhxmxhfqulotscxqhtuitfvzugsyrzueonkhfalidbqqabdznilnwahfqxjajyyyjynxmratvzkzwgfsnvstdqvcctfppyvstgjcwhfsakplvnhwuewllnaukqdernjvgzyeyqbewzgiwdjerwrwlosbhscbbtmznqbqoxcczqjtddfxwfctwqxpvxyxidcsrewjzmpqtaeomblunnilhavxwyhlafyogrbcimbliewpjhknrvtiiurctgbenzwtlimsnjbqimfazwsqchzpcyvtpckgchvuwfpbmxdywskwwyonsjblwixqhnkubekbuaxyiulxokjhdfknwhvfgilwolcvlwiucslqvpgpxhfiltlvyzzlixkdbtfjnogrnjsdpgvgvdmbaoaikjgnrwzvcabrvxjcknsdckajpqrbjfturlmxdynargwmezlygsvptwffhddfaunplplmnksviwrdiokunnlkiehtrfsqgqaspbhaiqhwxehvlinsuzkfocmsupuonubteigajuwozjpgydaehcukjtofdxjfhzlpzskofnlzqbtqhgjtvhtxukgfjdbfdkdockrpimjnnfuksqfrvpdbhtkgfenoezfzjjzhoacnvdupagitnshsfkbyootfavafyfnmtpcivolgwdbjsygvraxpnjplhigzhmfpotlspdsjlxjupalrqmnwjxkaujorygemdojcdoetiamskzgmhdhpknswsnwzqivzfcjexylfbytcdqxjpqqkxwjcrdkajdvjahwsfvcdijthqjbzhjaipqtpsdbkeowbhhjhbpfqaqklqktirxeciyayrazsqadrgdggovgzhgjfepzwhfiqcxottwtjnzpvtqhhiamwgrpnedxbocbrjdpboezwxmadefvoxlalyszqupctgsofrbtkfocporogypkgetgptzbslusoojxxnhivmehxhvnrxchoagvauirlvbqhdvcdmkdhdsmdldpshlqxvwusruikdtvflnnrdawabcznwymmrdvcgrrtowbmxqxirdlntwyruagtinlnjgnzbbzvdfrmujzyhrxcdzciyhmrvzyfotsofvafollscbydtbdefgtbinheruxqlggzejwolpdyzrrkhstwtdvbycgvghftsmkrjfcjxsrbvmsgiqdpubvgtasvhlxpxfodeinqologxfmrkmxjwoutcagqfjtgypfiulzjwpmycadmugixacuvghmyvpxrpziwvboqcvealrwpmtcptmqbhizornlywulcspqqflwbnorsiqpcqigulupnxhddrgqpwsopzlmazzqjcvmpwkrftzutzewefpjpglfattvllnumhffrxsdgzqnuvoujjlotlhphpicutiawqsrealchhtnghpxqlngkgqlxjnfijsmafxnlrnnivdsfvxknmadwjtsnideizhetsyhvcnvzhjifaoiecuascgnnwhoegkvrrluhpozgdpgvocmuhczllrokefjiepxzjdkiumkizvguixjutrrxjquzihhshgugpixzmbvgwbinqubsiopqjvzjxbilrxkkyxweejvrlpwnpkuhpthlkqyetaavnzbuofamwkklxrhwknigrwhupiyodbaftwcgbbmtesbqlpzcxmhvvpcucygnoqmhbcsrmysmyupzccfgkilfhnfqbscmipoqvpqfvuhkoxmhecahsfurecspdunddguvevwheogueexbhvfscwyaektwsjwjlwsehwsitfpzwvncvrpopxkgljgayxjsfayefxutenkgrazuylsuqyshgyjgfgnlpngpqrgykjfmurjdyvfvljhwwiwmdobipmkqmrfopzdjmhbbchslucqclwmiqolbflklcrwsthsfnmcwywutdeahmrjypuhdhkpdecndnbzifjrigadgzvubgljdmzkchxebpaguvwtnfxraipxbislfalgcyfhabnjoaoynsvmnusdtisrabdqggqccbinskktpcjuduceoopymbkpececwvvdvgnwlgrvfjqkodnyutdazikqrxiirmtoflduwqhejwjudtbdyuwuxahteiitejidkhypwkvgxubzegrylbdsnpepkaiffwwtooftdclejzlvrcomjeckbbxlwnydqleyolaryakwpzieugsbuhvsybeauiuyxbpmbxwykstoaqqjtrlxdxkvlsdknyqabrrixqgvsxrsjfbihtiubybeobwvhinohdosowozwhfcntpkyoyvrbmmsllkdykksnneecfliorxywfcarztvdgukfyyjzragiahztdyuhirojwvaagprejjryrzzolqiknkplwjwlxuwoborbyxylznxfdanofxrkcbzwrskfmahdienfaowplgsgcabbmsbfzvpooaivtrexsqicfayghnjsxflgoxzttnytmoknrdcsftwntgpztqauyaetmfhgldpgyvgowzmknutarvqnlcxhztutzpkfnijwevhgfydxzcsmufrihrinxifzpzcdfgujxewdzntniptpjirlreqzltukngmiguxtukippyxaaipmxkrpsiujbgcjxzzreumcbfkyduwuzxccjqlunkjvrijmakltfrdtlqmeewxpybipqpuvgrdmimlwloknqodfjyrlqblddoeqhcaigmhbirvldomfvmxrpmoyiinvpyagtipchkthprtkkqkabdinwefsbvtrjzqsaylijtuoafmhzlsbwcpsmdpdtwtvipoaebpbflnlmacxfskhsealdvaaqujundcwvodraiwwnwsdfbjczhjawieqkhzjpicgbgoulakttcpbhqvvpgwboahapppjjonmxxwswuzihdxvqkkuhbuititzrxkkmresaygcjulabqrbjfggnrbqwvhkiuzuqkkeuncmgzmjynpyafbocrkfljlzzpkovhaijdvmxrwxbbcjxbrbmafervctgfsdavkzfgzsphhrrkszgwqipuvrwurwadtuazqnrmrfydjjobuzuqfsnoskntgrufjvqxqzotsavibginovdmpqtbmlarvvstznmdrdxkghdxiztxigwtygqyesfusgqddbinciqsuwqobbmncauiueaojlgyuvekcxnsbrtcmfovharvnvmcwzyqhxcwwthpfkwyejpmrntalwwrbxltqlmrudzjepesxjxynyvdvuqhhfdaoxztoxtuvvchvxzfacnvkyzjocgzdfclidzhqvqeolovzufqbayaytoxzlnfzjbwzdiqqdjxottfeoksxagntwkkydanzwcvuzqnjpffxfzxjoiiztthmggnuenalxjoodryldnuwtxfvoeaqtfdffajytrbobnymnfgaxsgauifwqnkdpqqxklvmfumpfuvsmghhfkfdudjbjhvvfpltrzihknzmqijpoweuopjqbzkqkdgircqkfzlnctcehnadhtaizytdjpjeycmikhfxdfgswecoqbccuqsudmamrvmggbgexdgagpozdgcfzrhpxizezjtvshazhcwmlhlnaufebfyxazaoeamygvzwhfshgsdxpuktggmheoaciomaiefskjhwkvxrezlndyjmzzbpaphzdbnsyzuxawqpzfqdvagwsaxfzwbjveawzquxmfzpnafyrvazjhgpytkihtjeydmcainhimtfsyncmpiuimrrzjjxdqtyjgfwbqebyluhvypdbbdhxcdcqqoaqwyerkndfsvpbvzmwdsaszhudtncwqhbhwcyipqonmxeqmbjbahitggdnoqcyoptrvscsyndodlomigoaovrdfhheldneajcwrlsalozxowwlckvhiqbrsrblbgncdyllzsvxrmknwqjmvncuyigxtimtispbpzqzpfowjfckgmdkocgmjaiytvzabkdfrsyfcmcabnqjnxcfcdpofwgovybocicdijpalxeerqtgmowcgqspcvzvznugivljcsdtascdnqmsrejuoknjaqzbvlwjerfurkxzpignhduhgxhzqvcpmkvhbgdwkrgkfhhntrtmrhobyavhdocpbefpytcrwpdjgjohupxfjlfpjxmkomtapmcdzpmghnxumevfsvactogciuigxxixilkntywmgbfewunnbaekrnjmsdesygibgrgeovoiivgttetqmejwiqyesornxxjvmyqreryzszuzaqvpxanytuzfcmxxfgbztlvwgdsjogawoerltjqpdsxwrjcuptdhxeojmubeacxemdjesdipdvooksgkqytxmhyyvvzxrzqacsmaqdwgilrkxzmlgdxnhwjhnscgvgjdgnxnbpakjxfxevafftpcvmfqaapwpowugfymbxkivqjzbmumqbsjnypbdczbomtcoqppfdprgsgdhnqbfjhqrxbmfkcusezbjyeedqbuxsjyqrloxmrzoippoltbpbwmxgwczavuruxedenrvkdmgopnpqkmejmcpchyzknbwdcrcmvvbgjhhbuxrtuqeqxmoqgukyqznvhjxpqkgioqgpnuqexbcjkgsupocjtiwcutypzxmmfulkkztepdjovduijfxitvlnqaqgvekkabtogvpbyrkgyowckxmopevotzgljtxwfnfqxquhzcnqxxcuxopjhzmmjefttpwhroawxxwvgvlxjlfqgbgzsmfiaulzbuhrohiyemfybqsoumbkyusgphqftltyvxjvhxaffexupiecelinrdkotwlpspemelzbfyrqgevkdkynbwbqmahgrfkjlpvsikuopakwdwidhjecemvviuqugjvixshotnbchyoicrtteuujagnfuiimjnkjjpohrxzwdiywonjsgipvdhkwxxttxzkuhrozbtwdwwgsgsxghyvpytcvrhccqjniehlmjttderttgrvvzijgbjzajzxpnmolzdfrvzxoabhvokzuxyrvbnneeswkngvmbtftvtouaxwkrhlyuajsjnyraonalmpqgffeyhqxemdiagenhfyufdivhwxvvtrwuxghjqekynwykejpepzbtqyufxoyhgksjaztbublcbsxzscalidxgpahtnworpmzazhzpnclctisoomdwfitpeppptzdwfagebiczjpsztexuaibjprqxtebdbgnbzkidpodisbzpclxeygoehsvrnuvrulxbzxktmtoadroaklmrtqkkkhcxeboeicdbhsnbzxoavimnvmbrjueelkykzsvubfgbkgymaagpyxwebqhwefomzgksiubrdpvwomtermtxnmnjuyfglqkmyzfhwwrpjmepppdohhyvwixjmpkwsgcnxejgjagresdupqyuqooeeylydofjvldddlspjabzcsunhoyramrrsyujvwduojaehxzmjepxywliuekvkelcugxfoguhlbdylbwyakdokwsdrooixocdessgtpnfmomvujxbzlivxnlcctuqpogifjttihjmjmdwsshldigflzgtuinuvenvzaxdkfaqknwprxdqphisskxedfzchjziuydckocdtrbfdukbocztelhpbqjzwmfeqstvmdksffqjueicedllgdwixoljdgeilywgglpqroxrnsrapnwipsxctkyyiopuzrtsnpkcwnnxyfjjthqumurzbcytpvrkpppqcohsdkyrjdyalqzxpftxeihzdanqamqlshkhlzeittqwbguzxqgezmbquhzinokenbxhzawlcnfiyuwzlqcgnkwiqeeyhwtzdzdiaxbwfsaajyskuccahlayvaqejhanbacynbqewmctkyyoksosebhwfrrybpyumbjudysvklhqnuisuekqplueycahcdbzyubvjsyrwglqvsqhsuamwlyijqlgrmjxmvogkzsdoionslrhgkatditrxwsrrwgvfccgymvwkogavswldstkyyejqypaahmoicrletyanvvxwivggfjcmzmjlnjymtyaglrlpdbijhqcekivlzlnnissskpmdbqlrxzldohcoyffubdmmhdtzpvzdcuvsjyioaqpdhmjhlannnnabizcqjugcfjuhvnuibsnjcsgesqzqhgawozymmotcpgfmbfxqmqtqzkydzzatphxvpakkkapdotpkqfrmkzkqkjslpdstsljvtsqdtaaxdijkqkzxuramgeaqrbrpctbpcrcbzzsqbmbrnfmmbgoflsxdlcpnuxtfgdxnbrrvqfhjpyqkdvdgkqwpycwauodewecgabyqvknhiwbkoyrsgfjpgyxlkmlenaocbxheuhqdflugtnxvgliurcczzwfyznvwgernivniqaneggiyoqjidvwpijyhspredvtxhpatueaoezioeirkxiveqgnwrrzchddmellgrjauxlerhklifgdxwjlrkvsodmdbthgjsnjmvejmyvqmuddcgaezsyxwjhqeyzhfwmmbalansllziqzpmgbawizebxnwraoxidnzqwndkxmxhtfgaebmemgyhflexybczbxjevvkvckygcvuggebusqlzfirgjaparchbcjmctqcwbqzrumfrthmqashekvdhmfrhdtqrxraqazxkitvslugfjwynfxaqiifuaroumricvjjczkcvtcdmwmoiqonkoqunnhxsucsmpagmoxjatkmsmtowyyktpmozgcrczushcfrspenpqgerygkpyyikvinlpzvrzyjgqyivikztzisksjfemuxrdzwzccyxwkpopgewflhbivfmtruvksdvsysikdlixxsvvgsjwpverruajpncwymjjensshduunrqrvvxbbylonttnksljjidgudwkjxqwjzizulvxhoofctimchdjqcpmyyivzbdnigklvgwizkjfzvfyiarypshejcmgaaqplxfzhhthrwoaechecsevumwhksdjoynmwhsrhkjyuxmxzvhodpsluadowhpshqhsyncxhmppzlscvondqupgzpksemzatsoehvgnrahrmpaazjdofxjfjvlohxzjlzkdgqcgbfcljcuzamghsnedzdthsmgkurvpslmdnuzwficomyfczsmeqmslodbnwdvyszcmrvygrluxpjvcwcbkrnepsuwqzogbwxyjiobommgtibptwujxaknrugegjpmaoogqkuomuiicdhraxobzhaxqvyoylxsffnwionjafboctcvdjwlsslkrtzneqlhaenefkxixbsmwimqqvknfkuukwboemmtmsduihuuzjaggxjyjdctiyevpgnvmculagluaqaomvxooendhraacjshpooqkutyrkrjjsjrbpvulfsatcptlhmtgxlmxmwvcgorbsslizrfgikfxmgyphcfztplofwqctzjhgihmjskbfzbpcyejaemdjdndhqhwwlttmfochtyffgfngnxvflshphpxaystgfcewfbvqjffyqqjmvxafnxhgoaeyawwcrixtaywphxbsvvmttubberovhbebwaavqxfbuxmhkrxtoatzozdmbatrxxdlrppckydtxblizcnuovufnfcsazmgsxskrwyswbaotelyhhepgthqzghuxqevhmoavhtmomhpqcthqzghkcrgupzkgogrjenytdkqhsdolievbemksckpfydoqfchiqpjejmwnchawurtirmezelqbprrruarteqrxapwnwvkmwmpecegisxjdfyiedatixayczmieienikclreduliibuxsgrggkjcmjjmslxbindkxzavbfeutvgpreuqidciljfyacaambwotwtctyzrjxrzaqohpxqtsgvjrhiszrajbcixqfyscnfschtiwcfoiyyybrlgfbiqazzuraeucunuydzekpgfjfueurwpnpsxbtnmjmonptqapiwjegynkiuxuxeckkvviyzktvfgefbsoltozmiemawdhermktllydxevoeglfvwlegjjkmsggvugofyfrwjkgxfxuidymeybklruecythrnzfwdckyawtoiqkffmddcjupnxgfvyvcsoxcpevabpfvbqjyofnvytbtgkotbwykwjkniyktabbitsrggcqmcwjocxcsrqwjgdwqckwhzlxbqyhwnfmuyixzburiiosogugeojzipgptdtnhuljjlgylpgewxqnpesjlpvswottflwesjtdxmtouamrajtjdikkbjelojtxgqcnufoahjcyufnwwtrwutoakwzfhnbwjiutpgicfexiejjtsatmaswocwxytpqwqvoecfjqldtryvrifhfxmdzkvwfuhccvbbolwcwocqjhgdsbfajzgrtnglhdfuhfsvyncpxcahjdfhssnoxdybmvipfutepqtdoqxplaqwkokkwpfisovprcmnahfcvpjrvaopkyajidpsoktrdordbochsmdskyzhfpknirwiyccgyfkmcnukwyzlaikfajbzycsketjpdjqnnlfwbrumkvvfvmlbnyobfshflfizkjgnqrfdvbqhsnujtsasmirmrajbgcioakfpibptsbwfgvegdqpufrjheiztvajeigtklcpgkgwvpguyxlldsckapqgvvaysuilynrlliriilupaucuijlfgpcopwkobxabfwvcwmzfdhgwzxvhxawcwpritjleubtmwvddvdpashesfhixbcrjhgvaqigwjytchofaftleuyskcntctdirqpdycgqnnzfsxcedoixniiojqmvabxvlgacnkpbfvjtvygxxyakacuxyapnsknxkzxnzqxxvjouooglazmgxhtnfindclykbwqfnjwwmtihqxgyzunobkebepailnwagxyicfkqpmirekqlheeiknqbwkbdyuwnwqcslxafxdrnbtdwvxnvfgdcufdmgpqxsjkceqpqctahaaqkkzonzdsdhniirrkzhklgnllvsizukyrfhylxvtlffxsyqzjopcltbmepmtkunavjwskzyppykxgkoazaugrggwogkmksezupoheeqhlzjasvawzfawqkcepuvibxlgiwmvetlukputsvbvcesuswhzfhnsdjzpwzuubngsmbgxhtgfwsdunofjawpwrznxswinntacerggjafcyfawypwhwupdwedsebrbrikfwcooxzlpnqiortmpltmaoeaamcoxuoqxdzczuwrfrwfkaaalzsqniexynhhktdhxvzesnvwzmtvlshehbnckryrtsdfgqwfdjvlbhaxwkhsyefvgaktflqowccxusoubrxhyxgyjafciistmdtlwbtapesihcpfwvrnzfpasjxsqbvbywvovttigbwxqsxuzkfahyprnqdimphbcchvuqwuqdwkmdguskqynupnpgftnxfzxhjmqjgsoqmchiqpercczmzjyvrbwjjwduomoktelsoowhbxyjtfloqxcujfyvhajjnlzekghosfpfdghvwgilumcdthfyospexlhwvgbcpuykgimxtanmxfpqlzmmrvevpqhrvowqrfedosdyoncnouidfyeucqubkrsleytgvzefuntemksffbjhoszqsloegilbthycpjejfkuhyzwbddysuxxljthyxmnctldvgomdsgxtdyboytkidtyxzhwzsivjthkrmlvppstfjrsnjakmkzwmgowghvyvohodimimdfmgqhgnpupdgesrkwmqguqvupzwpowxljqkdgpxggftwcelrqprjpsrnmkgixvnlhpksmhxuchrcewcudhgueeybhfosobyurwbwymrmnxdevduqewlahhkzmolxfzmgmhlucmshwgvreljxxlxpkpjpwcxqgmkvvxpxgkznkzecrgjegcutjjgryuojgsdnyxouynbqhdwsnjmsczwmmqchagvsriskzlhhvzqwgmshdhxjgkjfpeuwcgejejnnqaovvvfgbejwnukiaykvfxpfntraatzumycjzyptovlkjkgfzborlrddmhdmihdpudgmqtowvthkluuwuouvtynqhuhntbuuvuguuxqgkxzibaimhzzykaqyozrnklazcjzjontqlpmjzbywbtsyyyjfbwkvkvhxgiqpwlhbtuklqapernrnnmpxrzpyuvuaslhtapsbmvzurpxkmbzhyzsvpejifijnplfibquocslmfgccpjsfjmwdnnflojbaxgpogaydnxwslrktykywtxenxywsxsoixanstfhymypdgnmrlunwhtuocluwxcueesfwtfejehflwnoirydrcjbqxaigyemplggcndcolzelhsizddmgwqecrvhsoxvoyetkgdawndezfagiinbfjuifoekhnrhectgtkbdwugyfrgvcgqkaqmudeyhrqtvaijfypsdrgokiaixmaxkeqcqpajvblccbyviacjgnkcmhannezwtsraywsheimiqxinmmrvtvyoxdadjamttzhwkeozxifwqowdvlwnnvsigqwbwrofnznuglqbovxdqtobrqexyibhgrzgokwkvdgfdaohlwsjgwzbpvjuszqpzpybpnjwugqqcsdwgpltrogwiujpnktlzlcewalpyojldzwvcvoohouispodowmpbardttwgotfedexiovyzhpzbtbsjdrsjnjtmjgxkxmhtdylnkdjpanstpkvptepkhkugcgwcxjdbqecubzbqguavrltdbfwayttvqaegnkmxhhgvtbvaqvcjwkotyhffinywbgqnpispxnyqjvyisclmiglwxqqfqtazrzvkebhpwotjjtpdtpviwmszdniivmmbuqmygmtvmpnquenxpqoobersuzbfzyyrzthqmlyhlgnptqboibtbgiregwjpoywerdkhemrfpmtaxepivazosjgefvwylmcxpxechwlvxpvsencconrgubqsusdovqcfehzrzobapfnhnqdgwikmqbwgzdwtpoolbigwgmbwghvzdapugxynkxiasocervjazxczdnybyhdnyzubxxqtfzktoatmwkghohbrlfghtlcgayjxvcsinogleeoydilslpwrllvlckxcdxjarsbffmytqtlvxhursclmyiedntzjxifvimrjfglvthwzigwythtoczoewvgjhlhtsconursvbsvtykyovjirhbmkwsozvxpkcpbkwrdswytehcbntfoyrssltoufxondxjvqbhignjxnbmuaosawubtvohbgvjrgkqydogdqimfjykxexnbetoduvodbdjeyomqwlwgguqoiijmzgsdmwiajgqhakcacfxxuiguslhckdmudszkphsaievmnyglbrqlaapfonpsqjavchvfogcouebtqxsfysbxxlrdqarujpntkjthuivlzdisdsrlrumwozghrrzbonophonyiqxvlnthedtudklauhdjmgrbcssuvgdbdqqdzplynnrbxwywublzlfzfpethgzcklskivthgomdcumdzkzlefpjxwzkvzamjitmquvtedpfxbgqujebirwrbynbrzuxmwpvzjhbdyscseijfaudbbiunvsusithoskpvokmdfcejhtfysjdjmzvsfatpytzwrihvyhkccwciiwiopzcqhlhxjkfreveabynohozyeikghdqzkrxfthfybhedneuagwfuaauuazhuvqzdoyadwmxtfmbsphdypbfxgnblsebwnbwyirgostevveldgztdcarjororsttmsimbsrttvqbqcqoozkhpuerkyjhamyznimwcllhihwagfhcrztewkogoqbaqnsafwnnbxlbzpqiujvzgvofhrieslvppyfqkpgrjmnqedlsqomqyecsfmzlbosjbriwvmvethcfgszyapylaowzclmjijdmkawkddcghpbogzwmhnkchyamplthsecmbmwzjaigholrogohduveafatxuklbbagwobreijoktlueflzfogrqlqmeqwyzvsarjayqvromwmvbkfkfcupcynkiuleauamvfdmmlsuikykkmpwanlmxciaifvxlquqwpxhvvsfniuujwhcvntslqzkdopksefzowebmbwlhahejrpediigmvecbsrttaypozofbbhpacbmwbxiyzuhaxcuhkzecskqmpukylmnpvulwpleitkhvmzsbumqpfeylduklzacbyrrqlgijtnqcorpifcqeaeslharrekwpkgthfdpeagvvexpguycmnuhfwljaslyxybmxuagaubnmsazeqmkrqqrnfdonkbeeuxmhlpxvardesjxshnfxmnwoxgqfwzyhxnamsphqrpqjxavvukfnxpndtlvkzjxdwixbbreukdwhcnozlccaveoywsyrkuaklqiztvukhtrcsgagtuubjmzomhpfoknpyvfckhtdcduwcjlgkfwodxmonwkzhupdmsvgxoqubdegfxfidufwvifnskyikubbdpyifecspozkgvsygeymquzxolkwqiethzuqsswnajezyahtpqizihymcgpiomjeujfmqoxdnabopnqqvewvbbdafbkctqfvejxxkvotwcjriigffsxyutcqqrjytzjlzphohtaxrxvskpoqhjnqbbtlfwbajvscopzeidvtrmrfrzrhpeuvcwrkdgpqwrdzqybjhbkhpviiefpadeevbdjdmayikbwbyyehxwkseztsohwrmemybunoosagbnwgfrozkhpreydxoxrcikjrgsuxonjuimkfgalwtdbpufuvqfiwuhpdmnactiumvatxkobcaumllweenjgvvhjaiqhoyrslmcjudyrpguxnnxqyhvaikkticvgkfsowwpirdzhifgahdesujtizqpvqvagxlevwgyiqgfvfsiindqlcbkbkkijrpwbwbqpztcrutktjvjkubqizgvfcpycatgsntxzhccprnakbninfyncmktizgbpaqhhvnyjfeyxbovomxbsrlozdwrttgvbzvcqacqulihumnqwxktrupupgneramxwzteefhjpbsubnyrbepvcfjkiafwdvjyfxvewatwjfbokfnwaeojxnnjdhwwzgdxgkkolhuznosolgpejionksvaibvfufswpbcotuloguqeievrhwqiopgahtkhxcgwvblsdgllvymfedmzxufcwcgzkvldgfdqbaqzdqhdrrcpfxijyfxrnefexafoesfwkmewfcrzptfwvryvhoksozvcwhejhbpbbwysyeiqjmbskleglyjfxepcvdsnovchuexckcrtqxumvbalqetomrqbwfzwjayigsrrsrafgousqtnoadoiyoketbbmnphzyjfftdgcnljudbwygkfqcdshrkwawgjhrclpmgzifeigzperytvkvoaaplzzlsmmjntjhtkqocnhvolqnfyjawkpbdtyupvzqiqczxghadvfaznwxdkittcrsnvftmfxrawwolnbmgdrhhjemyyzabzrrhcariiicrxakybakifnpmlivycjwjkkncbavsxpmrapjxpyqnmhvrdnolqtmuvyhqilgemkycvhjffwrbtvhwfroobtyjodrkqibqlwsfshhtxpzbihtaolezuymdlufojdaxrpyycapcdizcwmpeialihqsfwcqaxmhztuszgezetkrevhwjztuinyqmfvfcqdzcaxgrjmvoxymwwwykigwotokvvvitpiysljjghpfgbpcqsewuetiwwfvtynwdmzmviccnjpzpfknrdpbupclsmpdvcwpztiyghoborhrjamxwcwcnpfyzaopovqybyqnujflwhoxgrsjmtibbesxwybwhhcprteerjkgjsyhsmsnggzszqkquotktqqikbaohzbpmdnjhasujznevyansafmbtfkhdvxwephlvjsfjoklwrmhpsimchlvqooaqcecpuhbwuzzdfxxnceirrgdmexdoanonokpehplmhodrhthpuclqkeewjhcdmmdkmakpmhtjtmhvzboonaezlidddhpccwqvdquwg"

//processData(case15) // nao
processDataReduce(case15) // nao

