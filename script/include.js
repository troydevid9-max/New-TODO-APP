const pageType = document.body.dataset.layout
// const pageLocation = window.location.pathname


const load = async (id, file) => {

    //FETCH THE FILE 

    const response = await fetch(file);

    //PROCESS THE FETCHED RESPONSE

    const data = await response.text();

    //GET THE HEADER DIV 

    const header = document.getElementById(id)

    //SET THE CORRECT HEADER

    header.innerHTML = data;
};

//IF STATEMENTS TO SET THE CIRRECT HEADER AND FOOTER


    if (pageType === "public") {

       load("header", "../COMPONENTS/header.html")
    //    load("footer", "../COMPONENTS/footer.html")





    }

