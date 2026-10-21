const SPOT_DATA = {
    theme: "history",
    hero: {
        coverImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b3a9b?auto=format&fit=crop&w=1600&q=80",
        category: "Saray Müzesi & Cihan Devleti Mirası",
        badge: "UNESCO Dünya Mirası",
        title: "Topkapı Sarayı Müzesi",
        subtitle: "600 yıllık Osmanlı İmparatorluğu'nun 400 yıl boyunca yönetim merkezi, padişahların ikametgahı ve paha biçilemez dünya hazinelerinin adresi.",
        stats: [
            { label: "Yapım Yılı", value: "1478" },
            { label: "Yaptıran", value: "Fatih Sultan Mehmet" },
            { label: "Yüzölçümü", value: "700.000 m²" },
            { label: "Konum", value: "Sarayburnu / Fatih" }
        ]
    },
    summary: {
        typeTitle: "Osmanlı Cihan Devleti Merkezi",
        description: "İstanbul'un fethinden sonra Fatih Sultan Mehmet tarafından yaptırılan Topkapı Sarayı; Bab-ı Hümayun, Divan-ı Hümayun, Harem Dairesi ve Mukaddes Emanetler Dairesi gibi görkemli yapılarıyla Osmanlı devlet felsefesini simgeler.",
        badges: [
            { icon: "fa-solid fa-clock", text: "Ziyaret Saatleri: 09:00 - 18:00" },
            { icon: "fa-solid fa-ticket", text: "Müzekart Geçerlidir (Harem Hariç)" },
            { icon: "fa-solid fa-calendar-xmark", text: "Salı Günleri Kapalıdır" }
        ]
    },
    overview: {
        paragraphs: [
            "Topkapı Sarayı, Doğu Roma akropolü üzerine kurulmuş olup Sarayburnu sırtlarında Marmara Denizi, Boğaziçi ve Haliç'e hakim muhteşem bir konumda yer alır. Yaklaşık 400 yıl boyunca Osmanlı Sultanlarının resmi ikametgahı ve devletin idari merkezi olan saray, 1924 yılında Cumhuriyet'in ilk müzesi olarak ziyarete açılmıştır.",
            "Saray kompleksi; Bab-ı Hümayun, Alay Meydanı, Divan Meydanı, Enderun Avlusu ve dördüncü avlu olmak üzere kademeli bir yapıda tasarlanmıştır. İçerisinde Kaşıkçı Elması, Topkapı Hançeri, Hazreti Muhammed'in kutsal emanetleri, Çin porselenleri ve padişah elbiseleri gibi paha biçilmez koleksiyonlar sergilenmektedir."
        ],
        visitorNotes: [
            { title: "Müzekart Bilgisi", description: "T.C. vatandaşları için Müzekart geçerlidir. Harem bölümü ve Aya İrini için ek bilet alınması gerekmektedir." },
            { title: "Kutsal Emanetler", description: "Kutsal Emanetler dairesinde uygun kıyafet (omuz ve dizleri kapatan) giyilmesi zorunludur." },
            { title: "Ziyaret Süresi", description: "Sarayın tüm avlularını ve Harem dairesini gezmek için en az 3-4 saat ayırmanız önerilir." },
            { title: "Güvenlik Kontrolü", description: "Girişte x-ray güvenlik araması yapıldığından sıra oluşabilir; sabah erken saatler tercih edilebilir." }
        ]
    },
    whyVisit: [
        { icon: "fa-solid fa-gem", title: "Paha Biçilemez Hazineler", description: "86 karatlık Kaşıkçı Elması, Topkapı Hançeri ve Som Altın Tahtlar gibi büyüleyici kraliyet hazinelerini inceleyin." },
        { icon: "fa-solid fa-hands-praying", title: "Mukaddes Emanetler", description: "Hz. Muhammed'in Hırka-i Şerif'i, Sancağı ve Dört Halife'ye ait kılıçların yer aldığı kutsal mekan." },
        { icon: "fa-solid fa-crown", title: "Gizemli Harem Dairesi", description: "Padişah ailesinin ve haseki sultanların yaşadığı, İznik çinileriyle süslü büyüleyici koridorlar ve odalar." }
    ],
    mustSee: [
        { image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b3a9b?auto=format&fit=crop&w=600&q=80", title: "Bab-üs Selam (Selam Kapısı)", description: "Kuleli görkemli kapı; sarayın ikinci avlusuna ve divan alanına geçiş sağlar." },
        { image: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=600&q=80", title: "Harem Dairesi", description: "III. Murad Has Odası ve Valide Sultan Dairesi ile büyüleyici Osmanlı çini sanatı." },
        { image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80", title: "Kubbealtı (Divan-ı Hümayun)", description: "Sadrazam ve vezirlerin devlet işlerini görüştüğü adalet kulesi altındaki tarihi meclis." },
        { image: "https://images.unsplash.com/photo-1527838832766-51d7f37c9fd9?auto=format&fit=crop&w=600&q=80", title: "Mecidiye Köşkü ve Teras", description: "4. Avluda Boğaz ve Marmara Denizi'nin büyüleyici panoramik manzarasını sunan son Osmanlı köşkü." }
    ],
    transportation: {
        methods: [
            { icon: "fa-solid fa-train-tram", title: "T1 Tramvay Hattı", detail: "Bağcılar - Kabataş T1 tramvayı ile 'Gülhane' veya 'Sultanahmet' durağında inip 5 dakika yürüyebilirsiniz." },
            { icon: "fa-solid fa-train", title: "Marmaray", detail: "Sirkeci istasyonunda inip Cağaloğlu veya Gülhane Parkı çıkışından yürüyerek saraya ulaşabilirsiniz." },
            { icon: "fa-solid fa-bus", title: "Otobüs & Minibüs", detail: "Eminönü yönüne gelen otobüslerle gelip Gülhane Parkı içerisinden tırmanarak saraya geçebilirsiniz." }
        ],
        tip: "Saray etrafı araç trafiğine kapalıdır. Gülhane Parkı içinden yürümek manzara ve atmosfer açısından en keyifli yoldur.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Topkapi+Sarayi+Muzesi+Sultanahmet+Fatih+Istanbul"
    },
    whereToStay: [
        { name: "Four Seasons Hotel Sultanahmet", type: "Lüks Tarihi Otel", rating: "4.9", link: "https://www.google.com/travel/hotels?q=Four+Seasons+Hotel+Istanbul+at+Sultanahmet" },
        { name: "Sura Hagia Sophia Hotel", type: "5 Yıldızlı Konaklama", rating: "4.7", link: "https://www.google.com/travel/hotels?q=Sura+Hagia+Sophia+Hotel+Istanbul" },
        { name: "Sirkeçi Mansion", type: "Osmanlı Butik Oteli", rating: "4.8", link: "https://www.google.com/travel/hotels?q=Sirkeci+Mansion+Istanbul" }
    ],
    whereToEat: [
        { name: "Konyalı Restaurant Topkapı Sarayı", cuisine: "Osmanlı Saray Mutfağı & Boğaz Manzarası", rating: "4.5", link: "https://www.google.com/maps/search/?api=1&query=Konyali+Restaurant+Topkapi+Sarayi" },
        { name: "Pandeli Restaurant Eminönü", cuisine: "Tarihi Osmanlı Türk Mutfağı", rating: "4.6", link: "https://www.google.com/maps/search/?api=1&query=Pandeli+Restaurant+Eminonu" },
        { name: "Matbah Ottoman Cuisine", cuisine: "Klasik Saray Lezzetleri", rating: "4.5", link: "https://www.google.com/maps/search/?api=1&query=Matbah+Ottoman+Cuisine+Istanbul" }
    ]
};