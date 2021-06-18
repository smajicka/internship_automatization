import * as XLSX from 'xlsx';
import {PageObjectFactory} from "./pages/page_factory"


let pageObj = new PageObjectFactory();
let homepage = pageObj.getHomePage();
let my_accountpage = pageObj.getAccountPage();
let registrationpage = pageObj.getRegistrationPage();


export class store_data {

workbook: IWorkBook = read("./store_data")
arrayBuffer: any;
file: File;
event: Event;

async datastore(){
        static var counter = 1;
        var ExcelApp = new ActiveXObject("Excel.Application");
        var ExcelSheet = new ActiveXObject("Excel.Sheet");
        var i = counter; 

        ExcelSheet.ActiveSheet.Cells(i,1).Value = ;
// the sheet is saved
ExcelSheet.SaveAs("D:\\TEST.XLS");
// close Excel with the Quit() method of the Application object 
ExcelSheet.Application.Quit();
    )
}


onFileChange(event: any) {
        this.file= event.target.files[0]; 
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
        };
     }
}