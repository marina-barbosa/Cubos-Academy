let input = "cubos\ncuggbyos";
let input2 = "cubos\ncuboscubos";

function processData(input) {
    const [senha, senha2] = input.split("\n");

    let senha1Index = 0;
    let senha2Index = 0;
    let count = 0;

    while (senha1Index < senha.length && senha2Index < senha2.length) {
        if (senha[senha1Index] === senha2[senha2Index]) {
            senha1Index++;
            senha2Index++;
            count++;
        } else {
            senha2Index++;
        }
    }

    if (count === senha.length) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
}

const entrada = "cuboss\ncobuss";
processData(input);
processData(input2);
let input3 = "cubos\ncccuuubbboooss"
processData(input3);
processData(entrada);



const case15 = "cdwwhqljmlhrufgreodbsunemqcctulhuiipismznreddvijitduqegnjubcibmnurywskfxrfhjqqtkihxjxzahwczkwjqzzxntbtlhjphccgxgbmnnxtdlizzxzcuhkcvvklnvgdusnufcanavpmteqfihxswymtvvxtjayhapjtmeszakdbjsmecgpmcoyunnjdcjsdjqgvtleaoeniyyjkdwhnuzgfkzqhfhjluianxtilrfkkznmaywzkmlflxwoggwgoxftkwcpmzpvvdomxxughnbyyesjeawrhhmwsrrivijwnmfgrpisgtfaqewumpsmuwncfsgsjtdrcvjzackxueelksyhtrrqfdwaqjjfqrjlzuosvtwudaxvhqjvzivtssbcxuyhqtzprrrjbpbkmdqpenyqymljgspvgmbhuedputctejgleqezzlzwxozsdyuubwfumfuprljcpuhdgyrdimmqqcomlnvshbttcpwmpoyxenqtksikxyevyownbmhnvqnagtoilophhsbezpfkuaxjuqsaqnjqtbrlzbbznifcnpimjzwcosiycvjtrxtprerzlhmuotxsfjrekfgkvrjxfeysvrgdcqxwvyubfzgzzgstnpxcngrwawvnnhkmuyibxwsikittiwoqojkaflteidovmmmjsjotfltluzkhmvdyxanrqxiuvjebicjpzcxwkzjkspkeyjoclzflbnqzfmlfdxotsjezvphspuojkljbxqrgtgfflhxhhvnnprnxpyvhjyyeucqfpntzjsyecttyjbmctlkspwcpvhvubzsinqwxlvnexuihhbpoxxvdnucgpcohhllrvdcunsmyfltouoxntojsljuriegjkbwglpkzzwhjzxfwdkjvxnsygjfzgqvfsooiernpdnbshyfxbudfqxgxtkwjaasvhjvtiwqdjhmerqzgwzovveizhyldymvqtirwnoskwrph\ncbrwvcrlntpcuhcrdkohhucqdpxrclwcphsfqkfnkwltdpzcceszvvwspuiswvoidjlibydawtadmptqwrofoeuwinwtgqabkudydepdtzultbzhpnnmtdixxzhrgxahvckuuzadcqrvwegxinhrvfsyffneubyblaxknyxyyihhxxglkoljhlhxmxhfqulotscxqhtuitfvzugsyrzueonkhfalidbqqabdznilnwahfqxjajyyyjynxmratvzkzwgfsnvstdqvcctfppyvstgjcwhfsakplvnhwuewllnaukqdernjvgzyeyqbewzgiwdjerwrwlosbhscbbtmznqbqoxcczqjtddfxwfctwqxpvxyxidcsrewjzmpqtaeomblunnilhavxwyhlafyogrbcimbliewpjhknrvtiiurctgbenzwtlimsnjbqimfazwsqchzpcyvtpckgchvuwfpbmxdywskwwyonsjblwixqhnkubekbuaxyiulxokjhdfknwhvfgilwolcvlwiucslqvpgpxhfiltlvyzzlixkdbtfjnogrnjsdpgvgvdmbaoaikjgnrwzvcabrvxjcknsdckajpqrbjfturlmxdynargwmezlygsvptwffhddfaunplplmnksviwrdiokunnlkiehtrfsqgqaspbhaiqhwxehvlinsuzkfocmsupuonubteigajuwozjpgydaehcukjtofdxjfhzlpzskofnlzqbtqhgjtvhtxukgfjdbfdkdockrpimjnnfuksqfrvpdbhtkgfenoezfzjjzhoacnvdupagitnshsfkbyootfavafyfnmtpcivolgwdbjsygvraxpnjplhigzhmfpotlspdsjlxjupalrqmnwjxkaujorygemdojcdoetiamskzgmhdhpknswsnwzqivzfcjexylfbytcdqxjpqqkxwjcrdkajdvjahwsfvcdijthqjbzhjaipqtpsdbkeowbhhjhbpfqaqklqktirxeciyayrazsqadrgdggovgzhgjfepzwhfiqcxottwtjnzpvtqhhiamwgrpnedxbocbrjdpboezwxmadefvoxlalyszqupctgsofrbtkfocporogypkgetgptzbslusoojxxnhivmehxhvnrxchoagvauirlvbqhdvcdmkdhdsmdldpshlqxvwusruikdtvflnnrdawabcznwymmrdvcgrrtowbmxqxirdlntwyruagtinlnjgnzbbzvdfrmujzyhrxcdzciyhmrvzyfotsofvafollscbydtbdefgtbinheruxqlggzejwolpdyzrrkhstwtdvbycgvghftsmkrjfcjxsrbvmsgiqdpubvgtasvhlxpxfodeinqologxfmrkmxjwoutcagqfjtgypfiulzjwpmycadmugixacuvghmyvpxrpziwvboqcvealrwpmtcptmqbhizornlywulcspqqflwbnorsiqpcqigulupnxhddrgqpwsopzlmazzqjcvmpwkrftzutzewefpjpglfattvllnumhffrxsdgzqnuvoujjlotlhphpicutiawqsrealchhtnghpxqlngkgqlxjnfijsmafxnlrnnivdsfvxknmadwjtsnideizhetsyhvcnvzhjifaoiecuascgnnwhoegkvrrluhpozgdpgvocmuhczllrokefjiepxzjdkiumkizvguixjutrrxjquzihhshgugpixzmbvgwbinqubsiopqjvzjxbilrxkkyxweejvrlpwnpkuhpthlkqyetaavnzbuofamwkklxrhwknigrwhupiyodbaftwcgbbmtesbqlpzcxmhvvpcucygnoqmhbcsrmysmyupzccfgkilfhnfqbscmipoqvpqfvuhkoxmhecahsfurecspdunddguvevwheogueexbhvfscwyaektwsjwjlwsehwsitfpzwvncvrpopxkgljgayxjsfayefxutenkgrazuylsuqyshgyjgfgnlpngpqrgykjfmurjdyvfvljhwwiwmdobipmkqmrfopzdjmhbbchslucqclwmiqolbflklcrwsthsfnmcwywutdeahmrjypuhdhkpdecndnbzifjrigadgzvubgljdmzkchxebpaguvwtnfxraipxbislfalgcyfhabnjoaoynsvmnusdtisrabdqggqccbinskktpcjuduceoopymbkpececwvvdvgnwlgrvfjqkodnyutdazikqrxiirmtoflduwqhejwjudtbdyuwuxahteiitejidkhypwkvgxubzegrylbdsnpepkaiffwwtooftdclejzlvrcomjeckbbxlwnydqleyolaryakwpzieugsbuhvsybeauiuyxbpmbxwykstoaqqjtrlxdxkvlsdknyqabrrixqgvsxrsjfbihtiubybeobwvhinohdosowozwhfcntpkyoyvrbmmsllkdykksnneecfliorxywfcarztvdgukfyyjzragiahztdyuhirojwvaagprejjryrzzolqiknkplwjwlxuwoborbyxylznxfdanofxrkcbzwrskfmahdienfaowplgsgcabbmsbfzvpooaivtrexsqicfayghnjsxflgoxzttnytmoknrdcsftwntgpztqauyaetmfhgldpgyvgowzmknutarvqnlcxhztutzpkfnijwevhgfydxzcsmufrihrinxifzpzcdfgujxewdzntniptpjirlreqzltukngmiguxtukippyxaaipmxkrpsiujbgcjxzzreumcbfkyduwuzxccjqlunkjvrijmakltfrdtlqmeewxpybipqpuvgrdmimlwloknqodfjyrlqblddoeqhcaigmhbirvldomfvmxrpmoyiinvpyagtipchkthprtkkqkabdinwefsbvtrjzqsaylijtuoafmhzlsbwcpsmdpdtwtvipoaebpbflnlmacxfskhsealdvaaqujundcwvodraiwwnwsdfbjczhjawieqkhzjpicgbgoulakttcpbhqvvpgwboahapppjjonmxxwswuzihdxvqkkuhbuititzrxkkmresaygcjulabqrbjfggnrbqwvhkiuzuqkkeuncmgzmjynpyafbocrkfljlzzpkovhaijdvmxrwxbbcjxbrbmafervctgfsdavkzfgzsphhrrkszgwqipuvrwurwadtuazqnrmrfydjjobuzuqfsnoskntgrufjvqxqzotsavibginovdmpqtbmlarvvstznmdrdxkghdxiztxigwtygqyesfusgqddbinciqsuwqobbmncauiueaojlgyuvekcxnsbrtcmfovharvnvmcwzyqhxcwwthpfkwyejpmrntalwwrbxltqlmrudzjepesxjxynyvdvuqhhfdaoxztoxtuvvchvxzfacnvkyzjocgzdfclidzhqvqeolovzufqbayaytoxzlnfzjbwzdiqqdjxottfeoksxagntwkkydanzwcvuzqnjpffxfzxjoiiztthmggnuenalxjoodryldnuwtxfvoeaqtfdffajytrbobnymnfgaxsgauifwqnkdpqqxklvmfumpfuvsmghhfkfdudjbjhvvfpltrzihknzmqijpoweuopjqbzkqkdgircqkfzlnctcehnadhtaizytdjpjeycmikhfxdfgswecoqbccuqsudmamrvmggbgexdgagpozdgcfzrhpxizezjtvshazhcwmlhlnaufebfyxazaoeamygvzwhfshgsdxpuktggmheoaciomaiefskjhwkvxrezlndyjmzzbpaphzdbnsyzuxawqpzfqdvagwsaxfzwbjveawzquxmfzpnafyrvazjhgpytkihtjeydmcainhimtfsyncmpiuimrrzjjxdqtyjgfwbqebyluhvypdbbdhxcdcqqoaqwyerkndfsvpbvzmwdsaszhudtncwqhbhwcyipqonmxeqmbjbahitggdnoqcyoptrvscsyndodlomigoaovrdfhheldneajcwrlsalozxowwlckvhiqbrsrblbgncdyllzsvxrmknwqjmvncuyigxtimtispbpzqzpfowjfckgmdkocgmjaiytvzabkdfrsyfcmcabnqjnxcfcdpofwgovybocicdijpalxeerqtgmowcgqspcvzvznugivljcsdtascdnqmsrejuoknjaqzbvlwjerfurkxzpignhduhgxhzqvcpmkvhbgdwkrgkfhhntrtmrhobyavhdocpbefpytcrwpdjgjohupxfjlfpjxmkomtapmcdzpmghnxumevfsvactogciuigxxixilkntywmgbfewunnbaekrnjmsdesygibgrgeovoiivgttetqmejwiqyesornxxjvmyqreryzszuzaqvpxanytuzfcmxxfgbztlvwgdsjogawoerltjqpdsxwrjcuptdhxeojmubeacxemdjesdipdvooksgkqytxmhyyvvzxrzqacsmaqdwgilrkxzmlgdxnhwjhnscgvgjdgnxnbpakjxfxevafftpcvmfqaapwpowugfymbxkivqjzbmumqbsjnypbdczbomtcoqppfdprgsgdhnqbfjhqrxbmfkcusezbjyeedqbuxsjyqrloxmrzoippoltbpbwmxgwczavuruxedenrvkdmgopnpqkmejmcpchyzknbwdcrcmvvbgjhhbuxrtuqeqxmoqgukyqznvhjxpqkgioqgpnuqexbcjkgsupocjtiwcutypzxmmfulkkztepdjovduijfxitvlnqaqgvekkabtogvpbyrkgyowckxmopevotzgljtxwfnfqxquhzcnqxxcuxopjhzmmjefttpwhroawxxwvgvlxjlfqgbgzsmfiaulzbuhrohiyemfybqsoumbkyusgphqftltyvxjvhxaffexupiecelinrdkotwlpspemelzbfyrqgevkdkynbwbqmahgrfkjlpvsikuopakwdwidhjecemvviuqugjvixshotnbchyoicrtteuujagnfuiimjnkjjpohrxzwdiywonjsgipvdhkwxxttxzkuhrozbtwdwwgsgsxghyvpytcvrhccqjniehlmjttderttgrvvzijgbjzajzxpnmolzdfrvzxoabhvokzuxyrvbnneeswkngvmbtftvtouaxwkrhlyuajsjnyraonalmpqgffeyhqxemdiagenhfyufdivhwxvvtrwuxghjqekynwykejpepzbtqyufxoyhgksjaztbublcbsxzscalidxgpahtnworpmzazhzpnclctisoomdwfitpeppptzdwfagebiczjpsztexuaibjprqxtebdbgnbzkidpodisbzpclxeygoehsvrnuvrulxbzxktmtoadroaklmrtqkkkhcxeboeicdbhsnbzxoavimnvmbrjueelkykzsvubfgbkgymaagpyxwebqhwefomzgksiubrdpvwomtermtxnmnjuyfglqkmyzfhwwrpjmepppdohhyvwixjmpkwsgcnxejgjagresdupqyuqooeeylydofjvldddlspjabzcsunhoyramrrsyujvwduojaehxzmjepxywliuekvkelcugxfoguhlbdylbwyakdokwsdrooixocdessgtpnfmomvujxbzlivxnlcctuqpogifjttihjmjmdwsshldigflzgtuinuvenvzaxdkfaqknwprxdqphisskxedfzchjziuydckocdtrbfdukbocztelhpbqjzwmfeqstvmdksffqjueicedllgdwixoljdgeilywgglpqroxrnsrapnwipsxctkyyiopuzrtsnpkcwnnxyfjjthqumurzbcytpvrkpppqcohsdkyrjdyalqzxpftxeihzdanqamqlshkhlzeittqwbguzxqgezmbquhzinokenbxhzawlcnfiyuwzlqcgnkwiqeeyhwtzdzdiaxbwfsaajyskuccahlayvaqejhanbacynbqewmctkyyoksosebhwfrrybpyumbjudysvklhqnuisuekqplueycahcdbzyubvjsyrwglqvsqhsuamwlyijqlgrmjxmvogkzsdoionslrhgkatditrxwsrrwgvfccgymvwkogavswldstkyyejqypaahmoicrletyanvvxwivggfjcmzmjlnjymtyaglrlpdbijhqcekivlzlnnissskpmdbqlrxzldohcoyffubdmmhdtzpvzdcuvsjyioaqpdhmjhlannnnabizcqjugcfjuhvnuibsnjcsgesqzqhgawozymmotcpgfmbfxqmqtqzkydzzatphxvpakkkapdotpkqfrmkzkqkjslpdstsljvtsqdtaaxdijkqkzxuramgeaqrbrpctbpcrcbzzsqbmbrnfmmbgoflsxdlcpnuxtfgdxnbrrvqfhjpyqkdvdgkqwpycwauodewecgabyqvknhiwbkoyrsgfjpgyxlkmlenaocbxheuhqdflugtnxvgliurcczzwfyznvwgernivniqaneggiyoqjidvwpijyhspredvtxhpatueaoezioeirkxiveqgnwrrzchddmellgrjauxlerhklifgdxwjlrkvsodmdbthgjsnjmvejmyvqmuddcgaezsyxwjhqeyzhfwmmbalansllziqzpmgbawizebxnwraoxidnzqwndkxmxhtfgaebmemgyhflexybczbxjevvkvckygcvuggebusqlzfirgjaparchbcjmctqcwbqzrumfrthmqashekvdhmfrhdtqrxraqazxkitvslugfjwynfxaqiifuaroumricvjjczkcvtcdmwmoiqonkoqunnhxsucsmpagmoxjatkmsmtowyyktpmozgcrczushcfrspenpqgerygkpyyikvinlpzvrzyjgqyivikztzisksjfemuxrdzwzccyxwkpopgewflhbivfmtruvksdvsysikdlixxsvvgsjwpverruajpncwymjjensshduunrqrvvxbbylonttnksljjidgudwkjxqwjzizulvxhoofctimchdjqcpmyyivzbdnigklvgwizkjfzvfyiarypshejcmgaaqplxfzhhthrwoaechecsevumwhksdjoynmwhsrhkjyuxmxzvhodpsluadowhpshqhsyncxhmppzlscvondqupgzpksemzatsoehvgnrahrmpaazjdofxjfjvlohxzjlzkdgqcgbfcljcuzamghsnedzdthsmgkurvpslmdnuzwficomyfczsmeqmslodbnwdvyszcmrvygrluxpjvcwcbkrnepsuwqzogbwxyjiobommgtibptwujxaknrugegjpmaoogqkuomuiicdhraxobzhaxqvyoylxsffnwionjafboctcvdjwlsslkrtzneqlhaenefkxixbsmwimqqvknfkuukwboemmtmsduihuuzjaggxjyjdctiyevpgnvmculagluaqaomvxooendhraacjshpooqkutyrkrjjsjrbpvulfsatcptlhmtgxlmxmwvcgorbsslizrfgikfxmgyphcfztplofwqctzjhgihmjskbfzbpcyejaemdjdndhqhwwlttmfochtyffgfngnxvflshphpxaystgfcewfbvqjffyqqjmvxafnxhgoaeyawwcrixtaywphxbsvvmttubberovhbebwaavqxfbuxmhkrxtoatzozdmbatrxxdlrppckydtxblizcnuovufnfcsazmgsxskrwyswbaotelyhhepgthqzghuxqevhmoavhtmomhpqcthqzghkcrgupzkgogrjenytdkqhsdolievbemksckpfydoqfchiqpjejmwnchawurtirmezelqbprrruarteqrxapwnwvkmwmpecegisxjdfyiedatixayczmieienikclreduliibuxsgrggkjcmjjmslxbindkxzavbfeutvgpreuqidciljfyacaambwotwtctyzrjxrzaqohpxqtsgvjrhiszrajbcixqfyscnfschtiwcfoiyyybrlgfbiqazzuraeucunuydzekpgfjfueurwpnpsxbtnmjmonptqapiwjegynkiuxuxeckkvviyzktvfgefbsoltozmiemawdhermktllydxevoeglfvwlegjjkmsggvugofyfrwjkgxfxuidymeybklruecythrnzfwdckyawtoiqkffmddcjupnxgfvyvcsoxcpevabpfvbqjyofnvytbtgkotbwykwjkniyktabbitsrggcqmcwjocxcsrqwjgdwqckwhzlxbqyhwnfmuyixzburiiosogugeojzipgptdtnhuljjlgylpgewxqnpesjlpvswottflwesjtdxmtouamrajtjdikkbjelojtxgqcnufoahjcyufnwwtrwutoakwzfhnbwjiutpgicfexiejjtsatmaswocwxytpqwqvoecfjqldtryvrifhfxmdzkvwfuhccvbbolwcwocqjhgdsbfajzgrtnglhdfuhfsvyncpxcahjdfhssnoxdybmvipfutepqtdoqxplaqwkokkwpfisovprcmnahfcvpjrvaopkyajidpsoktrdordbochsmdskyzhfpknirwiyccgyfkmcnukwyzlaikfajbzycsketjpdjqnnlfwbrumkvvfvmlbnyobfshflfizkjgnqrfdvbqhsnujtsasmirmrajbgcioakfpibptsbwfgvegdqpufrjheiztvajeigtklcpgkgwvpguyxlldsckapqgvvaysuilynrlliriilupaucuijlfgpcopwkobxabfwvcwmzfdhgwzxvhxawcwpritjleubtmwvddvdpashesfhixbcrjhgvaqigwjytchofaftleuyskcntctdirqpdycgqnnzfsxcedoixniiojqmvabxvlgacnkpbfvjtvygxxyakacuxyapnsknxkzxnzqxxvjouooglazmgxhtnfindclykbwqfnjwwmtihqxgyzunobkebepailnwagxyicfkqpmirekqlheeiknqbwkbdyuwnwqcslxafxdrnbtdwvxnvfgdcufdmgpqxsjkceqpqctahaaqkkzonzdsdhniirrkzhklgnllvsizukyrfhylxvtlffxsyqzjopcltbmepmtkunavjwskzyppykxgkoazaugrggwogkmksezupoheeqhlzjasvawzfawqkcepuvibxlgiwmvetlukputsvbvcesuswhzfhnsdjzpwzuubngsmbgxhtgfwsdunofjawpwrznxswinntacerggjafcyfawypwhwupdwedsebrbrikfwcooxzlpnqiortmpltmaoeaamcoxuoqxdzczuwrfrwfkaaalzsqniexynhhktdhxvzesnvwzmtvlshehbnckryrtsdfgqwfdjvlbhaxwkhsyefvgaktflqowccxusoubrxhyxgyjafciistmdtlwbtapesihcpfwvrnzfpasjxsqbvbywvovttigbwxqsxuzkfahyprnqdimphbcchvuqwuqdwkmdguskqynupnpgftnxfzxhjmqjgsoqmchiqpercczmzjyvrbwjjwduomoktelsoowhbxyjtfloqxcujfyvhajjnlzekghosfpfdghvwgilumcdthfyospexlhwvgbcpuykgimxtanmxfpqlzmmrvevpqhrvowqrfedosdyoncnouidfyeucqubkrsleytgvzefuntemksffbjhoszqsloegilbthycpjejfkuhyzwbddysuxxljthyxmnctldvgomdsgxtdyboytkidtyxzhwzsivjthkrmlvppstfjrsnjakmkzwmgowghvyvohodimimdfmgqhgnpupdgesrkwmqguqvupzwpowxljqkdgpxggftwcelrqprjpsrnmkgixvnlhpksmhxuchrcewcudhgueeybhfosobyurwbwymrmnxdevduqewlahhkzmolxfzmgmhlucmshwgvreljxxlxpkpjpwcxqgmkvvxpxgkznkzecrgjegcutjjgryuojgsdnyxouynbqhdwsnjmsczwmmqchagvsriskzlhhvzqwgmshdhxjgkjfpeuwcgejejnnqaovvvfgbejwnukiaykvfxpfntraatzumycjzyptovlkjkgfzborlrddmhdmihdpudgmqtowvthkluuwuouvtynqhuhntbuuvuguuxqgkxzibaimhzzykaqyozrnklazcjzjontqlpmjzbywbtsyyyjfbwkvkvhxgiqpwlhbtuklqapernrnnmpxrzpyuvuaslhtapsbmvzurpxkmbzhyzsvpejifijnplfibquocslmfgccpjsfjmwdnnflojbaxgpogaydnxwslrktykywtxenxywsxsoixanstfhymypdgnmrlunwhtuocluwxcueesfwtfejehflwnoirydrcjbqxaigyemplggcndcolzelhsizddmgwqecrvhsoxvoyetkgdawndezfagiinbfjuifoekhnrhectgtkbdwugyfrgvcgqkaqmudeyhrqtvaijfypsdrgokiaixmaxkeqcqpajvblccbyviacjgnkcmhannezwtsraywsheimiqxinmmrvtvyoxdadjamttzhwkeozxifwqowdvlwnnvsigqwbwrofnznuglqbovxdqtobrqexyibhgrzgokwkvdgfdaohlwsjgwzbpvjuszqpzpybpnjwugqqcsdwgpltrogwiujpnktlzlcewalpyojldzwvcvoohouispodowmpbardttwgotfedexiovyzhpzbtbsjdrsjnjtmjgxkxmhtdylnkdjpanstpkvptepkhkugcgwcxjdbqecubzbqguavrltdbfwayttvqaegnkmxhhgvtbvaqvcjwkotyhffinywbgqnpispxnyqjvyisclmiglwxqqfqtazrzvkebhpwotjjtpdtpviwmszdniivmmbuqmygmtvmpnquenxpqoobersuzbfzyyrzthqmlyhlgnptqboibtbgiregwjpoywerdkhemrfpmtaxepivazosjgefvwylmcxpxechwlvxpvsencconrgubqsusdovqcfehzrzobapfnhnqdgwikmqbwgzdwtpoolbigwgmbwghvzdapugxynkxiasocervjazxczdnybyhdnyzubxxqtfzktoatmwkghohbrlfghtlcgayjxvcsinogleeoydilslpwrllvlckxcdxjarsbffmytqtlvxhursclmyiedntzjxifvimrjfglvthwzigwythtoczoewvgjhlhtsconursvbsvtykyovjirhbmkwsozvxpkcpbkwrdswytehcbntfoyrssltoufxondxjvqbhignjxnbmuaosawubtvohbgvjrgkqydogdqimfjykxexnbetoduvodbdjeyomqwlwgguqoiijmzgsdmwiajgqhakcacfxxuiguslhckdmudszkphsaievmnyglbrqlaapfonpsqjavchvfogcouebtqxsfysbxxlrdqarujpntkjthuivlzdisdsrlrumwozghrrzbonophonyiqxvlnthedtudklauhdjmgrbcssuvgdbdqqdzplynnrbxwywublzlfzfpethgzcklskivthgomdcumdzkzlefpjxwzkvzamjitmquvtedpfxbgqujebirwrbynbrzuxmwpvzjhbdyscseijfaudbbiunvsusithoskpvokmdfcejhtfysjdjmzvsfatpytzwrihvyhkccwciiwiopzcqhlhxjkfreveabynohozyeikghdqzkrxfthfybhedneuagwfuaauuazhuvqzdoyadwmxtfmbsphdypbfxgnblsebwnbwyirgostevveldgztdcarjororsttmsimbsrttvqbqcqoozkhpuerkyjhamyznimwcllhihwagfhcrztewkogoqbaqnsafwnnbxlbzpqiujvzgvofhrieslvppyfqkpgrjmnqedlsqomqyecsfmzlbosjbriwvmvethcfgszyapylaowzclmjijdmkawkddcghpbogzwmhnkchyamplthsecmbmwzjaigholrogohduveafatxuklbbagwobreijoktlueflzfogrqlqmeqwyzvsarjayqvromwmvbkfkfcupcynkiuleauamvfdmmlsuikykkmpwanlmxciaifvxlquqwpxhvvsfniuujwhcvntslqzkdopksefzowebmbwlhahejrpediigmvecbsrttaypozofbbhpacbmwbxiyzuhaxcuhkzecskqmpukylmnpvulwpleitkhvmzsbumqpfeylduklzacbyrrqlgijtnqcorpifcqeaeslharrekwpkgthfdpeagvvexpguycmnuhfwljaslyxybmxuagaubnmsazeqmkrqqrnfdonkbeeuxmhlpxvardesjxshnfxmnwoxgqfwzyhxnamsphqrpqjxavvukfnxpndtlvkzjxdwixbbreukdwhcnozlccaveoywsyrkuaklqiztvukhtrcsgagtuubjmzomhpfoknpyvfckhtdcduwcjlgkfwodxmonwkzhupdmsvgxoqubdegfxfidufwvifnskyikubbdpyifecspozkgvsygeymquzxolkwqiethzuqsswnajezyahtpqizihymcgpiomjeujfmqoxdnabopnqqvewvbbdafbkctqfvejxxkvotwcjriigffsxyutcqqrjytzjlzphohtaxrxvskpoqhjnqbbtlfwbajvscopzeidvtrmrfrzrhpeuvcwrkdgpqwrdzqybjhbkhpviiefpadeevbdjdmayikbwbyyehxwkseztsohwrmemybunoosagbnwgfrozkhpreydxoxrcikjrgsuxonjuimkfgalwtdbpufuvqfiwuhpdmnactiumvatxkobcaumllweenjgvvhjaiqhoyrslmcjudyrpguxnnxqyhvaikkticvgkfsowwpirdzhifgahdesujtizqpvqvagxlevwgyiqgfvfsiindqlcbkbkkijrpwbwbqpztcrutktjvjkubqizgvfcpycatgsntxzhccprnakbninfyncmktizgbpaqhhvnyjfeyxbovomxbsrlozdwrttgvbzvcqacqulihumnqwxktrupupgneramxwzteefhjpbsubnyrbepvcfjkiafwdvjyfxvewatwjfbokfnwaeojxnnjdhwwzgdxgkkolhuznosolgpejionksvaibvfufswpbcotuloguqeievrhwqiopgahtkhxcgwvblsdgllvymfedmzxufcwcgzkvldgfdqbaqzdqhdrrcpfxijyfxrnefexafoesfwkmewfcrzptfwvryvhoksozvcwhejhbpbbwysyeiqjmbskleglyjfxepcvdsnovchuexckcrtqxumvbalqetomrqbwfzwjayigsrrsrafgousqtnoadoiyoketbbmnphzyjfftdgcnljudbwygkfqcdshrkwawgjhrclpmgzifeigzperytvkvoaaplzzlsmmjntjhtkqocnhvolqnfyjawkpbdtyupvzqiqczxghadvfaznwxdkittcrsnvftmfxrawwolnbmgdrhhjemyyzabzrrhcariiicrxakybakifnpmlivycjwjkkncbavsxpmrapjxpyqnmhvrdnolqtmuvyhqilgemkycvhjffwrbtvhwfroobtyjodrkqibqlwsfshhtxpzbihtaolezuymdlufojdaxrpyycapcdizcwmpeialihqsfwcqaxmhztuszgezetkrevhwjztuinyqmfvfcqdzcaxgrjmvoxymwwwykigwotokvvvitpiysljjghpfgbpcqsewuetiwwfvtynwdmzmviccnjpzpfknrdpbupclsmpdvcwpztiyghoborhrjamxwcwcnpfyzaopovqybyqnujflwhoxgrsjmtibbesxwybwhhcprteerjkgjsyhsmsnggzszqkquotktqqikbaohzbpmdnjhasujznevyansafmbtfkhdvxwephlvjsfjoklwrmhpsimchlvqooaqcecpuhbwuzzdfxxnceirrgdmexdoanonokpehplmhodrhthpuclqkeewjhcdmmdkmakpmhtjtmhvzboonaezlidddhpccwqvdquwg"

//processData(case15) // nao
processData(case15) // nao

