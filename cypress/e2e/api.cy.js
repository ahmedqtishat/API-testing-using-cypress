///<reference types = "cypress"/>
describe('this to test api-books POST & GET & DELETE', () => {

    let RandomISbn = Math.floor(Math.random() * 5478745);
    let Randomaisle = Math.floor(Math.random() * 5478745);
  


let Body ={
    name:"Qa private Zoom",
    isbn:RandomISbn,
    aisle:Randomaisle,
    author:"Sumaya - Qa- Autoamtion"
    }


    it('Test the POST request', () => {
        let BASEURL= "https://rahulshettyacademy.com/Library/Addbook.php";


        cy.request({
            method:"POST",
            url:BASEURL,
            body:Body,
        }).then((response)=>{
            cy.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body.Msg).to.eq("successfully added")

        })

        
    });

    it('Test The Get request', () => {
        let BASEURL= `https://rahulshettyacademy.com/Library/GetBook.php?ID=${RandomISbn}${Randomaisle}`;

        cy.request({
            method:"GET",
            url:BASEURL,
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(response.body[0].author)
        })

    });

    it('Test The Delete request', () => {
        let BASEURL= "https://rahulshettyacademy.com/Library/DeleteBook.php"

        cy.request({
            method:"DELETE",
            url:BASEURL,
            body:{ID:`${RandomISbn}${Randomaisle}`}
        }).then((response)=>{
            expect(response.status).to.eq(200)

        })
    });
});