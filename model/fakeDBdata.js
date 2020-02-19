dattenchoFunction_EXPORT=
{
    fakeData: [],
    init(){
        this.fakeData.push({prop1:'this is prop1',pro2:'this is prop1',prop3:'this is prop1'});
    },//function of javacsript NO PARAMETER
    getthisfakeData(){
        console.log('load return this fake data is successfully');
        console.log(`check pro3 ${this.fakeData[0].prop3}`);

        return this.fakeData;
    }
}

dattenchoFunction_EXPORT.init();//KHOI TAO GIA TRI
module.exports=dattenchoFunction_EXPORT;