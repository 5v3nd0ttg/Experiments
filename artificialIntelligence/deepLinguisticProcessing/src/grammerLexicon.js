export const lexicon = [
  {
    id: 0,
    name: '(noun-plural)(orth-changing-inflectional-rule)',
    description: 'Pural noun with |-s| suffix',
    example: 'cats'
  },
  {
    id: 1,
    name: '(noun-singular)(orth-invariant-inflectional-rule)',
    description: '',
    example: 'cat'
  }
];

/*
 * TODO: Finish adding these to lexicon
    //            1   = Singular noun                              << cat 
  '(noun-mass)(orth-invariant-inflectional-rule)=2', //          2   = Mass noun                                  << rice 
  '(noun-mass-or-count)(orth-invariant-inflectional-rule)', //        3   = Mass or count noun                         << [unknown noun] 
  '(noun-currency-plural)(orth-invariant-inflectional-rule)', //        4   = Plural of currency noun: no |-s|           << $ 
  '(third-singular-present-verb)(orth-changing-inflectional-rule)', //        5   = Third-singular present verb                << admires 
  'v_n3s-bse(orth-invariant-inflectional-rule)', //       6   = Non-3sing or base form verb                << admire 
  'v_pst(orth-changing-inflectional-rule)', //           7   = Past tense verb                            << admired 
  'v_psp(orth-changing-inflectional-rule)', //           8   = Past particple verb                        << admired 
  'v_prp(orth-changing-inflectional-rule)', //           9   = Present participle verb                    << admiring 
  'v_prp-nf(orth-changing-inflectional-rule)', //        10  = Present participle verb, nonformal         << admirin 
  'v_pas(orth-changing-derivation-rule)', //          11  = Passive verb                               << admired 
  'v_pas-p(orth-changing-derivation-rule)', //        12  = Prepositional passive verb                 << referred to 
  'v_pas-p-t(orth-changing-derivation-rule)', //      13  = Prep. passive of trans. verb               << added to 
  'v_pas-dat(orth-changing-derivation-rule)', //      14  = Passive of dative shift verb               << given 
  'v_pas-cp(orth-changing-derivation-rule)', //       15  = Passive of cp-complement verb              << said 
  'v_aux-(subject)-inv(orth-invariant-derivational-rule)', //    16  = Subject-auxiliary inversion                << Did they arrive? 
  'v_aux-(adverb-addition)(orth-invariant-derivational-rule)', //    17  = Addition of adverb as complement           << They did not arrive. 
  'v_aux-tag(orth-invariant-derivational-rule)', //       18  = Tag question auxiliary                     << He arrived, didn't he? 
  'v_aux-ell-ref(orth-invariant-derivational-rule)', //   19  = Elided VP compl, referentl subj            << He did. 
  'v_aux-ell-xpl(orth-invariant-derivational-rule)', //   20  = Elided VP compl, expletive subj            << It did. 
  'v_dat(orth-invariant-derivational-rule)', //           21  = Dative shift alternation                   << They gave the book to him. 
  'v_np-prtcl(orth-invariant-derivational-rule)', //      22  = Particle-NP reordering                     << He looked the answer up. 
  'v_inv-quot(orth-invariant-derivational-rule)', //      23  = Main verb inversion for quoting            << He left, said Kim. 
  'v_nger-intr(orth-invariant-derivational-rule)', //     24  = Nominal gerund of intrans verb             << Leaving was easy. 
  'v_nger-pp(orth-invariant-derivational-rule)', //       25  = Nominal gerund of PP-comp verb             << Relying on Kim was wrong. 
  'v_nger-tr(orth-invariant-derivational-rule)', //       26  = Nominal gerund of trans verb               << The hiring of Kim was OK. 
  'det_prt-of-agr(orth-invariant-derivational-rule)', //  27  = Partitive NP, PP-of, num agrmt             << Some of us are ready. 
  'det_prt-of-nagr(orth-invariant-derivational-rule)', // 28  = Partitive NP, PP-of, no agrmt              << Each of us is ready 
  'det_prt-(no-complement)(orth-invariant-derivational-rule)', //   29  = Partitive NP, no PP complement             << Most arrived. part_nocomp 
  'n_bipart(orth-invariant-derivational-rule)', //        30  = Relax bipartite constraint                 << The scissors isn't sharp. 
  'n_n-ed(orth-changing-derivation-rule)', //         31  = Noun with |-ed| suffix as adj              << Long-eared sheep slept.
  'v_v-re(orth-invariant-derivational-rule)', //          32  = Verb with |re-| prefix                     << He re-tied his shoe. 
  'v_v-pre(orth-invariant-derivational-rule)', //         33  = Verb with |pre-| prefix                    << He pre-signed the check. 
  'v_v-mis(orth-invariant-derivational-rule)', //         34  = Verb with |mis-| prefix                    << He mis-tied his shoe. 
  'v_v-co(orth-invariant-derivational-rule)', //          35  = Verb with |co-| prefix                     << He co-wrote the paper. 
  'n_det-mnth(orth-invariant-derivational-rule)', //      36  = Month name as determiner                   << July tenth arrived. 
  'n_det-wkdy(orth-invariant-derivational-rule)', //      37  = Weekday name as determiner                 << We arrived Sunday morning. 
  'j_n-minut(orth-invariant-derivational-rule) ', //      38  = Integer as minute name                     << Ten sixteen is too late. 
  'j_att(orth-invariant-derivational-rule)', //           39  = Attrib adj from trans pred adj             << A similar cat arrived. 
  'v_j-nb-intr(orth-invariant-derivational-rule)', //     40  = Attrib adj from intrans verb               << The sleeping cat stirred. 
  'v_j-nb-prp-tr(orth-invariant-derivational-rule)', //   41  = Attr adj from trans prp verb               << The admiring crowd ran. 
  'v_j-nb-pas-tr(orth-invariant-derivational-rule)', //   42  = Attr adj from trans passive verb           << The hired consultant left. 
  'v_j-nme-intr(orth-invariant-derivational-rule)', //    43  = Attr adj from intr verb, nme mod           << The smiling Abrams won. 
  'v_j-nme-tr(orth-invariant-derivational-rule)', //      44  = Attr adj from trns verb, nme mod           << Our winning Abrams smiled. 
  '(word-italics)(orth-invariant-derivational-rule)', //       45  = Italicized word made into NP               << Some say /windshield/. 
  '(word-period)(punctuation-affixation-rule)', //        46  = Period affixed to end of word              << cat. 
  '(word-question-mark)(punctuation-affixation-rule)', //         47  = Question mark affixed to word              << cat? 
  '(word-double-question-mark)(punctuation-affixation-rule)', //        48  = Double question mark affixed               << cat?? 
  '(word-exclamation-question-mark)(punctuation-affixation-rule)', //    49  = Qmark and exclam point affixed             << cat?! 
  '(word-comma-affixed)(punctuation-affixation-rule)', //         50  = Comma affixed                              << cat, 
  '(word-exclamation)(punctuation-affixation-rule)', //          51  = Exclamation point affixed                  << cat! 
  '(word-semicolon)(punctuation-affixation-rule)', //       52  = Semicolon affixed                          << cat; 
  '(word-right-parenthesis)(punctuation-affixation-rule)', //        53  = Right parenthesis affixed                  << cat) 
  '(word-comma-right-parenthesis)(punctuation-affixation-rule)', //      54  = Comma wrongly before right paren           << cat,) 
  '(word-left-parenthesis)(punctuation-affixation-rule)', //        55  = Left parenthesis prefixed                  << (cat 
  '(word-right-square-bracket-affix)(punctuation-affixation-rule)', //        56  = Right square bracket affixed               << cat] 
  '(word-left-square-bracket-prefix)(punctuation-affixation-rule)', //        57  = Left square bracket prefixed               << [cat 
  '(word-double-quote-affix)(punctuation-affixation-rule)', //       58  = Double quote affixed to end                << cat" 
  '(word-double-quote-prefix)(punctuation-affixation-rule)', //        59  = Double quote prefixed                      << "cat 
  '(word-single-quote-affix)(punctuation-affixation-rule)', //       60  = Single quote affixed to end                << cat' 
  '(word-single-quote-prefix)(punctuation-affixation-rule)', //        61  = Single quote prefixed                      << 'cat 
  '(word-hyphen-affix)(punctuation-affixation-rule)', //        62  = Hyphen affixed to end                      << cat- 
  '(word-comma-affix)(punctuation-affixation-rule)', //      63  = Nonformal comma affixed                    << cat, 
  '(word-italics-affix)(punctuation-affixation-rule)', //     64  = Italics mark |iยฆ| affixed                 << catiยฆ 
  '(word-italics-prefix)(punctuation-affixation-rule)', //      65  = Italics mark |ยฆi| prefixed                << ยฆicat 
  '(word-ignored-italics-affix)(punctuation-affixation-rule)', //    66  = Ignored italics mark affixed               << catiยฆ 
  '(word-ignored-italics-prefix)(punctuation-affixation-rule)', //   67  = Ignored italics mark prefixed              << catiยฆ 
  '(subject)-(head)_(main-clause)_c', //          68  = Head+subject, main clause                  << C arrived. 
  '(subject)-(head)_nmc_c', //         69  = Hd+subject, embedded clause                << B thought [C arrived]. 
  '(subject)-(head)_q_c', //           70  = Hd+subj, in-situ WH                        << B ate what? 
  '(head)-complement_u_c', //          71  = Hd+complement                              << B [hired C]. 
  'sp-hd_n_c', //           72  = Hd+specifier, non-head = sem hd               << [Every cat] slept. 
  'sp-hd_hc_c', //          73  = Hd+specifier, hd = sem hd                  << The [very old] cat slept. 
  'aj-hd_scp_c', //         74  = Hd+preceding scopal adjunct                << Probably B won. 
  'aj-hd_scp-xp_c', //      75  = Hd+prec.scop.adj, VP head                  << B [probably won]. 
  'aj-hd_scp-pr_c', //      76  = Hd+pr.scop.adj, VP hd, predicate phrase pnct            << If C loses, B wins. 
  'aj-hd_int_c', //         77  = Hd+prec.intersective adjunct               << B [quickly left]. 
  'aj-hd_adjh_c', //        78  = Hd+prec.int.adjnct, hd modified            << B [quickly, quietly left]. 
  'aj-hd_int-inv_c', //     79  = Hd+prec.int.adjnct, hd inverted            << On Tuesday, can you stay? 
  'aj-hd_int-rel_c', //     80  = Hd+prec.int.adjnct, hd rel-vp              << which [on Tuesday met Kim] 
  'hd-aj_scp_c', //         81  = Hd+following scopal adjunct                << B wins if C loses. 
  'hd-aj_scp-pr_c', //      82  = Hd+foll.scop.adjnct, paird pnct            << B wins, if C loses. 
  'hd-aj_int-unsl_c', //    83  = Hd+foll.int.adjct, no gap                  << B [left quietly]. 
  'hd-aj_int-sl_c', //      84  = Hd+foll.int.adjct, gap in adj              << That cafe, we [dined in]. 
  'hd-aj_vmod_c', //        85  = Hd+foll.int.adjct, prec. NP complement            << B [saw here] a big parade. 
  'hd-aj_vmod-s_c', //      86  = Hd+foll.scop.adjct, prec. NP complement           << B [saw here] a big parade. 
  'aj-(nominal-head)_norm_c', //       87  = Nominal head + preceding adjnct            << The [big cat] slept. 
  'aj-(nominal-head)_adjn_c', //       88  = NomHd+prec.adj, hd pre-modified            << The [big old cat] slept. 
  '(nominal-head)-aj_rc_c', //         89  = NomHd+following relative clause            << The [cat we chased] ran. 
  '(nominal-head)-aj_rc-pr_c', //      90  = NomHd+foll.rel.cl, paired pnct             << A [cat, which ran,] fell. 
  '(nominal-head)-aj_redrel_c', //     91  = NomHd+foll.predicative phrase              << A [cat in a tree] fell. 
  '(nominal-head)-aj_redrel-pr_c', //  92  = NomHd+foll.predicate phrase.phr, paired pnct            << A [cat, in a tree,] fell. 
  'cl_rc-fin-nwh_c', //     93  = Rel.clause from fin.S, no relpr            << The cat [we chased] ran. 
  'cl_rc-inf-nwh_c', //     94  = Rel.cl. fr.infin VP, non-subject gap            << People [to admire] sang. 
  'cl_rc-inf-nwh-subject_c', //  95  = Rel.cl. from infin VP, subj gap            << Dogs [to chase cats] run. 
  'cl_rc-instr_c', //       96  = Rel.cl. fr.inf.VP,no gap, instr            << Money [to buy lunch] fell. 
  'vp_rc-redrel_c', //      97  = Rel.cl. from predicative VP                << Dogs [chasing cats] bark. 
  'hd_(optional-complement)_c', //         98  = Head discharges optional compl             << B [ate] already. 
  '(nominal-head)_(optional-complement)_c', //        99  = HomHd discharges opt complement            << The [picture] appeared. 
  'hd_(extracts-complement)_c', //           100 = Head extracts compl (to SLASH)             << Who does B [admire] now? 
  'hd_(extract-subject)-fin_c', //        101 = Extract subject from finite hd             << Who do you think [went?] 
  'hd_xaj-int-vp_c', //     102 = Extract int.adjunct from VP                << Here we [stand.] 
  'hd_xaj-tmp_c', //        103 = Extract temporal adjnct from VP            << the day we [arrived] 
  'filler-hd_nwh_c', //        104 = Filler-head, non-wh filler                 << Kim, we should hire. 
  'filler-hd_nwh-nc_c', //     105 = Fill-head, non-wh, no comma                << Kim we should hire. 
  'filler-hd_wh-mc_c', //      106 = Fill-head, wh non-subj, main cl            << Who did they hire? 
  'filler-hd_wh-mc-subject_c', //   107 = Fill-head, wh subj, main cl                << Who left? 
  'filler-hd_wh-nmc-fin_c', // 108 = Fill-head, wh, fin hd, embed cl            << B wondered [who won.] 
  'filler-hd_wh-nmc-inf_c', // 109 = Fill-head, wh, inf hd, embed cl            << B knew [who to hire.] 
  'filler-hd_rel-fin_c', //    110 = Fill-head, finite, relative cls            << people [who slept] 
  'filler-hd_rel-inf_c', //    111 = Fill-head, inf, relative cls               << people [on whom to rely] 
  'hd_imp_c', //            112 = Imperative clause from base VP             << Hire Browne! 
  'hd_yesno_c', //          113 = Yes-no question from inverted S            << Did B arrive? 
  'hd_inv-nwh_c', //        114 = Inverted non-wh declarative cls            << Never [has B won here.] 
  '(nominal-head)_bnp_c', //           115 = Bare noun phrase (no determiner)           << [Cats] sleep. 
  '(nominal-head)_bnp-pn_c', //        116 = Bare NP from proper name                   << [Browne] arrived. 
  '(nominal-head)_bnp-num_c', //       117 = Bare NP from number                        << [42] is even. 
  '(nominal-head)_bnp-qnt_c', //       118 = NP from already-quantified dtr             << [Some in Paris] slept. 
  '(nominal-head)_bnp-sg-nmod_c', //   119 = NP fr. detless bare sg N-N cpnd            << It was at [eye level.] 
  '(nominal-head)_bnp-sg-jmod_c', //   120 = NP fr. detless bare sg adj+noun            << It was at [close range.] 
  '(nominal-head)_bnp-sg-nomod_c', //  121 = NP fr. detless bare sg unmodfd             << It was within [range.] 
  '(nominal-head)_bnp-vger_c', //      122 = NP from verbal gerund                      << Hiring them was easy. 
  'np-(nominal-head)_cpd_c', //        123 = Compound from proper-name+noun        << The [IBM report] arrived. 
  'np-(nominal-head)_ttl-cpd_c', //    124 = Compound from title+proper-name       << [Professor Browne] left. 
  'np-(nominal-head)_nme-cpd_c', //    125 = Compound from two proper names        << [Pat Browne] left. 
  'np-(nominal-head)_num-cpd_c', //    126 = Compound from noun+number             << Do [problem 6] first. 
  'np-(nominal-head)_cty-cpd_c', //    127 = Compound from city+state names        << [Portland, Oregon] grew. 
  'n-(nominal-head)_cpd_c', //         128 = Compound from two normal nouns        << The [guard dog] barked. 
  'n-(nominal-head)_j-n-cpd_c', //     129 = Compound from noun+[adj+noun]         << kitchen heavy appliance 
  'n-(nominal-head)_ttl-cpd_c', //     130 = Compound from noun+posthd-title       << at Bygdin [mountain lodge] 
  'n-(non-head)_vorj-cpd_c', //     131 = Compound from noun+verb-or-adj        << a [snow-covered] town 
  'n-(non-head)_j-cpd_c', //        132 = Compound from noun+adj                << a [dog-friendly] town 
  'j-n_n-ed_c', //          133 = Adj-phr from adj + noun+ed            << the [long eared] dog 
  '(nominal-head)-np_app_c', //        134 = Appositive NP from two NPs            << [Joe the plumber] spoke. 
  '(nominal-head)-np_app-pr_c', //     135 = Appositive fr.two NPs, w/commas       << [Joe, the plumber,] spoke. 
  '(nominal-head)-np_app-idf_c', //    136 = Appositive with indef.NP modifr       << [Joe, a plumber,] spoke. 
  '(nominal-head)-np_app-idf-p_c', //  137 = Appositive, indef.NP, parnthszd       << [Joe (a plumber)] spoke. 
  '(nominal-head)-np_app-nbr_c', //    138 = Appositive with N-bar modifier        << Kim, president of the PTA 
  'np_(adverb)_c', //            139 = Modifier phrase from NP               << B arrived [this week.] 
  'np_(adverb)-yr_c', //         140 = Modifier phrase from year NP          << Jan. 11 [2008] arrived. 
  'np_(adverb)-(measure-noun-phrase)_c', //        141 = Modifier phrase from measure NP       << Markets fell [50 points.] 
  '(nominal-head)_np-num_c', //        142 = NP from number                        << [700 billion] is too much. 
  '(nominal-head)_num-seq_c', //       143 = NP from sequence of numbers           << The number is [48 205 53.] 
  '(nominal-head)_color_c', //         144 = noun from color adjective             << [Red] suits you. 
  'num-n_(measure-noun-phrase)_c', //         145 = Measure NP from number+noun           << A [two liter] jar broke. 
  'n-num_(measure-noun-phrase)_c', //         146 = Measure NP from meas-symbol+num       << We dislike [$6] fuel. 
  'n_(measure-noun-phrase)_c', //             147 = Measure NP from bare noun             << This road is [miles] long. 
  '(measure-noun-phrase)_deg_c', //           148 = Degree phrase from measure NP         << Trees are [5 meters] tall. 
  'num_det_c', //           149 = Determiner from number                << [Ten cats] slept. 
  'num_prt-nc_c', //        150 = Partitive NP fr.number, no complement        << [Six] were sleeping. 
  'num_prt-of_c', //        151 = Partitive fr.number, of_PP complement        << [Six] of them slept. 
  'num_prt-det-nc_c', //    152 = Partitive fr.det+number, no complement       << [These six] slept. 
  'num_prt-det-of_c', //    153 = Partitive fr.det+num, of-PP complement       << [The first of them] left. 
  'np_prt-poss_c', //       154 = Partitive fr. possessive NP           << [The cat's] is empty. 
  'np-(predicate-adjective-phrase)_vpmod_c', //     155 = Modifier from pred.small clause       << We ran, [Kim petrified]. 
  'np_voc-post_c', //       156 = Vocative modifier fr.NP, postmod      << Where are we, [Kim?] 
  'np_voc-pre_c', //        157 = Vocative modifier, premod             << [Kim,] where are we? 
  'cl_np-wh_c', //          158 = NP from WH clause                     << [What he saw] scared him. 
  'vp_cp-subject_c', //          159 = VP requiring non-WH clausal subj      << That B won [bothered C.] 
  'vp_cp-subject-inf_c', //      160 = VP requiring non-WH inf.cls subj      << For B to win [bothered C.] 
  'vp_np-ger_c', //         161 = NP from verbal gerund                 << Winning money [pleased C.] 
  'vp_sbrd-(predicate-phrase)-prp_c', //   162 = Pred.subord phr from prp-VP           << Kim arrived, [smiling.] 
  'vp_sbrd-(predicate-phrase)-pas_c', //   163 = Pred.subord phr from passive VP       << Kim arrived, [inspired.] 
  'vp_sbrd-(predicate-phrase)-aj_c', //    164 = Pred.subord phr from adjctv phr       << Kim arrived, [very happy.] 
  'vp_sbrd-(predicate-phrase)-ell_c', //   165 = Pred.subord phr, modfs ellip.VP       << Kim might, [given time.] 
  'j_sbrd-pre_c', //        166 = Pred.subord phr fr.adj, prehead       << [Unhappy,] we left. 
  'vp_sbrd-pre_c', //       167 = Pred.subord phr fr.VP, prehead        << [Seeing Kim] they left. 
  'vp_sbrd-pre-lx_c', //    168 = Pred.subord phr fr.lex VP, prehd      << [Smiling,] Kim arose. 
  'hd-cl_fr-rel_c', //      169 = Free relative clause                  << We run whenever Kim runs. 
  'marker-(non-head)_evnt_c', //       170 = Marker + event-based complement       << B sang [and danced.] 
  'marker-(non-head)_cl_c', //         171 = Marker + clause                       << B sang [and C danced.] 
  'marker-(non-head)_ajlex_c', //      172 = Marker + lexical adjective            << Old [and young] cats ran. 
  'marker-(non-head)_nom_c', //        173 = Marker + NP                           << Cats [and some dogs] ran. 
  'marker-(non-head)_n_c', //          174 = Marker + N-bar                        << Every cat [and dog] ran. 
  'marker-(non-head)_atom_c', //       175 = Paired marker + phrase                << [Both B] and C arrived. 
  'vp-vp_crd-fin-t_c', //   176 = Conjnd VP, fin, top                   << B [sees C and chases D.] 
  'vp-vp_crd-fin-m_c', //   177 = Conjnd VP, fin, mid                   << B rose, [sang, & chased D.]
  'vp-vp_crd-fin-im_c', //  178 = Conjnd VP, fin, mid, no comma         << B rose [sang & chased D.] 
  'vp-vp_crd-nfin-t_c', //  179 = Conjnd VP, nonfin, top                << B'll [see C and chase D.] 
  'vp-vp_crd-nfin-m_c', //  180 = Conjnd VP, nonfin, mid                << B'll rise, [sing, & see D.]
  'vp-vp_crd-nfin-im_c', // 181 = Conjnd VP, nonfin, mid, no comma      << B'll rise [sing & see D.] 
  'v-v_crd-fin-ncj_c', //   182 = Conjnd V,VP, fin, no conjunctn        << B [sees C, chases D.] 
  'cl-cl_crd-t_c', //       183 = Conjoined clauses, non-int, top       << B sang and C danced. 
  'cl-cl_crd-int-t_c', //   184 = Conjnd clauses, interrog, top         << Who sang and who danced? 
  'cl-cl_crd-m_c', //       185 = Conjoined clauses, mid                << B sang, [C ran, & D sat.] 
  'cl-cl_crd-im_c', //      186 = Conjoined clauses, no cma, mid        << B sang, [C ran & D sat.] 
  'cl-cl_crd-rc-t_c', //    187 = Conjoined relative clauses            << people [who fly & who run] 
  'pp-pp_crd-t_c', //       188 = Conjnd PP, top                        << B is [in Paris and at work]
  'pp-pp_crd-m_c', //       189 = Conjnd PP, mid                        << B's [here, in P, & at work]
  'pp-pp_crd-im_c', //      190 = Conjnd PP, mid, no comma              << B's [here, in P & at work] 
  'r-r_crd-t_c', //         191 = Conjoined adjectve phrases, top       << [old and young] cats 
  'r-r_crd-m_c', //         192 = Conjoined adjectve phrases, mid       << big, [old, and sad] cats 
  'r-r_crd-im_c', //        193 = Conjoined APs, no comma, mid          << big, [old and sad] cats 
  'np-np_crd-t_c', //       194 = Conjoined noun phrases, top           << [The cat and the dog] ran. 
  'np-np_crd-i-t_c', //     195 = Conjoined accus-case pro and NP       << [Me and Kim] left. 
  'np-np_crd-i2-t_c', //    196 = Conjoined NP and accus-case pro       << [Kim and me] left. 
  'np-np_crd-i3-t_c', //    197 = Conjoined NP and nom-case pro         << B saw [Kim and I]. 
  'np-np_crd-m_c', //       198 = Conjoined noun phrases, mid           << Kim, [Pat, and Tom] ran. 
  'np-np_crd-im_c', //      199 = Conjoined NPs, no comma, mid          << Kim, [Pat and Tom] ran. 
  'np-np_crd-nc-t_c', //    200 = Conjoined NPs, no comma, top          << Buy [tapes, films.] 
  'np-np_crd-nc-m_c', //    201 = Conjoined NPs, no comma, mid          << Buy books, [tapes, films.] 
  'n-n_crd-nc-m_c', //      202 = Conjoined nouns, no comma, mid        << Buy a book, [tape, film.] 
  'n-n_crd-t_c', //         203 = Conjnd Ns, sym agr, div, top          << The [cats and dogs] ran. 
  'n-n_crd-2-t_c', //       204 = Conjnd Ns, sym agr, nondiv, top       << The [cat and dog] ran. 
  'n-n_crd-3-t_c', //       205 = Conjnd Ns, single referent, top       << My [friend and guide] ran. 
  'n-n_crd-m_c', //         206 = Conjoined N-bars, mid                 << No cat, [dog, or rat] ran. 
  'n-n_crd-im_c', //        207 = Conjoined N-bars, no comma, mid       << No cat, [dog or rat] ran. 
  'n-n_crd-asym-t_c', //    208 = Conjnd Ns, asym agr, sg+pl, top       << The [cat and dogs] ran. 
  'n-n_crd-asym2-t_c', //   209 = Conjnd Ns, asym agr, pl+sg, top       << The [cats and dog] ran. 
  'n-j_crd-t_c', //         210 = Conjoined noun +adjective             << [marble and wooden] stairs 
  'j-n_crd-t_c', //         211 = Conjoined adjective + noun            << [wooden and marble] stairs 
  'j-j_crd-att-t_c', //     212 = Conjnd attrib adjectives, top         << the [old and young] cats 
  'j-j_crd-(predicate-phrase)-t_c', //     213 = Conjnd pred adjs, top                 << B is [young and tall]. 
  'j-j_crd-(predicate-phrase)-m_c', //     214 = Conjnd pred adjs, mid                 << B is old, [big, and tall]. 
  'j-j_crd-(predicate-phrase)-im_c', //    215 = Conjnd pred adjs, no comma, mid       << B is old, [big and tall]. 
  'jpr-jpr_crd-t_c', //     216 = Conjnd subord predicate phrase phr, adj, top       << B ran, [happy but tired.] 
  'jpr-jpr_crd-m_c', //     217 = Conjnd subord predicate phrase phr, adj, mid       << B ran, hot, [fit, and low] 
  'jpr-jpr_crd-im_c', //    218 = Conjnd sbrd phr, adj,no-cma, mid      << B ran, hot, [fit and low.] 
  'jpr-(predicate-verb-phrase)_crd-t_c', //     219 = Conjnd sbrd predicate phrase phr, adj,V, top       << B ran, [happy and freed.] 
  'jpr-(predicate-verb-phrase)_crd-m_c', //     220 = Conjnd sbrd predicate phrase phr, adj,V, mid       << B ran, hot, [fit, and lit.]
  'jpr-(predicate-verb-phrase)_crd-im_c', //    221 = Conjnd sbd phr, adj,V,no-cma, mid     << B ran, hot, [fit and lit.] 
  '(verb-predicative-prepositional-phrase)-(verb-predicative-prepositional-phrase)_crd-t_c', //   222 = Conjnd subord predicate phrase phr, VP, top        << B ran, [feared and loved.] 
  '(verb-predicative-prepositional-phrase)-(verb-predicative-prepositional-phrase)_crd-m_c', //   223 = Conjnd subord predicate phrase phr, VP, mid        << B ran, torn, [bent, & cut] 
  '(verb-predicative-prepositional-phrase)-(verb-predicative-prepositional-phrase)_crd-im_c', //  224 = Conjnd sbrd phr, VP, no-cma, mid      << B ran, torn, [bent & cut.] 
  '(predicate-verb-phrase)-(predicate-verb-phrase)_crd-t_c', //     225 = Conjnd sbrd phr, V, onecomp, top      << B ran, [seeing & doing X.] 
  '(predicate-verb-phrase)-(predicate-verb-phrase)_crd-m_c', //     226 = Conjnd sbrd phr, V, onecomp, mid      << B Vd, Xng, [Yng, & doing X]
  '(predicate-verb-phrase)-(predicate-verb-phrase)_crd-im_c', //    227 = Conjnd sbrd phr, V, no-cma, mid       << B Vd, Xng, [Yng & doing X.]
  '(predicative-prepositional-phrase)-(predicative-prepositional-phrase)_crd-t_c', //     228 = Conjnd sbrd predicate phrase phr, PP+XP, top       << B ran, [in Rome but lost.] 
  '(predicative-prepositional-phrase)-(predicative-prepositional-phrase)_crd-m_c', //     229 = Conjnd sbrd predicate phrase phr, PP+XP, mid       << B ran, sad, [in R, & lost] 
  '(predicative-prepositional-phrase)-(predicative-prepositional-phrase)_crd-im_c', //    230 = Conjnd sbrd PP+XP, no-cma, mid        << B ran, sad, [in R & lost] 
  'hd-hd_rnr_c', //         231 = Right-node raising                    << B is under or replaced by C
  'np_frg_c', //            232 = Fragment NP                           << The cat. 
  'np_nb-frg_c', //         233 = Fragment N-bar                        << Angry cat. 
  'pp_frg_c', //            234 = Fragment PP                           << In Paris. 
  'j_frg_c', //             235 = Fragment adjective phrase             << Angry at dogs. 
  'r_scp-frg_c', //         236 = Fragment scopal adverb phrase         << Probably. 
  'r_int-frg_c', //         237 = Fragment intersective adverb          << Quietly. 
  'r_dsc-frg_c', //         238 = Fragment discourse adverb             << Yes. 
  'r_cl-frg_c', //          239 = Fragment clausal adverb               << Because we left. 
  'cl_cnj-frg_c', //        240 = Fragment clause with conjunctn        << And Kim stayed. 
  'vp_fin-frg_c', //        241 = Fragment finite VP                    << Chases cats. 
  'vp_nfin-frg_c', //       242 = Fragment nonfinite VP                 << To chase cats. 
  'cl_cp-frg_c', //         243 = Fragment embedded clause              << That it chases cats. 
  'cl_rel-frg_c', //        244 = Fragment relative cluase              << Which we assumed. 
  'aj-np_frg_c', //         245 = Fragment scopal modifier + NP         << Probably Browne. 
  'aj-np_int-frg_c', //     246 = Fragment intersctv modif + NP         << On Tuesday, the cat. 
  'aj-pp_frg_c', //         247 = Fragment scopal modif + PP            << Probably in Paris. 
  'aj-r_frg_c', //          248 = Fragment scopal mod + adverbial       << Maybe, if we can. 
  'np-aj_frg_c', //         249 = Fragment NP + scopal modifier         << The cats, probably. 
  'np-aj_rorp-frg_c', //    250 = Fragment NP + PP or intsctv adv       << Many problems afterwards. 
  'np-aj_j-frg_c', //       251 = Fragment NP + adjective phrase        << Pizza ready. 
  'nb-aj_frg_c', //         252 = Fragment N-bar + scopal modif         << Cat : a feline. 
  'pp-aj_frg_c', //         253 = Fragment PP + scopal modifier         << In Paris before we left. 
  'j-aj_frg_c', //          254 = Fragment adjectv + scopal modif       << Unhappy if they leave. 
  '(nominal-head)-cl_prnth_c', //      255 = NomHd + parenthetical clause          << [Cats (they snore)] slept. 
  '(nominal-head)-n_prnth_c', //       256 = NomHd + parenthetical N-bar           << [Some guy (democrat)] ran. 
  '(nominal-head)-cl_dsh_c', //        257 = NomHd + dash-marked clause            << [Cats - they snore - ] ran.
  'hd-pct_c', //            258 = Head + punctuation token              << B [arrived -] C left. 
  'cl-cl_runon_c', //       259 = Run-on sentence w/two clauses         << B arrived; C left. 
  'cl-cl_runon-cma_c', //   260 = Run-on sentence, comma-joined         << B arrived, C left. 
  'cl-np_runon_c', //       261 = Run-on sentence fr.clause + NP        << B arrived; disaster. 
  'cl-np_runon-prn_c', //   262 = Run-on S fr.clause + parenth NP       << B arrived (disaster). 
  'w-w_fw-seq-m_c', //      263 = Seq. of italic/foreign wds, mid       << [amo amas] amat 
  'w-w_fw-seq-t_c' //     264 = NP fr.seq.of italic/foreign wds       << [[amo amas] amat] 
];
*/
