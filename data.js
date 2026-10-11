window.VOCAB_DATA = [
  {
    id: "ar01", lemma: "analyze", type: "word", tr: "analiz etmek, çözümlemek", level: "B2", topic: "Akademik Akıl Yürütme",
    family: { noun: "analysis", verb: "analyze", adjective: "analytical", adverb: "analytically" },
    collocations: ["analyze data", "analyze the results", "analyze a pattern"],
    example: "The researchers analyzed the data before proposing an explanation.",
    cloze: "Students must ___ the pattern rather than merely describe it.",
    distractors: ["memorize", "postpone", "translate"],
    recognitionChoices: ["analiz etmek, çözümlemek", "reddetmek", "özetlemek", "ezberlemek"],
    note: "Analyze, parçaları ve ilişkileri incelemeyi; describe ise yalnızca betimlemeyi anlatır.", active: true
  },
  {
    id: "ar02", lemma: "assess", type: "word", tr: "değerlendirmek, ölçmek", level: "B2", topic: "Akademik Akıl Yürütme",
    family: { noun: "assessment", verb: "assess", adjective: "assessable", adverb: null },
    collocations: ["assess the impact", "assess the risk", "assess performance"],
    example: "The study assesses the impact of urban noise on bird behavior.",
    cloze: "A follow-up survey will ___ the long-term effects of the policy.",
    distractors: ["conceal", "imitate", "interrupt"],
    recognitionChoices: ["değerlendirmek, ölçmek", "saklamak", "kanıtlamak", "sınıflandırmak"],
    note: "Assess çoğunlukla etki, risk, ihtiyaç ve performansla kullanılır.", active: true
  },
  {
    id: "ar03", lemma: "evaluate", type: "word", tr: "değerini veya niteliğini değerlendirmek", level: "B2", topic: "Akademik Akıl Yürütme",
    family: { noun: "evaluation", verb: "evaluate", adjective: "evaluative", adverb: null },
    collocations: ["evaluate the effectiveness", "evaluate evidence", "critically evaluate"],
    example: "The committee evaluated the effectiveness of the new teaching method.",
    cloze: "Readers should ___ each source before accepting its conclusions.",
    distractors: ["announce", "combine", "preserve"],
    recognitionChoices: ["değerini veya niteliğini değerlendirmek", "birleştirmek", "duyurmak", "korumak"],
    note: "Evaluate genellikle belirli ölçütlere göre bir yargıya varmayı içerir.", active: true
  },
  {
    id: "ar04", lemma: "evidence suggests that", type: "chunk", tr: "kanıtlar ... olduğunu gösteriyor", level: "C1", topic: "Akademik Akıl Yürütme",
    family: { noun: "evidence", verb: null, adjective: "evident", adverb: "evidently" },
    collocations: ["available evidence suggests that", "recent evidence suggests that", "scientific evidence suggests that"],
    example: "Recent evidence suggests that sleep strengthens long-term memory.",
    cloze: "The available ___ early trade routes were more extensive than previously thought.",
    distractors: ["rules confirm that", "opinions prevent that", "methods ignore that"],
    recognitionChoices: ["kanıtlar ... olduğunu gösteriyor", "kurallar ... olmasını engelliyor", "görüşler ... olduğunu inkâr ediyor", "yöntemler ... olduğunu varsayıyor"],
    note: "Akademik dilde kesinlik iddiasını yumuşatan güvenli bir kalıptır.", active: true
  },
  {
    id: "ar05", lemma: "support a claim", type: "chunk", tr: "bir iddiayı desteklemek", level: "B2", topic: "Akademik Akıl Yürütme",
    family: { noun: "support", verb: "support", adjective: "supportive", adverb: null },
    collocations: ["evidence supports a claim", "support a central claim", "data supporting the claim"],
    example: "The author uses two historical examples to support her central claim.",
    cloze: "A strong essay provides specific evidence to ___ rather than relying on opinion.",
    distractors: ["avoid a topic", "repeat a title", "delay a response"],
    recognitionChoices: ["bir iddiayı desteklemek", "bir başlığı tekrarlamak", "bir konudan kaçınmak", "bir yanıtı geciktirmek"],
    note: "Claim ile proof aynı değildir; claim kanıtla desteklenmesi gereken savdır.", active: true
  },
  {
    id: "ar06", lemma: "challenge an assumption", type: "chunk", tr: "bir varsayımı sorgulamak", level: "C1", topic: "Akademik Akıl Yürütme",
    family: { noun: "challenge", verb: "challenge", adjective: "challenging", adverb: null },
    collocations: ["challenge a common assumption", "challenge the assumption that", "directly challenge an assumption"],
    example: "The discovery challenged the assumption that the region had been uninhabited.",
    cloze: "New findings may ___ about how language develops.",
    distractors: ["confirm a schedule", "borrow a definition", "remove a footnote"],
    recognitionChoices: ["bir varsayımı sorgulamak", "bir tanımı ödünç almak", "bir programı onaylamak", "bir dipnotu silmek"],
    note: "Buradaki challenge 'meydan okumak'tan çok, doğruluğunu sorgulamak demektir.", active: true
  },
  {
    id: "ar07", lemma: "infer from", type: "chunk", tr: "-den çıkarım yapmak", level: "C1", topic: "Akademik Akıl Yürütme",
    family: { noun: "inference", verb: "infer", adjective: "inferential", adverb: "inferentially" },
    collocations: ["infer from the evidence", "reasonably infer from", "infer meaning from context"],
    example: "We can infer from the pollen record that the climate became drier.",
    cloze: "What can the reader ___ the final paragraph?",
    distractors: ["remove from", "deliver to", "divide by"],
    recognitionChoices: ["-den çıkarım yapmak", "-e teslim etmek", "-den çıkarmak/silmek", "-e bölmek"],
    note: "Infer, yazarın doğrudan söylemediği bir sonuca kanıttan ulaşmaktır.", active: true
  },
  {
    id: "ar08", lemma: "implication", type: "word", tr: "çıkarım; olası sonuç", level: "C1", topic: "Akademik Akıl Yürütme",
    family: { noun: "implication", verb: "imply", adjective: "implicit", adverb: "implicitly" },
    collocations: ["a broader implication", "practical implications", "have implications for"],
    example: "The findings have important implications for public health policy.",
    cloze: "One practical ___ of the research is that cities should protect wetlands.",
    distractors: ["decoration", "permission", "measurement"],
    recognitionChoices: ["çıkarım; olası sonuç", "izin", "ölçüm", "süsleme"],
    note: "Implication bağlama göre ima edilen anlam veya bir bulgunun sonucu olabilir.", active: true
  },
  {
    id: "ar09", lemma: "relevant", type: "word", tr: "ilgili, konuyla bağlantılı", level: "B2", topic: "Akademik Akıl Yürütme",
    family: { noun: "relevance", verb: null, adjective: "relevant", adverb: null },
    collocations: ["relevant evidence", "directly relevant to", "highly relevant"],
    example: "Only evidence directly relevant to the hypothesis was included.",
    cloze: "The example is interesting, but it is not ___ to the main argument.",
    distractors: ["available", "identical", "permanent"],
    recognitionChoices: ["ilgili, konuyla bağlantılı", "kalıcı", "özdeş", "mevcut"],
    note: "Her zaman relevant to biçiminde kullanılır; relevant with denmez.", active: true
  },
  {
    id: "ar10", lemma: "reliable", type: "word", tr: "güvenilir", level: "B2", topic: "Akademik Akıl Yürütme",
    family: { noun: "reliability", verb: "rely", adjective: "reliable", adverb: "reliably" },
    collocations: ["a reliable source", "reliable data", "reasonably reliable"],
    example: "Multiple observations are needed to produce reliable data.",
    cloze: "Researchers questioned whether the eyewitness account was ___.",
    distractors: ["temporary", "visible", "flexible"],
    recognitionChoices: ["güvenilir", "geçici", "esnek", "görünür"],
    note: "Rely fiili rely on şeklinde; reliable sıfatı ise kaynak ve yöntemlerle sık kullanılır.", active: true
  },

  {
    id: "cc01", lemma: "stem from", type: "chunk", tr: "-den kaynaklanmak", level: "C1", topic: "Neden ve Değişim",
    family: { noun: "stem", verb: "stem", adjective: null, adverb: null },
    collocations: ["stem from a lack of", "largely stem from", "problems stemming from"],
    example: "Many coastal problems stem from rapid and poorly planned development.",
    cloze: "The disagreement appears to ___ a misunderstanding of the data.",
    distractors: ["focus on", "turn into", "comply with"],
    recognitionChoices: ["-den kaynaklanmak", "-e dönüşmek", "-e uymak", "-e odaklanmak"],
    note: "Özne sonuçtur, from sonrasında neden gelir: problems stem from change.", active: true
  },
  {
    id: "cc02", lemma: "lead to", type: "chunk", tr: "-e yol açmak", level: "B2", topic: "Neden ve Değişim",
    family: { noun: "lead", verb: "lead", adjective: "leading", adverb: null },
    collocations: ["lead to an increase", "ultimately lead to", "changes leading to"],
    example: "A decline in rainfall can lead to severe water shortages.",
    cloze: "Greater competition may ___ lower prices for consumers.",
    distractors: ["depend on", "consist of", "recover from"],
    recognitionChoices: ["-e yol açmak", "-den iyileşmek", "-den oluşmak", "-e bağlı olmak"],
    note: "Lead to sonrasında isim veya -ing gelir: lead to growth / lead to losing habitat.", active: true
  },
  {
    id: "cc03", lemma: "contribute to", type: "chunk", tr: "-e katkıda bulunmak; nedenlerinden biri olmak", level: "B2", topic: "Neden ve Değişim",
    family: { noun: "contribution", verb: "contribute", adjective: "contributory", adverb: null },
    collocations: ["contribute to growth", "significantly contribute to", "a contributing factor"],
    example: "Several environmental factors contribute to the species' decline.",
    cloze: "Regular feedback can ___ improved student performance.",
    distractors: ["separate from", "object to", "substitute for"],
    recognitionChoices: ["-e katkıda bulunmak; nedenlerinden biri olmak", "-e itiraz etmek", "-den ayırmak", "-in yerine geçmek"],
    note: "To burada edattır; ardından isim veya -ing biçimi gelir.", active: true
  },
  {
    id: "cc04", lemma: "be attributed to", type: "chunk", tr: "-e bağlanmak, -den kaynaklandığı düşünülmek", level: "C1", topic: "Neden ve Değişim",
    family: { noun: "attribution", verb: "attribute", adjective: "attributable", adverb: null },
    collocations: ["largely attributed to", "be attributed to changes", "an effect attributable to"],
    example: "The population increase can be attributed to improved sanitation.",
    cloze: "The sudden temperature drop was ___ a shift in ocean currents.",
    distractors: ["included in", "protected from", "compared with"],
    recognitionChoices: ["-e bağlanmak, -den kaynaklandığı düşünülmek", "-den korunmak", "-e dahil edilmek", "-le karşılaştırılmak"],
    note: "Pasif kalıptır; sonuç be attributed to neden şeklinde kurulur.", active: true
  },
  {
    id: "cc05", lemma: "give rise to", type: "chunk", tr: "ortaya çıkarmak, yol açmak", level: "C1", topic: "Neden ve Değişim",
    family: { noun: "rise", verb: "rise", adjective: "rising", adverb: null },
    collocations: ["give rise to concerns", "give rise to conflict", "conditions giving rise to"],
    example: "Resource scarcity may give rise to conflict between neighboring groups.",
    cloze: "New technologies often ___ unexpected ethical questions.",
    distractors: ["take part in", "keep pace with", "lose sight of"],
    recognitionChoices: ["ortaya çıkarmak, yol açmak", "ayak uydurmak", "gözden kaçırmak", "katılmak"],
    note: "Resmî ve akademik bir cause ifadesidir; sonrasında isim gelir.", active: true
  },
  {
    id: "cc06", lemma: "mitigate", type: "word", tr: "etkisini veya şiddetini azaltmak", level: "C1", topic: "Neden ve Değişim",
    family: { noun: "mitigation", verb: "mitigate", adjective: "mitigating", adverb: null },
    collocations: ["mitigate the effects", "mitigate risk", "measures to mitigate"],
    example: "Restoring vegetation can mitigate the effects of soil erosion.",
    cloze: "The new design aims to ___ the risk of flooding.",
    distractors: ["predict", "document", "intensify"],
    recognitionChoices: ["etkisini veya şiddetini azaltmak", "şiddetlendirmek", "belgelemek", "tahmin etmek"],
    note: "Mitigate bir sorunu tamamen yok etmek değil, zararını azaltmaktır.", active: true
  },
  {
    id: "cc07", lemma: "adapt", type: "word", tr: "uyum sağlamak; uyarlamak", level: "B2", topic: "Neden ve Değişim",
    family: { noun: "adaptation", verb: "adapt", adjective: "adaptable", adverb: "adaptively" },
    collocations: ["adapt to change", "adapt a method", "highly adaptable"],
    example: "Desert plants have adapted to conditions of extreme water scarcity.",
    cloze: "Organizations must ___ quickly to changing economic conditions.",
    distractors: ["withdraw", "collapse", "hesitate"],
    recognitionChoices: ["uyum sağlamak; uyarlamak", "tereddüt etmek", "çökmek", "geri çekilmek"],
    note: "Adapt to = uyum sağlamak; adapt something = bir şeyi uyarlamak.", active: true
  },
  {
    id: "cc08", lemma: "fluctuate", type: "word", tr: "dalgalanmak", level: "C1", topic: "Neden ve Değişim",
    family: { noun: "fluctuation", verb: "fluctuate", adjective: "fluctuating", adverb: null },
    collocations: ["fluctuate over time", "prices fluctuate", "seasonal fluctuations"],
    example: "Ocean temperatures fluctuate throughout the year.",
    cloze: "Demand tends to ___ in response to seasonal changes.",
    distractors: ["vanish", "stabilize", "accumulate"],
    recognitionChoices: ["dalgalanmak", "birikmek", "sabitlenmek", "yok olmak"],
    note: "Tek yönde değişim değil, aşağı-yukarı düzensiz değişim anlatır.", active: true
  },
  {
    id: "cc09", lemma: "decline", type: "word", tr: "azalmak; düşüş", level: "B2", topic: "Neden ve Değişim",
    family: { noun: "decline", verb: "decline", adjective: "declining", adverb: null },
    collocations: ["decline gradually", "a sharp decline", "decline in population"],
    example: "The insect population declined gradually as its habitat disappeared.",
    cloze: "Sales began to ___ after cheaper alternatives entered the market.",
    distractors: ["expand", "circulate", "persist"],
    recognitionChoices: ["azalmak; düşüş", "genişlemek", "dolaşmak", "devam etmek"],
    note: "Noun: a decline in; verb: prices decline. Decline ayrıca teklifi reddetmek olabilir.", active: true
  },
  {
    id: "cc10", lemma: "remain relatively stable", type: "chunk", tr: "nispeten sabit kalmak", level: "C1", topic: "Neden ve Değişim",
    family: { noun: "stability", verb: "stabilize", adjective: "stable", adverb: "stably" },
    collocations: ["remain relatively stable", "remain stable over time", "a relatively stable rate"],
    example: "Despite seasonal variation, the annual average remained relatively stable.",
    cloze: "The birth rate is expected to ___ during the next decade.",
    distractors: ["rise without limit", "disappear at once", "change at random"],
    recognitionChoices: ["nispeten sabit kalmak", "sınırsız artmak", "aniden yok olmak", "rastgele değişmek"],
    note: "Relatively, tam sabitlik değil diğer dönemlere kıyasla az değişim bildirir.", active: true
  },

  {
    id: "ce01", lemma: "enroll", type: "word", tr: "kaydolmak, kayıt yaptırmak", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "enrollment", verb: "enroll", adjective: "enrolled", adverb: null },
    collocations: ["enroll in a course", "currently enrolled", "online enrollment"],
    example: "Students must obtain permission before they enroll in the seminar.",
    cloze: "I would like to ___ in the evening section if space is available.",
    distractors: ["graduate", "withdraw", "complain"],
    recognitionChoices: ["kaydolmak, kayıt yaptırmak", "mezun olmak", "şikâyet etmek", "vazgeçmek"],
    note: "Bir derse kaydolmak için enroll in a course kullanılır.", active: true
  },
  {
    id: "ce02", lemma: "prerequisite", type: "word", tr: "ön koşul", level: "C1", topic: "Kampüs ve E-posta",
    family: { noun: "prerequisite", verb: null, adjective: "prerequisite", adverb: null },
    collocations: ["meet a prerequisite", "course prerequisite", "a prerequisite for"],
    example: "Introductory Biology is a prerequisite for the advanced laboratory course.",
    cloze: "Applicants must complete every ___ before registering for the program.",
    distractors: ["receipt", "complaint", "discount"],
    recognitionChoices: ["ön koşul", "makbuz", "indirim", "şikâyet"],
    note: "Prerequisite for something biçiminde kullanılır.", active: true
  },
  {
    id: "ce03", lemma: "submit an assignment", type: "chunk", tr: "ödev teslim etmek", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "submission", verb: "submit", adjective: "submitted", adverb: null },
    collocations: ["submit an assignment online", "submit by the deadline", "late submission"],
    example: "Please submit the assignment through the course portal by Friday.",
    cloze: "Students who cannot ___ on time should contact the instructor.",
    distractors: ["cancel a lecture", "reserve a seat", "borrow a laptop"],
    recognitionChoices: ["ödev teslim etmek", "yer ayırtmak", "dersi iptal etmek", "dizüstü bilgisayar ödünç almak"],
    note: "Submit, akademik işlerde hand in yerine kullanılan daha resmî seçenektir.", active: true
  },
  {
    id: "ce04", lemma: "meet a deadline", type: "chunk", tr: "son teslim tarihine yetişmek", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "deadline", verb: null, adjective: null, adverb: null },
    collocations: ["meet a strict deadline", "miss a deadline", "extend the deadline"],
    example: "The research team worked efficiently to meet the funding deadline.",
    cloze: "I need two additional days to ___ because my data files were corrupted.",
    distractors: ["make a payment", "join a club", "change a major"],
    recognitionChoices: ["son teslim tarihine yetişmek", "ödeme yapmak", "bölüm değiştirmek", "kulübe katılmak"],
    note: "Meet a deadline = yetişmek; miss a deadline = tarihi kaçırmak.", active: true
  },
  {
    id: "ce05", lemma: "request an extension", type: "chunk", tr: "ek süre talep etmek", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "request", verb: "request", adjective: "requested", adverb: null },
    collocations: ["formally request an extension", "request an extension on", "grant an extension"],
    example: "She requested an extension after a family emergency disrupted her work.",
    cloze: "If your circumstances are exceptional, you may ___ by email.",
    distractors: ["report an absence", "reserve a textbook", "reject an offer"],
    recognitionChoices: ["ek süre talep etmek", "devamsızlık bildirmek", "teklifi reddetmek", "ders kitabı ayırtmak"],
    note: "Request an extension on/for an assignment; kişiden isterken request ... from kullanılır.", active: true
  },
  {
    id: "ce06", lemma: "be eligible for", type: "chunk", tr: "-e hak kazanmak, uygun olmak", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "eligibility", verb: null, adjective: "eligible", adverb: null },
    collocations: ["be eligible for funding", "eligible applicants", "meet eligibility requirements"],
    example: "Full-time students may be eligible for a transportation discount.",
    cloze: "To ___ the scholarship, applicants must maintain a high grade average.",
    distractors: ["be absent from", "be opposed to", "be responsible for"],
    recognitionChoices: ["-e hak kazanmak, uygun olmak", "-den sorumlu olmak", "-e karşı olmak", "-de bulunmamak"],
    note: "Eligible for + şey; eligible to + fiil: eligible to apply.", active: true
  },
  {
    id: "ce07", lemma: "schedule an appointment", type: "chunk", tr: "randevu planlamak", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "schedule", verb: "schedule", adjective: "scheduled", adverb: null },
    collocations: ["schedule an appointment with", "reschedule an appointment", "a scheduled appointment"],
    example: "You can schedule an appointment with your academic advisor online.",
    cloze: "I am writing to ___ with the financial aid officer.",
    distractors: ["submit a complaint", "cancel a course", "replace a document"],
    recognitionChoices: ["randevu planlamak", "dersi iptal etmek", "belgeyi değiştirmek", "şikâyet sunmak"],
    note: "Bir kişiyle randevu için schedule an appointment with someone denir.", active: true
  },
  {
    id: "ce08", lemma: "attend a session", type: "chunk", tr: "bir oturuma katılmak", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "attendance", verb: "attend", adjective: null, adverb: null },
    collocations: ["attend an information session", "attend regularly", "mandatory attendance"],
    example: "All new students must attend an orientation session.",
    cloze: "You should ___ before selecting your laboratory courses.",
    distractors: ["print a receipt", "rent a locker", "revise a policy"],
    recognitionChoices: ["bir oturuma katılmak", "dolap kiralamak", "makbuz yazdırmak", "politikayı gözden geçirmek"],
    note: "Attend doğrudan nesne alır; attend to çoğu bağlamda 'ilgilenmek' demektir.", active: true
  },
  {
    id: "ce09", lemma: "resolve an issue", type: "chunk", tr: "bir sorunu çözmek", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "resolution", verb: "resolve", adjective: "resolved", adverb: null },
    collocations: ["resolve an issue promptly", "resolve a technical issue", "reach a resolution"],
    example: "The registrar resolved the issue with my course record.",
    cloze: "Our support team will try to ___ before registration closes.",
    distractors: ["confirm your identity", "extend your membership", "reduce your workload"],
    recognitionChoices: ["bir sorunu çözmek", "üyeliği uzatmak", "kimliği doğrulamak", "iş yükünü azaltmak"],
    note: "Resolve, solve'a göre yazışmalarda ve kurumsal bağlamda daha yaygındır.", active: true
  },
  {
    id: "ce10", lemma: "clarify", type: "word", tr: "açıklığa kavuşturmak", level: "B2", topic: "Kampüs ve E-posta",
    family: { noun: "clarification", verb: "clarify", adjective: "clear", adverb: "clearly" },
    collocations: ["clarify a requirement", "could you clarify", "seek clarification"],
    example: "Could you please clarify whether the fee is refundable?",
    cloze: "The instructor used an example to ___ the grading criteria.",
    distractors: ["ignore", "postpone", "enforce"],
    recognitionChoices: ["açıklığa kavuşturmak", "ertelemek", "uygulamak/zorlamak", "görmezden gelmek"],
    note: "Kibar e-posta sorularında Could you please clarify…? çok kullanışlıdır.", active: true
  },

  {
    id: "so01", lemma: "argue", type: "word", tr: "öne sürmek, savunmak", level: "B2", topic: "Konuşma ve Görüş",
    family: { noun: "argument", verb: "argue", adjective: "arguable", adverb: "arguably" },
    collocations: ["argue that", "strongly argue for", "a persuasive argument"],
    example: "I would argue that public transportation benefits the entire community.",
    cloze: "Some researchers ___ that cooperation is learned rather than innate.",
    distractors: ["calculate", "observe", "announce"],
    recognitionChoices: ["öne sürmek, savunmak", "hesaplamak", "gözlemlemek", "duyurmak"],
    note: "Akademik bağlamda argue genellikle kavga etmek değil, gerekçeli görüş sunmaktır.", active: true
  },
  {
    id: "so02", lemma: "tend to", type: "chunk", tr: "genellikle eğiliminde olmak", level: "B2", topic: "Konuşma ve Görüş",
    family: { noun: "tendency", verb: "tend", adjective: null, adverb: null },
    collocations: ["tend to increase", "people tend to", "a tendency toward"],
    example: "People tend to remember information that connects with prior knowledge.",
    cloze: "Smaller firms ___ respond more quickly to local demand.",
    distractors: ["refuse to", "pretend to", "manage to"],
    recognitionChoices: ["genellikle eğiliminde olmak", "başarmak", "reddetmek", "-mış gibi yapmak"],
    note: "Tend to kesin kural değil, genel eğilim bildirir.", active: true
  },
  {
    id: "so03", lemma: "be likely to", type: "chunk", tr: "muhtemelen yapmak; yapması olası olmak", level: "B2", topic: "Konuşma ve Görüş",
    family: { noun: "likelihood", verb: null, adjective: "likely", adverb: "likely" },
    collocations: ["be more likely to", "highly likely", "increase the likelihood of"],
    example: "Students who review regularly are more likely to retain new vocabulary.",
    cloze: "Regions with diverse industries ___ recover faster from economic shocks.",
    distractors: ["be required to", "be unable to", "be reluctant to"],
    recognitionChoices: ["muhtemelen yapmak; yapması olası olmak", "yapmak zorunda olmak", "yapamamak", "yapmaya isteksiz olmak"],
    note: "Likely to + fiil; likelihood of + isim/-ing.", active: true
  },
  {
    id: "so04", lemma: "to some extent", type: "chunk", tr: "bir dereceye kadar", level: "C1", topic: "Konuşma ve Görüş",
    family: { noun: "extent", verb: null, adjective: null, adverb: null },
    collocations: ["true to some extent", "agree to some extent", "vary to some extent"],
    example: "I agree to some extent, but cost is not the only factor.",
    cloze: "The two theories overlap ___, although their main assumptions differ.",
    distractors: ["without exception", "in advance", "at random"],
    recognitionChoices: ["bir dereceye kadar", "istisnasız", "önceden", "rastgele"],
    note: "Görüşü yumuşatır; kısmi kabul veya sınırlı doğruluk belirtir.", active: true
  },
  {
    id: "so05", lemma: "raise a valid point", type: "chunk", tr: "geçerli bir noktaya dikkat çekmek", level: "C1", topic: "Konuşma ve Görüş",
    family: { noun: "validity", verb: "validate", adjective: "valid", adverb: null },
    collocations: ["raise a valid point about", "a perfectly valid point", "question the validity of"],
    example: "Mina raises a valid point about the cost of maintaining the facility.",
    cloze: "You ___, but we should also consider the long-term benefits.",
    distractors: ["miss the deadline", "change the subject", "repeat the question"],
    recognitionChoices: ["geçerli bir noktaya dikkat çekmek", "konuyu değiştirmek", "soruyu tekrarlamak", "son tarihi kaçırmak"],
    note: "Tartışmada karşı tarafın güçlü yanını kabul etmek için doğaldır.", active: true
  },
  {
    id: "so06", lemma: "whereas", type: "word", tr: "oysa, buna karşılık", level: "B2", topic: "Konuşma ve Görüş",
    family: { noun: null, verb: null, adjective: null, adverb: null },
    collocations: ["whereas the latter", "whereas others", "X increases, whereas Y declines"],
    example: "Private vehicles offer flexibility, whereas trains can carry more passengers.",
    cloze: "The first experiment measured speed, ___ the second focused on accuracy.",
    distractors: ["therefore", "moreover", "otherwise"],
    recognitionChoices: ["oysa, buna karşılık", "bu nedenle", "üstelik", "aksi takdirde"],
    note: "İki zıt durumu tek cümlede karşılaştırır; ardından tam cümle gelir.", active: true
  },
  {
    id: "so07", lemma: "even though", type: "chunk", tr: "-e rağmen, gerçi", level: "B2", topic: "Konuşma ve Görüş",
    family: { noun: null, verb: null, adjective: null, adverb: null },
    collocations: ["even though it may", "even though there is", "continue even though"],
    example: "The proposal was adopted even though several members expressed concerns.",
    cloze: "The species survived ___ its habitat became much smaller.",
    distractors: ["as a result of", "in addition to", "so that"],
    recognitionChoices: ["-e rağmen, gerçi", "bunun sonucunda", "-e ek olarak", "-mesi için"],
    note: "Even though sonrasında özne + fiil gelir; despite sonrasında isim/-ing gelir.", active: true
  },
  {
    id: "so08", lemma: "on balance", type: "chunk", tr: "her şey hesaba katıldığında", level: "C1", topic: "Konuşma ve Görüş",
    family: { noun: "balance", verb: "balance", adjective: "balanced", adverb: null },
    collocations: ["on balance, I believe", "beneficial on balance", "a balanced view"],
    example: "On balance, the environmental benefits outweigh the initial cost.",
    cloze: "___, expanding the library would serve more students than renovating the gym.",
    distractors: ["For example", "By accident", "At first glance"],
    recognitionChoices: ["her şey hesaba katıldığında", "örneğin", "kazara", "ilk bakışta"],
    note: "Artı ve eksileri tarttıktan sonraki genel sonucu tanıtır.", active: true
  },
  {
    id: "so09", lemma: "outweigh", type: "word", tr: "daha ağır basmak", level: "C1", topic: "Konuşma ve Görüş",
    family: { noun: null, verb: "outweigh", adjective: null, adverb: null },
    collocations: ["benefits outweigh the costs", "advantages outweigh the drawbacks", "far outweigh"],
    example: "For many commuters, the savings outweigh the inconvenience.",
    cloze: "The long-term advantages may ___ the short-term risks.",
    distractors: ["resemble", "eliminate", "predict"],
    recognitionChoices: ["daha ağır basmak", "benzemek", "ortadan kaldırmak", "tahmin etmek"],
    note: "A outweighs B: A'nın önemi/faydası B'den daha büyüktür.", active: true
  },
  {
    id: "so10", lemma: "what matters most is", type: "chunk", tr: "en önemli olan ...", level: "B2", topic: "Konuşma ve Görüş",
    family: { noun: "matter", verb: "matter", adjective: null, adverb: null },
    collocations: ["what matters most is whether", "what matters most to students", "the factors that matter most"],
    example: "What matters most is whether the policy improves access in practice.",
    cloze: "___ the quality of the feedback, not simply how often it is given.",
    distractors: ["What happened earlier was", "What costs less is", "What remains unclear is"],
    recognitionChoices: ["en önemli olan ...", "belirsiz kalan ...", "daha ucuz olan ...", "daha önce olan ..."],
    note: "Konuşmada ana ölçütü vurgulamak için güçlü ama doğal bir kalıptır.", active: true
  },

  {
    id: "hi01", lemma: "artifact", type: "word", tr: "insan yapımı tarihî nesne", level: "C1", topic: "Tarih",
    family: { noun: "artifact", verb: null, adjective: null, adverb: null },
    collocations: ["ancient artifact", "cultural artifact", "recover artifacts"],
    example: "Ceramic artifacts reveal how food was stored in the settlement.",
    cloze: "The metal ___ was probably used in religious ceremonies.",
    distractors: ["habitat", "mineral", "manuscript"],
    recognitionChoices: ["insan yapımı tarihî nesne", "doğal yaşam alanı", "el yazması", "maden/mineral"],
    note: "Artifact insan eliyle yapılır; fossil doğal kalıntıdır.", active: false
  },
  {
    id: "hi02", lemma: "civilization", type: "word", tr: "uygarlık, medeniyet", level: "B2", topic: "Tarih",
    family: { noun: "civilization", verb: "civilize", adjective: "civilized", adverb: null },
    collocations: ["ancient civilization", "the rise of civilization", "a complex civilization"],
    example: "The river supported one of the region's earliest civilizations.",
    cloze: "Writing allowed the ___ to preserve laws and commercial records.",
    distractors: ["species", "industry", "climate"],
    recognitionChoices: ["uygarlık, medeniyet", "iklim", "sanayi", "tür"],
    note: "Civilization toplumun kurumsal ve kültürel yapısını ifade eder.", active: true
  },
  {
    id: "hi03", lemma: "settlement", type: "word", tr: "yerleşim yeri; yerleşme", level: "B2", topic: "Tarih",
    family: { noun: "settlement", verb: "settle", adjective: "settled", adverb: null },
    collocations: ["permanent settlement", "early settlement", "establish a settlement"],
    example: "Access to fresh water encouraged permanent settlement near the valley.",
    cloze: "Archaeologists uncovered an early farming ___ beside the lake.",
    distractors: ["contract", "theory", "current"],
    recognitionChoices: ["yerleşim yeri; yerleşme", "akıntı", "sözleşme", "kuram"],
    note: "Tarih bağlamında kasaba/köy benzeri insan yerleşimini anlatır.", active: false
  },
  {
    id: "hi04", lemma: "preserve", type: "word", tr: "korumak, muhafaza etmek", level: "B2", topic: "Tarih",
    family: { noun: "preservation", verb: "preserve", adjective: "preserved", adverb: null },
    collocations: ["preserve historical records", "well-preserved remains", "preservation efforts"],
    example: "The dry climate preserved wooden tools for thousands of years.",
    cloze: "Museums control humidity to ___ delicate manuscripts.",
    distractors: ["distribute", "interpret", "replace"],
    recognitionChoices: ["korumak, muhafaza etmek", "dağıtmak", "yorumlamak", "yerine koymak"],
    note: "Preserve mevcut şeyi bozulmadan korumaktır; conserve kaynak kullanımını da içerebilir.", active: true
  },
  {
    id: "hi05", lemma: "emerge", type: "word", tr: "ortaya çıkmak, belirmek", level: "B2", topic: "Tarih",
    family: { noun: "emergence", verb: "emerge", adjective: "emerging", adverb: null },
    collocations: ["emerge as a power", "gradually emerge", "the emergence of"],
    example: "Several trading centers emerged along the coast during this period.",
    cloze: "A new political system began to ___ after the conflict ended.",
    distractors: ["collapse", "migrate", "remain"],
    recognitionChoices: ["ortaya çıkmak, belirmek", "göç etmek", "çökmek", "aynı kalmak"],
    note: "Emerge intransitive'dir; doğrudan nesne almaz.", active: true
  },
  {
    id: "hi06", lemma: "ancient", type: "word", tr: "antik, çok eski", level: "B2", topic: "Tarih",
    family: { noun: "antiquity", verb: null, adjective: "ancient", adverb: null },
    collocations: ["ancient society", "ancient times", "ancient ruins"],
    example: "Ancient merchants used the route to exchange metals and textiles.",
    cloze: "The inscription provides rare information about ___ religious practices.",
    distractors: ["temporary", "modern", "seasonal"],
    recognitionChoices: ["antik, çok eski", "mevsimlik", "modern", "geçici"],
    note: "Old genel bir kelimedir; ancient özellikle uzak geçmiş için kullanılır.", active: false
  },
  {
    id: "hi07", lemma: "era", type: "word", tr: "çağ, dönem", level: "B2", topic: "Tarih",
    family: { noun: "era", verb: null, adjective: null, adverb: null },
    collocations: ["during the era", "a new era", "the industrial era"],
    example: "Railways transformed trade during the industrial era.",
    cloze: "The invention marked the beginning of a new ___ in communication.",
    distractors: ["border", "layer", "device"],
    recognitionChoices: ["çağ, dönem", "sınır", "katman", "cihaz"],
    note: "Era, belirgin özellik veya olaylarla tanımlanan uzun dönemdir.", active: false
  },
  {
    id: "hi08", lemma: "archaeological", type: "word", tr: "arkeolojik", level: "C1", topic: "Tarih",
    family: { noun: "archaeology", verb: null, adjective: "archaeological", adverb: null },
    collocations: ["archaeological evidence", "archaeological site", "archaeological excavation"],
    example: "Archaeological evidence indicates that the harbor was once much larger.",
    cloze: "The construction project was delayed after workers found an ___ site.",
    distractors: ["economic", "agricultural", "atmospheric"],
    recognitionChoices: ["arkeolojik", "atmosferik", "tarımsal", "ekonomik"],
    note: "Archaeology /ˌɑːrkiˈɒlədʒi/ yazımında ae sırasına dikkat et.", active: false
  },
  {
    id: "hi09", lemma: "conquest", type: "word", tr: "fetih, ele geçirme", level: "C1", topic: "Tarih",
    family: { noun: "conquest", verb: "conquer", adjective: "conquered", adverb: null },
    collocations: ["military conquest", "conquest of territory", "conquer a region"],
    example: "Military conquest brought the two previously separate regions under one ruler.",
    cloze: "The ___ altered local systems of taxation and land ownership.",
    distractors: ["migration", "harvest", "agreement"],
    recognitionChoices: ["fetih, ele geçirme", "hasat", "göç", "anlaşma"],
    note: "Conquest isim, conquer fiildir; yazımları birebir aynı değildir.", active: false
  },
  {
    id: "hi10", lemma: "migration", type: "word", tr: "göç", level: "B2", topic: "Tarih",
    family: { noun: "migration", verb: "migrate", adjective: "migratory", adverb: null },
    collocations: ["human migration", "patterns of migration", "migrate to a region"],
    example: "Climate shifts may have influenced patterns of human migration.",
    cloze: "Seasonal ___ connected inland communities with coastal markets.",
    distractors: ["irrigation", "legislation", "erosion"],
    recognitionChoices: ["göç", "erozyon", "sulama", "mevzuat"],
    note: "Migrate to bir yere göç etmek; migrate from bir yerden göç etmek.", active: true
  },

  {
    id: "am01", lemma: "depict", type: "word", tr: "tasvir etmek, betimlemek", level: "C1", topic: "Sanat ve Müzik",
    family: { noun: "depiction", verb: "depict", adjective: "depictive", adverb: null },
    collocations: ["depict a scene", "accurately depict", "a visual depiction"],
    example: "The mural depicts workers rebuilding the city after the fire.",
    cloze: "The artist used bright colors to ___ a crowded festival.",
    distractors: ["restore", "measure", "conceal"],
    recognitionChoices: ["tasvir etmek, betimlemek", "gizlemek", "ölçmek", "restore etmek"],
    note: "Depict özellikle görsel veya edebî temsiller için kullanılır.", active: true
  },
  {
    id: "am02", lemma: "composition", type: "word", tr: "kompozisyon; beste", level: "B2", topic: "Sanat ve Müzik",
    family: { noun: "composition", verb: "compose", adjective: "compositional", adverb: "compositionally" },
    collocations: ["musical composition", "visual composition", "compose a piece"],
    example: "The composition balances several instruments without allowing one to dominate.",
    cloze: "The diagonal lines give the painting's ___ a sense of movement.",
    distractors: ["admission", "circulation", "ownership"],
    recognitionChoices: ["kompozisyon; beste", "dolaşım", "mülkiyet", "kabul/giriş"],
    note: "Sanatta görsel düzeni, müzikte bestelenmiş eseri anlatabilir.", active: false
  },
  {
    id: "am03", lemma: "technique", type: "word", tr: "teknik, uygulama yöntemi", level: "B2", topic: "Sanat ve Müzik",
    family: { noun: "technique", verb: null, adjective: "technical", adverb: "technically" },
    collocations: ["painting technique", "develop a technique", "traditional technique"],
    example: "The sculptor developed a technique for creating extremely thin metal forms.",
    cloze: "Artists passed the weaving ___ from one generation to the next.",
    distractors: ["budget", "audience", "theory"],
    recognitionChoices: ["teknik, uygulama yöntemi", "bütçe", "seyirci", "kuram"],
    note: "Technique belirli bir işi yapma yoludur; technology araç ve sistemlere daha yakındır.", active: true
  },
  {
    id: "am04", lemma: "aesthetic", type: "word", tr: "estetik; güzellik anlayışıyla ilgili", level: "C1", topic: "Sanat ve Müzik",
    family: { noun: "aesthetics", verb: null, adjective: "aesthetic", adverb: "aesthetically" },
    collocations: ["aesthetic value", "aesthetic appeal", "aesthetically pleasing"],
    example: "The building has aesthetic value as well as practical importance.",
    cloze: "The designer chose natural materials for both functional and ___ reasons.",
    distractors: ["legal", "seasonal", "chemical"],
    recognitionChoices: ["estetik; güzellik anlayışıyla ilgili", "yasal", "kimyasal", "mevsimsel"],
    note: "Yazımı ae ile başlar; American English'te de aesthetic yaygındır.", active: false
  },
  {
    id: "am05", lemma: "interpretation", type: "word", tr: "yorum, yorumlama", level: "B2", topic: "Sanat ve Müzik",
    family: { noun: "interpretation", verb: "interpret", adjective: "interpretive", adverb: "interpretively" },
    collocations: ["a convincing interpretation", "open to interpretation", "interpret a work"],
    example: "Her interpretation emphasizes the loneliness of the central figure.",
    cloze: "The poem allows more than one reasonable ___.",
    distractors: ["measurement", "instruction", "permission"],
    recognitionChoices: ["yorum, yorumlama", "ölçüm", "talimat", "izin"],
    note: "Interpretation, eserin ne anlama geldiğine dair açıklamadır.", active: true
  },
  {
    id: "am06", lemma: "movement", type: "word", tr: "sanat akımı; hareket", level: "B2", topic: "Sanat ve Müzik",
    family: { noun: "movement", verb: "move", adjective: null, adverb: null },
    collocations: ["artistic movement", "modernist movement", "influence a movement"],
    example: "The artistic movement rejected the strict conventions of earlier painting.",
    cloze: "The exhibition traces the ___ from its local origins to international influence.",
    distractors: ["instrument", "texture", "portrait"],
    recognitionChoices: ["sanat akımı; hareket", "enstrüman", "doku", "portre"],
    note: "Sanat tarihinde movement ortak ilke ve üsluba sahip akımdır.", active: false
  },
  {
    id: "am07", lemma: "influence", type: "word", tr: "etkilemek; etki", level: "B2", topic: "Sanat ve Müzik",
    family: { noun: "influence", verb: "influence", adjective: "influential", adverb: null },
    collocations: ["influence an artist", "a major influence on", "highly influential"],
    example: "Folk melodies strongly influenced the composer's later work.",
    cloze: "Local architecture had a clear ___ on the painter's use of geometric forms.",
    distractors: ["restriction", "expense", "ownership"],
    recognitionChoices: ["etkilemek; etki", "kısıtlama", "masraf", "mülkiyet"],
    note: "İsim olarak influence on; fiil olarak doğrudan nesne: influence the artist.", active: true
  },
  {
    id: "am08", lemma: "perform", type: "word", tr: "icra etmek, sahnelemek", level: "B2", topic: "Sanat ve Müzik",
    family: { noun: "performance", verb: "perform", adjective: "performing", adverb: null },
    collocations: ["perform a piece", "live performance", "performing arts"],
    example: "The ensemble performed a piece written for traditional instruments.",
    cloze: "The musicians will ___ the work without a conductor.",
    distractors: ["exhibit", "publish", "translate"],
    recognitionChoices: ["icra etmek, sahnelemek", "sergilemek", "yayımlamak", "çevirmek"],
    note: "Müzik ve sahne sanatında play'den daha geniş ve resmîdir.", active: true
  },
  {
    id: "am09", lemma: "audience", type: "word", tr: "izleyici, dinleyici kitlesi", level: "B2", topic: "Sanat ve Müzik",
    family: { noun: "audience", verb: null, adjective: null, adverb: null },
    collocations: ["reach a wider audience", "target audience", "audience response"],
    example: "Digital recordings allowed the group to reach a wider audience.",
    cloze: "The speaker adjusted her examples to suit a younger ___.",
    distractors: ["committee", "staff", "species"],
    recognitionChoices: ["izleyici, dinleyici kitlesi", "personel", "komite", "tür"],
    note: "Audience tekil biçimde topluluk anlatabilir: The audience was/were impressed.", active: true
  },
  {
    id: "am10", lemma: "conventional", type: "word", tr: "geleneksel, alışılmış", level: "C1", topic: "Sanat ve Müzik",
    family: { noun: "convention", verb: null, adjective: "conventional", adverb: "conventionally" },
    collocations: ["conventional approach", "conventional style", "reject convention"],
    example: "The photographer rejected conventional approaches to portraiture.",
    cloze: "The work combines experimental sound with ___ song structure.",
    distractors: ["accidental", "scarce", "biological"],
    recognitionChoices: ["geleneksel, alışılmış", "tesadüfi", "kıt", "biyolojik"],
    note: "Conventional nötr biçimde yaygın kabul gören yöntemi anlatır.", active: false
  },

  {
    id: "be01", lemma: "demand", type: "word", tr: "talep; talep etmek", level: "B2", topic: "İşletme ve Ekonomi",
    family: { noun: "demand", verb: "demand", adjective: "demanding", adverb: null },
    collocations: ["consumer demand", "meet demand", "demand for a product"],
    example: "Demand for electric bicycles increased as fuel prices rose.",
    cloze: "The company expanded production to meet growing ___.",
    distractors: ["supply", "debt", "waste"],
    recognitionChoices: ["talep; talep etmek", "arz", "borç", "atık"],
    note: "İsim olarak demand for; meet demand talebi karşılamak demektir.", active: true
  },
  {
    id: "be02", lemma: "supply", type: "word", tr: "arz, tedarik; sağlamak", level: "B2", topic: "İşletme ve Ekonomi",
    family: { noun: "supply", verb: "supply", adjective: "supplied", adverb: null },
    collocations: ["supply and demand", "a limited supply", "supply goods to"],
    example: "A limited supply of housing caused rents to rise.",
    cloze: "Local farms ___ fresh produce to restaurants throughout the region.",
    distractors: ["advertise", "owe", "consume"],
    recognitionChoices: ["arz, tedarik; sağlamak", "tüketmek", "borçlu olmak", "reklamını yapmak"],
    note: "Supply someone with something veya supply something to someone.", active: true
  },
  {
    id: "be03", lemma: "consumer", type: "word", tr: "tüketici", level: "B2", topic: "İşletme ve Ekonomi",
    family: { noun: "consumption", verb: "consume", adjective: "consumable", adverb: null },
    collocations: ["consumer behavior", "consumer confidence", "protect consumers"],
    example: "The survey examined how packaging affects consumer behavior.",
    cloze: "Higher prices may reduce ___ interest in nonessential products.",
    distractors: ["employee", "investor", "supplier"],
    recognitionChoices: ["tüketici", "yatırımcı", "tedarikçi", "çalışan"],
    note: "Consumer kişi; consumption tüketim; consume tüketmek.", active: true
  },
  {
    id: "be04", lemma: "revenue", type: "word", tr: "gelir, hasılat", level: "C1", topic: "İşletme ve Ekonomi",
    family: { noun: "revenue", verb: null, adjective: null, adverb: null },
    collocations: ["generate revenue", "annual revenue", "a source of revenue"],
    example: "Ticket sales generate revenue that supports museum programs.",
    cloze: "Online subscriptions became the newspaper's main source of ___.",
    distractors: ["inventory", "labor", "credit"],
    recognitionChoices: ["gelir, hasılat", "iş gücü", "stok", "kredi"],
    note: "Revenue toplam gelirdir; profit masraflar çıktıktan sonraki kârdır.", active: true
  },
  {
    id: "be05", lemma: "incentive", type: "word", tr: "teşvik, özendirici unsur", level: "C1", topic: "İşletme ve Ekonomi",
    family: { noun: "incentive", verb: "incentivize", adjective: "incentivized", adverb: null },
    collocations: ["financial incentive", "provide an incentive", "incentive to invest"],
    example: "Tax reductions provided an incentive for firms to invest in clean energy.",
    cloze: "The bonus gives employees an ___ to improve efficiency.",
    distractors: ["obstacle", "estimate", "permission"],
    recognitionChoices: ["teşvik, özendirici unsur", "engel", "tahmin", "izin"],
    note: "Incentive to do something; bir davranışı daha çekici hâle getiren etkendir.", active: true
  },
  {
    id: "be06", lemma: "expenditure", type: "word", tr: "harcama, gider", level: "C1", topic: "İşletme ve Ekonomi",
    family: { noun: "expenditure", verb: "expend", adjective: null, adverb: null },
    collocations: ["public expenditure", "reduce expenditure", "capital expenditure"],
    example: "Public expenditure on transportation increased during the decade.",
    cloze: "The report recommends reducing unnecessary administrative ___.",
    distractors: ["revenue", "ownership", "productivity"],
    recognitionChoices: ["harcama, gider", "gelir", "mülkiyet", "verimlilik"],
    note: "Expenditure resmî/ekonomik bağlamda spending ile benzer anlamdadır.", active: false
  },
  {
    id: "be07", lemma: "distribute", type: "word", tr: "dağıtmak", level: "B2", topic: "İşletme ve Ekonomi",
    family: { noun: "distribution", verb: "distribute", adjective: "distributive", adverb: null },
    collocations: ["distribute goods", "widely distributed", "distribution network"],
    example: "A regional network distributes goods to small rural stores.",
    cloze: "The cooperative helps farmers ___ their products more efficiently.",
    distractors: ["manufacture", "purchase", "estimate"],
    recognitionChoices: ["dağıtmak", "üretmek", "satın almak", "tahmin etmek"],
    note: "Distribute something to people/places veya among a group.", active: true
  },
  {
    id: "be08", lemma: "productivity", type: "word", tr: "üretkenlik, verimlilik", level: "C1", topic: "İşletme ve Ekonomi",
    family: { noun: "productivity", verb: "produce", adjective: "productive", adverb: "productively" },
    collocations: ["increase productivity", "labor productivity", "highly productive"],
    example: "Improved equipment increased productivity without extending working hours.",
    cloze: "Frequent interruptions can reduce workplace ___.",
    distractors: ["inequality", "revenue", "demand"],
    recognitionChoices: ["üretkenlik, verimlilik", "eşitsizlik", "gelir", "talep"],
    note: "Productivity çıktı/verim oranını; production toplam üretimi anlatır.", active: true
  },
  {
    id: "be09", lemma: "scarce", type: "word", tr: "kıt, yetersiz", level: "C1", topic: "İşletme ve Ekonomi",
    family: { noun: "scarcity", verb: null, adjective: "scarce", adverb: null },
    collocations: ["scarce resources", "increasingly scarce", "resource scarcity"],
    example: "When water is scarce, households must make difficult choices.",
    cloze: "Competition intensifies when essential resources become ___.",
    distractors: ["abundant", "stable", "profitable"],
    recognitionChoices: ["kıt, yetersiz", "bol", "istikrarlı", "kârlı"],
    note: "Scarcely 'neredeyse hiç' demektir; scarce'ın doğrudan derece zarfı gibi düşünme.", active: true
  },
  {
    id: "be10", lemma: "regulate", type: "word", tr: "düzenlemek, kurallarla denetlemek", level: "C1", topic: "İşletme ve Ekonomi",
    family: { noun: "regulation", verb: "regulate", adjective: "regulatory", adverb: null },
    collocations: ["regulate an industry", "government regulation", "regulatory agency"],
    example: "The agency regulates firms that provide essential public services.",
    cloze: "Some governments ___ prices in order to protect consumers.",
    distractors: ["predict", "import", "advertise"],
    recognitionChoices: ["düzenlemek, kurallarla denetlemek", "ithal etmek", "reklamını yapmak", "tahmin etmek"],
    note: "Regulate, yalnızca organize etmek değil kurallarla kontrol etmektir.", active: true
  },

  {
    id: "ls01", lemma: "organism", type: "word", tr: "organizma, canlı", level: "B2", topic: "Yaşam Bilimleri",
    family: { noun: "organism", verb: null, adjective: null, adverb: null },
    collocations: ["living organism", "single-celled organism", "marine organism"],
    example: "Each organism responds differently to changes in temperature.",
    cloze: "The microscopic ___ obtains energy from chemical compounds.",
    distractors: ["particle", "instrument", "artifact"],
    recognitionChoices: ["organizma, canlı", "parçacık", "enstrüman", "tarihî eser"],
    note: "Organism tek bir canlıdır; organization kurum veya düzenleme demektir.", active: true
  },
  {
    id: "ls02", lemma: "species", type: "word", tr: "tür", level: "B2", topic: "Yaşam Bilimleri",
    family: { noun: "species", verb: null, adjective: null, adverb: null },
    collocations: ["endangered species", "native species", "a species of bird"],
    example: "The island supports several species found nowhere else.",
    cloze: "The introduced ___ competed with native birds for food.",
    distractors: ["habitat", "trait", "organ"],
    recognitionChoices: ["tür", "yaşam alanı", "özellik", "organ"],
    note: "Species hem tekil hem çoğul biçimde aynıdır: one species, many species.", active: true
  },
  {
    id: "ls03", lemma: "habitat", type: "word", tr: "yaşam alanı", level: "B2", topic: "Yaşam Bilimleri",
    family: { noun: "habitat", verb: "inhabit", adjective: "habitable", adverb: null },
    collocations: ["natural habitat", "habitat loss", "protect a habitat"],
    example: "Wetland restoration created habitat for migrating birds.",
    cloze: "Road construction divided the animal's ___ into isolated areas.",
    distractors: ["diet", "offspring", "population"],
    recognitionChoices: ["yaşam alanı", "beslenme düzeni", "yavru/döl", "nüfus/popülasyon"],
    note: "Habitat türün yaşadığı fiziksel çevredir; inhabit o yerde yaşamak demektir.", active: true
  },
  {
    id: "ls04", lemma: "adaptation", type: "word", tr: "uyum; uyumsal özellik", level: "B2", topic: "Yaşam Bilimleri",
    family: { noun: "adaptation", verb: "adapt", adjective: "adaptive", adverb: "adaptively" },
    collocations: ["evolutionary adaptation", "adaptation to climate", "an adaptive trait"],
    example: "Thick fur is an adaptation to extremely cold environments.",
    cloze: "The plant's deep roots are an important ___ to drought.",
    distractors: ["mutation", "nutrition", "interaction"],
    recognitionChoices: ["uyum; uyumsal özellik", "beslenme", "etkileşim", "mutasyon"],
    note: "Biyolojide adaptation süreç veya uyum sağlayan özellik olabilir.", active: true
  },
  {
    id: "ls05", lemma: "trait", type: "word", tr: "özellik, nitelik", level: "C1", topic: "Yaşam Bilimleri",
    family: { noun: "trait", verb: null, adjective: null, adverb: null },
    collocations: ["inherited trait", "adaptive trait", "behavioral trait"],
    example: "The ability to store water is a useful trait in dry regions.",
    cloze: "Researchers investigated whether the ___ was inherited or learned.",
    distractors: ["habitat", "nutrient", "predator"],
    recognitionChoices: ["özellik, nitelik", "avcı hayvan", "besin maddesi", "yaşam alanı"],
    note: "Trait özellikle biyolojik veya kişilik özelliği için kullanılır.", active: true
  },
  {
    id: "ls06", lemma: "reproduce", type: "word", tr: "üremek; yeniden üretmek", level: "B2", topic: "Yaşam Bilimleri",
    family: { noun: "reproduction", verb: "reproduce", adjective: "reproductive", adverb: "reproductively" },
    collocations: ["reproduce rapidly", "reproductive success", "asexual reproduction"],
    example: "The insects reproduce rapidly when food is abundant.",
    cloze: "Some plants can ___ without producing seeds.",
    distractors: ["migrate", "absorb", "compete"],
    recognitionChoices: ["üremek; yeniden üretmek", "göç etmek", "emmek", "rekabet etmek"],
    note: "Canlılarda reproduce üremek; bir sonuçta reproduce yeniden elde etmek olabilir.", active: true
  },
  {
    id: "ls07", lemma: "survive", type: "word", tr: "hayatta kalmak, varlığını sürdürmek", level: "B2", topic: "Yaşam Bilimleri",
    family: { noun: "survival", verb: "survive", adjective: "surviving", adverb: null },
    collocations: ["survive harsh conditions", "chance of survival", "survive on a diet"],
    example: "Only a few seedlings survive the region's dry season.",
    cloze: "The bacteria can ___ for months without direct sunlight.",
    distractors: ["evolve", "expand", "decay"],
    recognitionChoices: ["hayatta kalmak, varlığını sürdürmek", "çürümek", "genişlemek", "evrimleşmek"],
    note: "Survive doğrudan nesne alabilir: survive a drought; ayrıca survive in/on kullanılır.", active: true
  },
  {
    id: "ls08", lemma: "ecosystem", type: "word", tr: "ekosistem", level: "B2", topic: "Yaşam Bilimleri",
    family: { noun: "ecosystem", verb: null, adjective: null, adverb: null },
    collocations: ["marine ecosystem", "a fragile ecosystem", "ecosystem services"],
    example: "Removing one predator can affect the entire ecosystem.",
    cloze: "Pollution disrupted the balance of the river ___.",
    distractors: ["climate", "species", "organism"],
    recognitionChoices: ["ekosistem", "iklim", "tür", "organizma"],
    note: "Ecosystem canlılar ile fiziksel çevrelerinin etkileşimli bütünüdür.", active: false
  },
  {
    id: "ls09", lemma: "nutrient", type: "word", tr: "besin maddesi", level: "C1", topic: "Yaşam Bilimleri",
    family: { noun: "nutrient", verb: "nourish", adjective: "nutritional", adverb: "nutritionally" },
    collocations: ["essential nutrient", "nutrient-rich soil", "absorb nutrients"],
    example: "Plant roots absorb nutrients from the surrounding soil.",
    cloze: "Nitrogen is an essential ___ for plant growth.",
    distractors: ["enzyme", "tissue", "habitat"],
    recognitionChoices: ["besin maddesi", "doku", "enzim", "yaşam alanı"],
    note: "Nutrient madde; nutritious besleyici yiyecek; nutritional beslenmeyle ilgili.", active: true
  },
  {
    id: "ls10", lemma: "biodiversity", type: "word", tr: "biyolojik çeşitlilik", level: "C1", topic: "Yaşam Bilimleri",
    family: { noun: "biodiversity", verb: null, adjective: "biodiverse", adverb: null },
    collocations: ["protect biodiversity", "loss of biodiversity", "biodiversity hotspot"],
    example: "Tropical forests contain exceptionally high levels of biodiversity.",
    cloze: "Habitat destruction remains a major threat to global ___.",
    distractors: ["productivity", "inequality", "density"],
    recognitionChoices: ["biyolojik çeşitlilik", "yoğunluk", "eşitsizlik", "üretkenlik"],
    note: "Biodiversity bir bölgedeki gen, tür ve ekosistem çeşitliliğini kapsar.", active: true
  },

  {
    id: "ps01", lemma: "matter", type: "word", tr: "madde", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "matter", verb: "matter", adjective: null, adverb: null },
    collocations: ["state of matter", "organic matter", "matter consists of"],
    example: "Matter can change state when heat is added or removed.",
    cloze: "All ___ is composed of atoms and smaller particles.",
    distractors: ["energy", "gravity", "light"],
    recognitionChoices: ["madde", "enerji", "yerçekimi", "ışık"],
    note: "Bilimde matter madde; günlük dilde fiil olarak 'önemli olmak'tır.", active: true
  },
  {
    id: "ps02", lemma: "energy", type: "word", tr: "enerji", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "energy", verb: "energize", adjective: "energetic", adverb: "energetically" },
    collocations: ["release energy", "energy transfer", "renewable energy"],
    example: "The reaction releases energy in the form of heat.",
    cloze: "Solar panels convert light into electrical ___.",
    distractors: ["matter", "pressure", "density"],
    recognitionChoices: ["enerji", "basınç", "yoğunluk", "madde"],
    note: "Energy is uncountable: much energy; energies farklı tür/çabalar için özel kullanımdır.", active: true
  },
  {
    id: "ps03", lemma: "particle", type: "word", tr: "parçacık", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "particle", verb: null, adjective: "particulate", adverb: null },
    collocations: ["subatomic particle", "dust particle", "particle motion"],
    example: "Higher temperatures cause particles to move more rapidly.",
    cloze: "Each charged ___ produces a small electric field.",
    distractors: ["layer", "compound", "surface"],
    recognitionChoices: ["parçacık", "katman", "bileşik", "yüzey"],
    note: "Particle çok küçük madde parçasıdır; particulate sıfat veya parçacıklı madde adıdır.", active: false
  },
  {
    id: "ps04", lemma: "absorb", type: "word", tr: "emmek, soğurmak", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "absorption", verb: "absorb", adjective: "absorbent", adverb: null },
    collocations: ["absorb heat", "absorb radiation", "high absorption rate"],
    example: "Dark surfaces absorb more solar radiation than light surfaces.",
    cloze: "The material can ___ moisture from the surrounding air.",
    distractors: ["reflect", "release", "conduct"],
    recognitionChoices: ["emmek, soğurmak", "yansıtmak", "salmak", "iletmek"],
    note: "Absorbent emici madde; absorptive soğurma kapasitesiyle ilgili sıfattır.", active: true
  },
  {
    id: "ps05", lemma: "release", type: "word", tr: "serbest bırakmak, salmak", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "release", verb: "release", adjective: "released", adverb: null },
    collocations: ["release energy", "release heat", "release a gas"],
    example: "The cooling material slowly releases the heat it previously absorbed.",
    cloze: "Volcanoes ___ gases and fine particles into the atmosphere.",
    distractors: ["measure", "convert", "compress"],
    recognitionChoices: ["serbest bırakmak, salmak", "ölçmek", "dönüştürmek", "sıkıştırmak"],
    note: "Bilimde release energy/heat/gas çok sık geçen kalıplardır.", active: true
  },
  {
    id: "ps06", lemma: "convert", type: "word", tr: "dönüştürmek", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "conversion", verb: "convert", adjective: "convertible", adverb: null },
    collocations: ["convert energy into", "convert from one form to another", "energy conversion"],
    example: "The device converts mechanical energy into electricity.",
    cloze: "Plants ___ light energy into chemical energy.",
    distractors: ["divide", "reflect", "estimate"],
    recognitionChoices: ["dönüştürmek", "bölmek", "yansıtmak", "tahmin etmek"],
    note: "Convert A into B: A'yı B'ye dönüştürmek.", active: true
  },
  {
    id: "ps07", lemma: "layer", type: "word", tr: "katman, tabaka", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "layer", verb: "layer", adjective: "layered", adverb: null },
    collocations: ["outer layer", "thin layer", "layer of sediment"],
    example: "A thin layer of ice formed on the surface overnight.",
    cloze: "Each ___ of rock records a different period of geological history.",
    distractors: ["current", "compound", "particle"],
    recognitionChoices: ["katman, tabaka", "akıntı", "bileşik", "parçacık"],
    note: "A layer of + madde: a layer of dust/sediment/ice.", active: true
  },
  {
    id: "ps08", lemma: "temperature", type: "word", tr: "sıcaklık", level: "B2", topic: "Fiziksel Bilimler",
    family: { noun: "temperature", verb: null, adjective: "thermal", adverb: "thermally" },
    collocations: ["room temperature", "temperature rises", "a drop in temperature"],
    example: "The reaction occurs only within a narrow temperature range.",
    cloze: "Water changes state when its ___ crosses certain thresholds.",
    distractors: ["volume", "density", "surface"],
    recognitionChoices: ["sıcaklık", "hacim", "yoğunluk", "yüzey"],
    note: "Everyday adjective hot/cold; bilimsel sıfat thermal çoğu birleşimde daha doğaldır.", active: true
  },
  {
    id: "ps09", lemma: "compound", type: "word", tr: "bileşik", level: "C1", topic: "Fiziksel Bilimler",
    family: { noun: "compound", verb: "compound", adjective: "compound", adverb: null },
    collocations: ["chemical compound", "organic compound", "a compound formed from"],
    example: "The compound consists of carbon, hydrogen, and oxygen.",
    cloze: "Heating the ___ caused it to separate into simpler substances.",
    distractors: ["particle", "surface", "current"],
    recognitionChoices: ["bileşik", "parçacık", "yüzey", "akıntı/akım"],
    note: "Kimyada compound iki veya daha fazla elementin kimyasal birleşimidir.", active: false
  },
  {
    id: "ps10", lemma: "density", type: "word", tr: "yoğunluk", level: "C1", topic: "Fiziksel Bilimler",
    family: { noun: "density", verb: null, adjective: "dense", adverb: "densely" },
    collocations: ["high density", "population density", "density of a material"],
    example: "Ice floats because its density is lower than that of liquid water.",
    cloze: "Scientists calculated the object's ___ from its mass and volume.",
    distractors: ["temperature", "energy", "pressure"],
    recognitionChoices: ["yoğunluk", "basınç", "sıcaklık", "enerji"],
    note: "Dense sıfat; density isimdir. Population density sosyal bilimlerde de geçer.", active: true
  },

  {
    id: "ss01", lemma: "behavior", type: "word", tr: "davranış", level: "B2", topic: "Sosyal Bilimler",
    family: { noun: "behavior", verb: "behave", adjective: "behavioral", adverb: "behaviorally" },
    collocations: ["human behavior", "consumer behavior", "behavioral change"],
    example: "Social expectations can influence behavior even without formal rules.",
    cloze: "The experiment examined how group size affects individual ___.",
    distractors: ["identity", "income", "policy"],
    recognitionChoices: ["davranış", "kimlik", "gelir", "politika"],
    note: "US spelling behavior; UK spelling behaviour. TOEFL'da ikisi de anlaşılır.", active: true
  },
  {
    id: "ss02", lemma: "cognition", type: "word", tr: "biliş, zihinsel süreç", level: "C2", topic: "Sosyal Bilimler",
    family: { noun: "cognition", verb: null, adjective: "cognitive", adverb: "cognitively" },
    collocations: ["human cognition", "cognitive development", "cognitive ability"],
    example: "Sleep plays an important role in memory and cognition.",
    cloze: "The study explores the relationship between language and ___.",
    distractors: ["inequality", "migration", "legislation"],
    recognitionChoices: ["biliş, zihinsel süreç", "eşitsizlik", "göç", "mevzuat"],
    note: "Cognition düşünme, öğrenme, hatırlama ve algılama süreçlerini kapsar.", active: false
  },
  {
    id: "ss03", lemma: "perception", type: "word", tr: "algı, algılama", level: "C1", topic: "Sosyal Bilimler",
    family: { noun: "perception", verb: "perceive", adjective: "perceptive", adverb: "perceptively" },
    collocations: ["public perception", "visual perception", "perceive a difference"],
    example: "Media coverage can shape public perception of scientific risk.",
    cloze: "Color and lighting influence a viewer's ___ of space.",
    distractors: ["motivation", "ownership", "income"],
    recognitionChoices: ["algı, algılama", "motivasyon", "mülkiyet", "gelir"],
    note: "Perceive fiili bir şeyi fark etmek/algılamak; perception bunun ismidir.", active: true
  },
  {
    id: "ss04", lemma: "culture", type: "word", tr: "kültür", level: "B2", topic: "Sosyal Bilimler",
    family: { noun: "culture", verb: null, adjective: "cultural", adverb: "culturally" },
    collocations: ["cultural values", "popular culture", "culturally diverse"],
    example: "Food practices communicate values within a culture.",
    cloze: "The researchers compared attitudes across several different ___.",
    distractors: ["policies", "markets", "species"],
    recognitionChoices: ["kültür", "politika", "pazar", "tür"],
    note: "Culture sayılabilir olabilir: different cultures; genel kavramda sayılamaz.", active: true
  },
  {
    id: "ss05", lemma: "inequality", type: "word", tr: "eşitsizlik", level: "C1", topic: "Sosyal Bilimler",
    family: { noun: "inequality", verb: null, adjective: "unequal", adverb: "unequally" },
    collocations: ["income inequality", "reduce inequality", "social inequality"],
    example: "Unequal access to education can reinforce economic inequality.",
    cloze: "The policy was designed to reduce regional ___.",
    distractors: ["interaction", "productivity", "identity"],
    recognitionChoices: ["eşitsizlik", "etkileşim", "üretkenlik", "kimlik"],
    note: "Inequality isim; unequal sıfat. Equality'nin olumsuz biçimidir.", active: true
  },
  {
    id: "ss06", lemma: "policy", type: "word", tr: "politika, kurumca benimsenen ilke", level: "B2", topic: "Sosyal Bilimler",
    family: { noun: "policy", verb: null, adjective: "policy-related", adverb: null },
    collocations: ["public policy", "implement a policy", "policy decision"],
    example: "The housing policy increased the supply of affordable apartments.",
    cloze: "A successful ___ requires clear goals and consistent implementation.",
    distractors: ["identity", "community", "perception"],
    recognitionChoices: ["politika, kurumca benimsenen ilke", "kimlik", "topluluk", "algı"],
    note: "Policy ilke/eylem planıdır; politics siyaset sürecidir.", active: true
  },
  {
    id: "ss07", lemma: "community", type: "word", tr: "topluluk, toplum", level: "B2", topic: "Sosyal Bilimler",
    family: { noun: "community", verb: null, adjective: "communal", adverb: "communally" },
    collocations: ["local community", "community support", "a sense of community"],
    example: "The project succeeded because the local community helped shape it.",
    cloze: "Shared public spaces can strengthen a sense of ___.",
    distractors: ["competition", "ownership", "authority"],
    recognitionChoices: ["topluluk, toplum", "rekabet", "mülkiyet", "yetki"],
    note: "Community ortak yer, kimlik veya çıkar paylaşan insan grubudur.", active: true
  },
  {
    id: "ss08", lemma: "interaction", type: "word", tr: "etkileşim", level: "B2", topic: "Sosyal Bilimler",
    family: { noun: "interaction", verb: "interact", adjective: "interactive", adverb: "interactively" },
    collocations: ["social interaction", "interaction between groups", "interact with others"],
    example: "Informal interaction helps new employees learn workplace norms.",
    cloze: "The study recorded every ___ between the teacher and students.",
    distractors: ["inequality", "migration", "assumption"],
    recognitionChoices: ["etkileşim", "eşitsizlik", "göç", "varsayım"],
    note: "Interaction between A and B; interact with a person/system.", active: true
  },
  {
    id: "ss09", lemma: "motivation", type: "word", tr: "motivasyon, güdü", level: "B2", topic: "Sosyal Bilimler",
    family: { noun: "motivation", verb: "motivate", adjective: "motivated", adverb: null },
    collocations: ["intrinsic motivation", "motivation to learn", "highly motivated"],
    example: "A sense of progress can increase motivation to continue learning.",
    cloze: "Financial rewards are not the only source of employee ___.",
    distractors: ["perception", "identity", "behavior"],
    recognitionChoices: ["motivasyon, güdü", "algı", "kimlik", "davranış"],
    note: "Motivation to do; motivate someone to do biçimleri yaygındır.", active: true
  },
  {
    id: "ss10", lemma: "identity", type: "word", tr: "kimlik, özdeşlik", level: "B2", topic: "Sosyal Bilimler",
    family: { noun: "identity", verb: "identify", adjective: "identifiable", adverb: null },
    collocations: ["cultural identity", "sense of identity", "shape an identity"],
    example: "Language can be an important part of cultural identity.",
    cloze: "Migration may reshape a person's sense of ___.",
    distractors: ["authority", "income", "cognition"],
    recognitionChoices: ["kimlik, özdeşlik", "yetki", "gelir", "biliş"],
    note: "Identity kimlik; identify tespit etmek veya tanımlamak demektir.", active: true
  }
];
