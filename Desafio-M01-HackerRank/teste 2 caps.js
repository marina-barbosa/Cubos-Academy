function processData(input) {
    const lines = input.split('\n');

    const senhaCorreta = lines[0];
    const palavraDigitada = lines[1];

    let indiceSenha = 0;

    for (let letra of palavraDigitada) {
        indiceSenha++;
    }

    if (indiceSenha === senhaCorreta.length) {
        return console.log("SIM");
    }

    return console.log("NAO");
}

let linhas = "cubos\ncuggbyos"  //SIM

processData(linhas)










const case15 = "cdwwhqljmlhrufgreodbsunemqcctulhuiipismznreddvijitduqegnjubcibmnurywskfxrfhjqqtkihxjxzahwczkwjqzzxntbtlhjphccgxgbmnnxtdlizzxzcuhkcvvklnvgdusnufcanavpmteqfihxswymtvvxtjayhapjtmeszakdbjsmecgpmcoyunnjdcjsdjqgvtleaoeniyyjkdwhnuzgfkzqhfhjluianxtilrfkkznmaywzkmlflxwoggwgoxftkwcpmzpvvdomxxughnbyyesjeawrhhmwsrrivijwnmfgrpisgtfaqewumpsmuwncfsgsjtdrcvjzackxueelksyhtrrqfdwaqjjfqrjlzuosvtwudaxvhqjvzivtssbcxuyhqtzprrrjbpbkmdqpenyqymljgspvgmbhuedputctejgleqezzlzwxozsdyuubwfumfuprljcpuhdgyrdimmqqcomlnvshbttcpwmpoyxenqtksikxyevyownbmhnvqnagtoilophhsbezpfkuaxjuqsaqnjqtbrlzbbznifcnpimjzwcosiycvjtrxtprerzlhmuotxsfjrekfgkvrjxfeysvrgdcqxwvyubfzgzzgstnpxcngrwawvnnhkmuyibxwsikittiwoqojkaflteidovmmmjsjotfltluzkhmvdyxanrqxiuvjebicjpzcxwkzjkspkeyjoclzflbnqzfmlfdxotsjezvphspuojkljbxqrgtgfflhxhhvnnprnxpyvhjyyeucqfpntzjsyecttyjbmctlkspwcpvhvubzsinqwxlvnexuihhbpoxxvdnucgpcohhllrvdcunsmyfltouoxntojsljuriegjkbwglpkzzwhjzxfwdkjvxnsygjfzgqvfsooiernpdnbshyfxbudfqxgxtkwjaasvhjvtiwqdjhmerqzgwzovveizhyldymvqtirwnoskwrph\ncbrwvcrlntpcuhcrdkohhucqdpxrclwcphsfqkfnkwltdpzcceszvvwspuiswvoidjlibydawtadmptqwrofoeuwinwtgqabkudydepdtzultbzhpnnmtdixxzhrgxahvckuuzadcqrvwegxinhrvfsyffneubyblaxknyxyyihhxxglkoljhlhxmxhfqulotscxqhtuitfvzugsyrzueonkhfalidbqqabdznilnwahfqxjajyyyjynxmratvzkzwgfsnvstdqvcctfppyvstgjcwhfsakplvnhwuewllnaukqdernjvgzyeyqbewzgiwdjerwrwlosbhscbbtmznqbqoxcczqjtddfxwfctwqxpvxyxidcsrewjzmpqtaeomblunnilhavxwyhlafyogrbcimbliewpjhknrvtiiurctgbenzwtlimsnjbqimfazwsqchzpcyvtpckgchvuwfpbmxdywskwwyonsjblwixqhnkubekbuaxyiulxokjhdfknwhvfgilwolcvlwiucslqvpgpxhfiltlvyzzlixkdbtfjnogrnjsdpgvgvdmbaoaikjgnrwzvcabrvxjcknsdckajpqrbjfturlmxdynargwmezlygsvptwffhddfaunplplmnksviwrdiokunnlkiehtrfsqgqaspbhaiqhwxehvlinsuzkfocmsupuonubteigajuwozjpgydaehcukjtofdxjfhzlpzskofnlzqbtqhgjtvhtxukgfjdbfdkdockrpimjnnfuksqfrvpdbhtkgfenoezfzjjzhoacnvdupagitnshsfkbyootfavafyfnmtpcivolgwdbjsygvraxpnjplhigzhmfpotlspdsjlxjupalrqmnwjxkaujorygemdojcdoetiamskzgmhdhpknswsnwzqivzfcjexylfbytcdqxjpqqkxwjcrdkajdvjahwsfvcdijthqjbzhjaipqtpsdbkeowbhhjhbpfqaqklqktirxeciyayrazsqadrgdggovgzhgjfepzwhfiqcxottwtjnzpvtqhhiamwgrpnedxbocbrjdpboezwxmadefvoxlalyszqupctgsofrbtkfocporogypkgetgptzbslusoojxxnhivmehxhvnrxchoagvauirlvbqhdvcdmkdhdsmdldpshlqxvwusruikdtvflnnrdawabcznwymmrdvcgrrtowbmxqxirdlntwyruagtinlnjgnzbbzvdfrmujzyhrxcdzciyhmrvzyfotsofvafollscbydtbdefgtbinheruxqlggzejwolpdyzrrkhstwtdvbycgvghftsmkrjfcjxsrbvmsgiqdpubvgtasvhlxpxfodeinqologxfmrkmxjwoutcagqfjtgypfiulzjwpmycadmugixacuvghmyvpxrpziwvboqcvealrwpmtcptmqbhizornlywulcspqqflwbnorsiqpcqigulupnxhddrgqpwsopzlmazzqjcvmpwkrftzutzewefpjpglfattvllnumhffrxsdgzqnuvoujjlotlhphpicutiawqsrealchhtnghpxqlngkgqlxjnfijsmafxnlrnnivdsfvxknmadwjtsnideizhetsyhvcnvzhjifaoiecuascgnnwhoegkvrrluhpozgdpgvocmuhczllrokefjiepxzjdkiumkizvguixjutrrxjquzihhshgugpixzmbvgwbinqubsiopqjvzjxbilrxkkyxweejvrlpwnpkuhpthlkqyetaavnzbuofamwkklxrhwknigrwhupiyodbaftwcgbbmtesbqlpzcxmhvvpcucygnoqmhbcsrmysmyupzccfgkilfhnfqbscmipoqvpqfvuhkoxmhecahsfurecspdunddguvevwheogueexbhvfscwyaektwsjwjlwsehwsitfpzwvncvrpopxkgljgayxjsfayefxutenkgrazuylsuqyshgyjgfgnlpngpqrgykjfmurjdyvfvljhwwiwmdobipmkqmrfopzdjmhbbchslucqclwmiqolbflklcrwsthsfnmcwywutdeahmrjypuhdhkpdecndnbzifjrigadgzvubgljdmzkchxebpaguvwtnfxraipxbislfalgcyfhabnjoaoynsvmnusdtisrabdqggqccbinskktpcjuduceoopymbkpececwvvdvgnwlgrvfjqkodnyutdazikqrxiirmtoflduwqhejwjudtbdyuwuxahteiitejidkhypwkvgxubzegrylbdsnpepkaiffwwtooftdclejzlvrcomjeckbbxlwnydqleyolaryakwpzieugsbuhvsybeauiuyxbpmbxwykstoaqqjtrlxdxkvlsdknyqabrrixqgvsxrsjfbihtiubybeobwvhinohdosowozwhfcntpkyoyvrbmmsllkdykksnneecfliorxywfcarztvdgukfyyjzragiahztdyuhirojwvaagprejjryrzzolqiknkplwjwlxuwoborbyxylznxfdanofxrkcbzwrskfmahdienfaowplgsgcabbmsbfzvpooaivtrexsqicfayghnjsxflgoxzttnytmoknrdcsftwntgpztqauyaetmfhgldpgyvgowzmknutarvqnlcxhztutzpkfnijwevhgfydxzcsmufrihrinxifzpzcdfgujxewdzntniptpjirlreqzltukngmiguxtukippyxaaipmxkrpsiujbgcjxzzreumcbfkyduwuzxccjqlunkjvrijmakltfrdtlqmeewxpybipqpuvgrdmimlwloknqodfjyrlqblddoeqhcaigmhbirvldomfvmxrpmoyiinvpyagtipchkthprtkkqkabdinwefsbvtrjzqsaylijtuoafmhzlsbwcpsmdpdtwtvipoaebpbflnlmacxfskhsealdvaaqujundcwvodraiwwnwsdfbjczhjawieqkhzjpicgbgoulakttcpbhqvvpgwboahapppjjonmxxwswuzihdxvqkkuhbuititzrxkkmresaygcjulabqrbjfggnrbqwvhkiuzuqkkeuncmgzmjynpyafbocrkfljlzzpkovhaijdvmxrwxbbcjxbrbmafervctgfsdavkzfgzsphhrrkszgwqipuvrwurwadtuazqnrmrfydjjobuzuqfsnoskntgrufjvqxqzotsavibginovdmpqtbmlarvvstznmdrdxkghdxiztxigwtygqyesfusgqddbinciqsuwqobbmncauiueaojlgyuvekcxnsbrtcmfovharvnvmcwzyqhxcwwthpfkwyejpmrntalwwrbxltqlmrudzjepesxjxynyvdvuqhhfdaoxztoxtuvvchvxzfacnvkyzjocgzdfclidzhqvqeolovzufqbayaytoxzlnfzjbwzdiqqdjxottfeoksxagntwkkydanzwcvuzqnjpffxfzxjoiiztthmggnuenalxjoodryldnuwtxfvoeaqtfdffajytrbobnymnfgaxsgauifwqnkdpqqxklvmfumpfuvsmghhfkfdudjbjhvvfpltrzihknzmqijpoweuopjqbzkqkdgircqkfzlnctcehnadhtaizytdjpjeycmikhfxdfgswecoqbccuqsudmamrvmggbgexdgagpozdgcfzrhpxizezjtvshazhcwmlhlnaufebfyxazaoeamygvzwhfshgsdxpuktggmheoaciomaiefskjhwkvxrezlndyjmzzbpaphzdbnsyzuxawqpzfqdvagwsaxfzwbjveawzquxmfzpnafyrvazjhgpytkihtjeydmcainhimtfsyncmpiuimrrzjjxdqtyjgfwbqebyluhvypdbbdhxcdcqqoaqwyerkndfsvpbvzmwdsaszhudtncwqhbhwcyipqonmxeqmbjbahitggdnoqcyoptrvscsyndodlomigoaovrdfhheldneajcwrlsalozxowwlckvhiqbrsrblbgncdyllzsvxrmknwqjmvncuyigxtimtispbpzqzpfowjfckgmdkocgmjaiytvzabkdfrsyfcmcabnqjnxcfcdpofwgovybocicdijpalxeerqtgmowcgqspcvzvznugivljcsdtascdnqmsrejuoknjaqzbvlwjerfurkxzpignhduhgxhzqvcpmkvhbgdwkrgkfhhntrtmrhobyavhdocpbefpytcrwpdjgjohupxfjlfpjxmkomtapmcdzpmghnxumevfsvactogciuigxxixilkntywmgbfewunnbaekrnjmsdesygibgrgeovoiivgttetqmejwiqyesornxxjvmyqreryzszuzaqvpxanytuzfcmxxfgbztlvwgdsjogawoerltjqpdsxwrjcuptdhxeojmubeacxemdjesdipdvooksgkqytxmhyyvvzxrzqacsmaqdwgilrkxzmlgdxnhwjhnscgvgjdgnxnbpakjxfxevafftpcvmfqaapwpowugfymbxkivqjzbmumqbsjnypbdczbomtcoqppfdprgsgdhnqbfjhqrxbmfkcusezbjyeedqbuxsjyqrloxmrzoippoltbpbwmxgwczavuruxedenrvkdmgopnpqkmejmcpchyzknbwdcrcmvvbgjhhbuxrtuqeqxmoqgukyqznvhjxpqkgioqgpnuqexbcjkgsupocjtiwcutypzxmmfulkkztepdjovduijfxitvlnqaqgvekkabtogvpbyrkgyowckxmopevotzgljtxwfnfqxquhzcnqxxcuxopjhzmmjefttpwhroawxxwvgvlxjlfqgbgzsmfiaulzbuhrohiyemfybqsoumbkyusgphqftltyvxjvhxaffexupiecelinrdkotwlpspemelzbfyrqgevkdkynbwbqmahgrfkjlpvsikuopakwdwidhjecemvviuqugjvixshotnbchyoicrtteuujagnfuiimjnkjjpohrxzwdiywonjsgipvdhkwxxttxzkuhrozbtwdwwgsgsxghyvpytcvrhccqjniehlmjttderttgrvvzijgbjzajzxpnmolzdfrvzxoabhvokzuxyrvbnneeswkngvmbtftvtouaxwkrhlyuajsjnyraonalmpqgffeyhqxemdiagenhfyufdivhwxvvtrwuxghjqekynwykejpepzbtqyufxoyhgksjaztbublcbsxzscalidxgpahtnworpmzazhzpnclctisoomdwfitpeppptzdwfagebiczjpsztexuaibjprqxtebdbgnbzkidpodisbzpclxeygoehsvrnuvrulxbzxktmtoadroaklmrtqkkkhcxeboeicdbhsnbzxoavimnvmbrjueelkykzsvubfgbkgymaagpyxwebqhwefomzgksiubrdpvwomtermtxnmnjuyfglqkmyzfhwwrpjmepppdohhyvwixjmpkwsgcnxejgjagresdupqyuqooeeylydofjvldddlspjabzcsunhoyramrrsyujvwduojaehxzmjepxywliuekvkelcugxfoguhlbdylbwyakdokwsdrooixocdessgtpnfmomvujxbzlivxnlcctuqpogifjttihjmjmdwsshldigflzgtuinuvenvzaxdkfaqknwprxdqphisskxedfzchjziuydckocdtrbfdukbocztelhpbqjzwmfeqstvmdksffqjueicedllgdwixoljdgeilywgglpqroxrnsrapnwipsxctkyyiopuzrtsnpkcwnnxyfjjthqumurzbcytpvrkpppqcohsdkyrjdyalqzxpftxeihzdanqamqlshkhlzeittqwbguzxqgezmbquhzinokenbxhzawlcnfiyuwzlqcgnkwiqeeyhwtzdzdiaxbwfsaajyskuccahlayvaqejhanbacynbqewmctkyyoksosebhwfrrybpyumbjudysvklhqnuisuekqplueycahcdbzyubvjsyrwglqvsqhsuamwlyijqlgrmjxmvogkzsdoionslrhgkatditrxwsrrwgvfccgymvwkogavswldstkyyejqypaahmoicrletyanvvxwivggfjcmzmjlnjymtyaglrlpdbijhqcekivlzlnnissskpmdbqlrxzldohcoyffubdmmhdtzpvzdcuvsjyioaqpdhmjhlannnnabizcqjugcfjuhvnuibsnjcsgesqzqhgawozymmotcpgfmbfxqmqtqzkydzzatphxvpakkkapdotpkqfrmkzkqkjslpdstsljvtsqdtaaxdijkqkzxuramgeaqrbrpctbpcrcbzzsqbmbrnfmmbgoflsxdlcpnuxtfgdxnbrrvqfhjpyqkdvdgkqwpycwauodewecgabyqvknhiwbkoyrsgfjpgyxlkmlenaocbxheuhqdflugtnxvgliurcczzwfyznvwgernivniqaneggiyoqjidvwpijyhspredvtxhpatueaoezioeirkxiveqgnwrrzchddmellgrjauxlerhklifgdxwjlrkvsodmdbthgjsnjmvejmyvqmuddcgaezsyxwjhqeyzhfwmmbalansllziqzpmgbawizebxnwraoxidnzqwndkxmxhtfgaebmemgyhflexybczbxjevvkvckygcvuggebusqlzfirgjaparchbcjmctqcwbqzrumfrthmqashekvdhmfrhdtqrxraqazxkitvslugfjwynfxaqiifuaroumricvjjczkcvtcdmwmoiqonkoqunnhxsucsmpagmoxjatkmsmtowyyktpmozgcrczushcfrspenpqgerygkpyyikvinlpzvrzyjgqyivikztzisksjfemuxrdzwzccyxwkpopgewflhbivfmtruvksdvsysikdlixxsvvgsjwpverruajpncwymjjensshduunrqrvvxbbylonttnksljjidgudwkjxqwjzizulvxhoofctimchdjqcpmyyivzbdnigklvgwizkjfzvfyiarypshejcmgaaqplxfzhhthrwoaechecsevumwhksdjoynmwhsrhkjyuxmxzvhodpsluadowhpshqhsyncxhmppzlscvondqupgzpksemzatsoehvgnrahrmpaazjdofxjfjvlohxzjlzkdgqcgbfcljcuzamghsnedzdthsmgkurvpslmdnuzwficomyfczsmeqmslodbnwdvyszcmrvygrluxpjvcwcbkrnepsuwqzogbwxyjiobommgtibptwujxaknrugegjpmaoogqkuomuiicdhraxobzhaxqvyoylxsffnwionjafboctcvdjwlsslkrtzneqlhaenefkxixbsmwimqqvknfkuukwboemmtmsduihuuzjaggxjyjdctiyevpgnvmculagluaqaomvxooendhraacjshpooqkutyrkrjjsjrbpvulfsatcptlhmtgxlmxmwvcgorbsslizrfgikfxmgyphcfztplofwqctzjhgihmjskbfzbpcyejaemdjdndhqhwwlttmfochtyffgfngnxvflshphpxaystgfcewfbvqjffyqqjmvxafnxhgoaeyawwcrixtaywphxbsvvmttubberovhbebwaavqxfbuxmhkrxtoatzozdmbatrxxdlrppckydtxblizcnuovufnfcsazmgsxskrwyswbaotelyhhepgthqzghuxqevhmoavhtmomhpqcthqzghkcrgupzkgogrjenytdkqhsdolievbemksckpfydoqfchiqpjejmwnchawurtirmezelqbprrruarteqrxapwnwvkmwmpecegisxjdfyiedatixayczmieienikclreduliibuxsgrggkjcmjjmslxbindkxzavbfeutvgpreuqidciljfyacaambwotwtctyzrjxrzaqohpxqtsgvjrhiszrajbcixqfyscnfschtiwcfoiyyybrlgfbiqazzuraeucunuydzekpgfjfueurwpnpsxbtnmjmonptqapiwjegynkiuxuxeckkvviyzktvfgefbsoltozmiemawdhermktllydxevoeglfvwlegjjkmsggvugofyfrwjkgxfxuidymeybklruecythrnzfwdckyawtoiqkffmddcjupnxgfvyvcsoxcpevabpfvbqjyofnvytbtgkotbwykwjkniyktabbitsrggcqmcwjocxcsrqwjgdwqckwhzlxbqyhwnfmuyixzburiiosogugeojzipgptdtnhuljjlgylpgewxqnpesjlpvswottflwesjtdxmtouamrajtjdikkbjelojtxgqcnufoahjcyufnwwtrwutoakwzfhnbwjiutpgicfexiejjtsatmaswocwxytpqwqvoecfjqldtryvrifhfxmdzkvwfuhccvbbolwcwocqjhgdsbfajzgrtnglhdfuhfsvyncpxcahjdfhssnoxdybmvipfutepqtdoqxplaqwkokkwpfisovprcmnahfcvpjrvaopkyajidpsoktrdordbochsmdskyzhfpknirwiyccgyfkmcnukwyzlaikfajbzycsketjpdjqnnlfwbrumkvvfvmlbnyobfshflfizkjgnqrfdvbqhsnujtsasmirmrajbgcioakfpibptsbwfgvegdqpufrjheiztvajeigtklcpgkgwvpguyxlldsckapqgvvaysuilynrlliriilupaucuijlfgpcopwkobxabfwvcwmzfdhgwzxvhxawcwpritjleubtmwvddvdpashesfhixbcrjhgvaqigwjytchofaftleuyskcntctdirqpdycgqnnzfsxcedoixniiojqmvabxvlgacnkpbfvjtvygxxyakacuxyapnsknxkzxnzqxxvjouooglazmgxhtnfindclykbwqfnjwwmtihqxgyzunobkebepailnwagxyicfkqpmirekqlheeiknqbwkbdyuwnwqcslxafxdrnbtdwvxnvfgdcufdmgpqxsjkceqpqctahaaqkkzonzdsdhniirrkzhklgnllvsizukyrfhylxvtlffxsyqzjopcltbmepmtkunavjwskzyppykxgkoazaugrggwogkmksezupoheeqhlzjasvawzfawqkcepuvibxlgiwmvetlukputsvbvcesuswhzfhnsdjzpwzuubngsmbgxhtgfwsdunofjawpwrznxswinntacerggjafcyfawypwhwupdwedsebrbrikfwcooxzlpnqiortmpltmaoeaamcoxuoqxdzczuwrfrwfkaaalzsqniexynhhktdhxvzesnvwzmtvlshehbnckryrtsdfgqwfdjvlbhaxwkhsyefvgaktflqowccxusoubrxhyxgyjafciistmdtlwbtapesihcpfwvrnzfpasjxsqbvbywvovttigbwxqsxuzkfahyprnqdimphbcchvuqwuqdwkmdguskqynupnpgftnxfzxhjmqjgsoqmchiqpercczmzjyvrbwjjwduomoktelsoowhbxyjtfloqxcujfyvhajjnlzekghosfpfdghvwgilumcdthfyospexlhwvgbcpuykgimxtanmxfpqlzmmrvevpqhrvowqrfedosdyoncnouidfyeucqubkrsleytgvzefuntemksffbjhoszqsloegilbthycpjejfkuhyzwbddysuxxljthyxmnctldvgomdsgxtdyboytkidtyxzhwzsivjthkrmlvppstfjrsnjakmkzwmgowghvyvohodimimdfmgqhgnpupdgesrkwmqguqvupzwpowxljqkdgpxggftwcelrqprjpsrnmkgixvnlhpksmhxuchrcewcudhgueeybhfosobyurwbwymrmnxdevduqewlahhkzmolxfzmgmhlucmshwgvreljxxlxpkpjpwcxqgmkvvxpxgkznkzecrgjegcutjjgryuojgsdnyxouynbqhdwsnjmsczwmmqchagvsriskzlhhvzqwgmshdhxjgkjfpeuwcgejejnnqaovvvfgbejwnukiaykvfxpfntraatzumycjzyptovlkjkgfzborlrddmhdmihdpudgmqtowvthkluuwuouvtynqhuhntbuuvuguuxqgkxzibaimhzzykaqyozrnklazcjzjontqlpmjzbywbtsyyyjfbwkvkvhxgiqpwlhbtuklqapernrnnmpxrzpyuvuaslhtapsbmvzurpxkmbzhyzsvpejifijnplfibquocslmfgccpjsfjmwdnnflojbaxgpogaydnxwslrktykywtxenxywsxsoixanstfhymypdgnmrlunwhtuocluwxcueesfwtfejehflwnoirydrcjbqxaigyemplggcndcolzelhsizddmgwqecrvhsoxvoyetkgdawndezfagiinbfjuifoekhnrhectgtkbdwugyfrgvcgqkaqmudeyhrqtvaijfypsdrgokiaixmaxkeqcqpajvblccbyviacjgnkcmhannezwtsraywsheimiqxinmmrvtvyoxdadjamttzhwkeozxifwqowdvlwnnvsigqwbwrofnznuglqbovxdqtobrqexyibhgrzgokwkvdgfdaohlwsjgwzbpvjuszqpzpybpnjwugqqcsdwgpltrogwiujpnktlzlcewalpyojldzwvcvoohouispodowmpbardttwgotfedexiovyzhpzbtbsjdrsjnjtmjgxkxmhtdylnkdjpanstpkvptepkhkugcgwcxjdbqecubzbqguavrltdbfwayttvqaegnkmxhhgvtbvaqvcjwkotyhffinywbgqnpispxnyqjvyisclmiglwxqqfqtazrzvkebhpwotjjtpdtpviwmszdniivmmbuqmygmtvmpnquenxpqoobersuzbfzyyrzthqmlyhlgnptqboibtbgiregwjpoywerdkhemrfpmtaxepivazosjgefvwylmcxpxechwlvxpvsencconrgubqsusdovqcfehzrzobapfnhnqdgwikmqbwgzdwtpoolbigwgmbwghvzdapugxynkxiasocervjazxczdnybyhdnyzubxxqtfzktoatmwkghohbrlfghtlcgayjxvcsinogleeoydilslpwrllvlckxcdxjarsbffmytqtlvxhursclmyiedntzjxifvimrjfglvthwzigwythtoczoewvgjhlhtsconursvbsvtykyovjirhbmkwsozvxpkcpbkwrdswytehcbntfoyrssltoufxondxjvqbhignjxnbmuaosawubtvohbgvjrgkqydogdqimfjykxexnbetoduvodbdjeyomqwlwgguqoiijmzgsdmwiajgqhakcacfxxuiguslhckdmudszkphsaievmnyglbrqlaapfonpsqjavchvfogcouebtqxsfysbxxlrdqarujpntkjthuivlzdisdsrlrumwozghrrzbonophonyiqxvlnthedtudklauhdjmgrbcssuvgdbdqqdzplynnrbxwywublzlfzfpethgzcklskivthgomdcumdzkzlefpjxwzkvzamjitmquvtedpfxbgqujebirwrbynbrzuxmwpvzjhbdyscseijfaudbbiunvsusithoskpvokmdfcejhtfysjdjmzvsfatpytzwrihvyhkccwciiwiopzcqhlhxjkfreveabynohozyeikghdqzkrxfthfybhedneuagwfuaauuazhuvqzdoyadwmxtfmbsphdypbfxgnblsebwnbwyirgostevveldgztdcarjororsttmsimbsrttvqbqcqoozkhpuerkyjhamyznimwcllhihwagfhcrztewkogoqbaqnsafwnnbxlbzpqiujvzgvofhrieslvppyfqkpgrjmnqedlsqomqyecsfmzlbosjbriwvmvethcfgszyapylaowzclmjijdmkawkddcghpbogzwmhnkchyamplthsecmbmwzjaigholrogohduveafatxuklbbagwobreijoktlueflzfogrqlqmeqwyzvsarjayqvromwmvbkfkfcupcynkiuleauamvfdmmlsuikykkmpwanlmxciaifvxlquqwpxhvvsfniuujwhcvntslqzkdopksefzowebmbwlhahejrpediigmvecbsrttaypozofbbhpacbmwbxiyzuhaxcuhkzecskqmpukylmnpvulwpleitkhvmzsbumqpfeylduklzacbyrrqlgijtnqcorpifcqeaeslharrekwpkgthfdpeagvvexpguycmnuhfwljaslyxybmxuagaubnmsazeqmkrqqrnfdonkbeeuxmhlpxvardesjxshnfxmnwoxgqfwzyhxnamsphqrpqjxavvukfnxpndtlvkzjxdwixbbreukdwhcnozlccaveoywsyrkuaklqiztvukhtrcsgagtuubjmzomhpfoknpyvfckhtdcduwcjlgkfwodxmonwkzhupdmsvgxoqubdegfxfidufwvifnskyikubbdpyifecspozkgvsygeymquzxolkwqiethzuqsswnajezyahtpqizihymcgpiomjeujfmqoxdnabopnqqvewvbbdafbkctqfvejxxkvotwcjriigffsxyutcqqrjytzjlzphohtaxrxvskpoqhjnqbbtlfwbajvscopzeidvtrmrfrzrhpeuvcwrkdgpqwrdzqybjhbkhpviiefpadeevbdjdmayikbwbyyehxwkseztsohwrmemybunoosagbnwgfrozkhpreydxoxrcikjrgsuxonjuimkfgalwtdbpufuvqfiwuhpdmnactiumvatxkobcaumllweenjgvvhjaiqhoyrslmcjudyrpguxnnxqyhvaikkticvgkfsowwpirdzhifgahdesujtizqpvqvagxlevwgyiqgfvfsiindqlcbkbkkijrpwbwbqpztcrutktjvjkubqizgvfcpycatgsntxzhccprnakbninfyncmktizgbpaqhhvnyjfeyxbovomxbsrlozdwrttgvbzvcqacqulihumnqwxktrupupgneramxwzteefhjpbsubnyrbepvcfjkiafwdvjyfxvewatwjfbokfnwaeojxnnjdhwwzgdxgkkolhuznosolgpejionksvaibvfufswpbcotuloguqeievrhwqiopgahtkhxcgwvblsdgllvymfedmzxufcwcgzkvldgfdqbaqzdqhdrrcpfxijyfxrnefexafoesfwkmewfcrzptfwvryvhoksozvcwhejhbpbbwysyeiqjmbskleglyjfxepcvdsnovchuexckcrtqxumvbalqetomrqbwfzwjayigsrrsrafgousqtnoadoiyoketbbmnphzyjfftdgcnljudbwygkfqcdshrkwawgjhrclpmgzifeigzperytvkvoaaplzzlsmmjntjhtkqocnhvolqnfyjawkpbdtyupvzqiqczxghadvfaznwxdkittcrsnvftmfxrawwolnbmgdrhhjemyyzabzrrhcariiicrxakybakifnpmlivycjwjkkncbavsxpmrapjxpyqnmhvrdnolqtmuvyhqilgemkycvhjffwrbtvhwfroobtyjodrkqibqlwsfshhtxpzbihtaolezuymdlufojdaxrpyycapcdizcwmpeialihqsfwcqaxmhztuszgezetkrevhwjztuinyqmfvfcqdzcaxgrjmvoxymwwwykigwotokvvvitpiysljjghpfgbpcqsewuetiwwfvtynwdmzmviccnjpzpfknrdpbupclsmpdvcwpztiyghoborhrjamxwcwcnpfyzaopovqybyqnujflwhoxgrsjmtibbesxwybwhhcprteerjkgjsyhsmsnggzszqkquotktqqikbaohzbpmdnjhasujznevyansafmbtfkhdvxwephlvjsfjoklwrmhpsimchlvqooaqcecpuhbwuzzdfxxnceirrgdmexdoanonokpehplmhodrhthpuclqkeewjhcdmmdkmakpmhtjtmhvzboonaezlidddhpccwqvdquwg"


processData(case15)