describe("Turkcell",() => {
  /*
  -- DOKÜMAN
  https://docs.cypress.io/guides/end-to-end-testing
  https://docs.cypress.io/guides/references/assertions
  -- DOKÜMAN

  Mocha'nın syntaxı baz alınmıştır.
  Describe ile context birbirine eşdeğerdir.
  visit = uri ziyareti
  invoke = özünde cypress jquery fonksiyonlarını çalıştırır.
  get = element/obje'ye erişim (HTML attribute dahil)
  contains = içeren/içerenler
  equal = eşitlik kontrolü
  log = logger
  should = Yield onay fonksiyonudur ya geçer ya da geçmez.
  first = ilk eleman
  beforeEach fonksiyonu = Hepsinden önce yapılacak işlemler içindir.
  and = ve anlamına gelir sonrasına aynı şekilde devam edilir.
  qs = query string
  intercept = İzleme veya Api istekleri
  */
 context("Place Holder Api Requests",() => {
  
  it("make a request to placeholder api",()=>{
    cy.intercept("POST","https://jsonplaceholder.typicode.com/users",(req)=>{
      //Yapılacaklar
    })
  })
 })
  context('işTurkcell', () => {
    beforeEach('Visit', () => {
      cy.visit('https://www.turkcell.com.tr/kurumsal')
    })
    it("Visit and Get Logo By Alt",() => {
      cy.get("[alt='Turkcell']")
    })
    it("Visit and Get İncelle Button By Contains",() => {
      cy.contains("a","İncele")
    })
    it("Visit and Get And Click İncelle Button By Href",() => {
      cy.get("[alt='Turkcell']").click()
    })
    it("First Text should be Dijital Dönüşüm Çözümleri",() => {
      cy.get("[class='text-center first-title']").first()
      .invoke('text').then((text) => {
        //expect(true).equal(false)
        expect(text).to.equal("Dijital Dönüşüm Çözümleri")
        cy.log(text)
    });
    })
    it("Visit Kobiler Dijitallesiyor Page and Toggle Modal",()=>{
      //DİKKAT! Exception fırlatır.
      cy.visit("https://www.turkcell.com.tr/kobilerdijitallesiyor")
    })
    it("işTurkcell Logo should be visible",()=>{
      cy.get("[alt='Turkcell']").should("be.visible")
    })
    it("işTurkcell Logo should be hidden",()=>{
      cy.get("[alt='Turkcell']").should("be.hidden")
    })
    it("işTurkcell Logo should be visible and have class",()=>{
      cy.get("[alt='Turkcell']").should("be.visible")
      .and("have.class","ornek_test")
    })
    it("işTurkcell Başvuru fill firstname",()=>{
      cy.visit("https://www.turkcell.com.tr/tr/kurumsal/form/kurumsal-urun-basvuru-formu?urun=turkcell-esnaf-2")
      cy.get("#input_0").type("Muhammet")
    })
    it("search",()=>{
      cy.visit("https://www.turkcell.com.tr/kurumsal/arama?c=Kurumsal&c=Kurumsal",{ timeout: 1500,
      qs: {
        qx: 'Mehmet'
      },
    })
      .its("navigator.language")
      .should("eq","en-US")
    })
  })
})
