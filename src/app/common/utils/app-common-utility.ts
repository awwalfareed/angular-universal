import { SelectItem } from 'primeng/primeng';

export class AppCommonUtility {

    static createDropdown(list: any): SelectItem[] {
        const selectItemList: SelectItem[] = [];

        for (const index in list) {
            console.log(index)

            if (list[index].indexOf('--Select') != -1) {
                selectItemList.push({ label: list[index], value: undefined });
            } else {
                selectItemList.push({ label: list[index], value: list[index] });
            }
        }

        return selectItemList;
    }

    static createDropdownwithObjKey(objList: any, label: any, value?: any, title?: any): SelectItem[] {
        const selectItemList: SelectItem[] = [];

        if (objList != null && objList.length > 1) {
            selectItemList.push({ label: 'Please Select', value: undefined, title: 'Please Select' });
            for (const obj of objList) {
                if (value != null && value != '') {
                    selectItemList.push({ label: obj[label], value: obj[value], title: obj[title] });
                } else {
                    selectItemList.push({ label: obj[label], value: obj[label], title: obj[title] });
                }
            }
        } else if (objList != null && objList.length == 1) {
            const obj = objList[0];
            selectItemList.push({ label: obj[label], value: obj[value], title: obj[title] });
        } else {
            selectItemList.push({ label: 'Please Select', value: undefined, title: 'Please Select' });
        }

        return selectItemList;
    }



    static createDropdownwithObjKeyReturnModel(objList: any, label: any, value?: any): SelectItem[] {
        const selectItemList: SelectItem[] = [];

        if (objList != null && objList.length > 1) {
            selectItemList.push({ label: 'Please Select', value: undefined });
            for (const obj of objList) {
                if (value != null && value != '') {
                    selectItemList.push({ label: obj[label], value: obj });
                }
                else {
                    selectItemList.push({ label: obj[label], value: obj });
                }
            }
        } else if (objList != null && objList.length == 1) {
            const obj = objList[0];
            selectItemList.push({ label: obj[label], value: obj });
        } else {
            selectItemList.push({ label: 'Please Select', value: undefined });
        }

        return selectItemList;
    }


    // This method for not mandatory fields
    static createDropDownWithObjKeyForNotMandatory(objList: any, label: any, value?: any): SelectItem[] {
        const selectItemList: SelectItem[] = [];

        if (objList != null && objList.length > 0) {
            selectItemList.push({ label: 'Please Select', value: undefined });
            for (const obj of objList) {
                if (value != null && value != '') {
                    selectItemList.push({ label: obj[label], value: obj[value] });
                }
                else {
                    selectItemList.push({ label: obj[label], value: obj[label] });
                }
            }
        } else {
            selectItemList.push({ label: 'Please Select', value: undefined });
        }
        return selectItemList;
    }


    // This method for  mandatory fields
    static createDropDownWithObjKeyForMandatory(objList: any, label: any, value?: any): SelectItem[] {
        const selectItemList: SelectItem[] = [];

        if (objList != null && objList.length > 0) {

            for (const obj of objList) {
                if (value != null && value != '') {
                    selectItemList.push({ label: obj[label], value: obj[value] });
                }
                else {
                    selectItemList.push({ label: obj[label], value: obj[label] });
                }
            }
        }
        return selectItemList;
    }


    // This method is created for showing xml files in dropdown without .xml extension
    static createInstrProfileDropdown(list: any): SelectItem[] {
        const selectItemList: SelectItem[] = [];

        for (const index in list) {
            if (list[index].indexOf('--Select') != -1) {
                selectItemList.push({ label: list[index].split('.')[0], value: undefined });
            } else {
                selectItemList.push({ label: list[index].split('.')[0], value: list[index] });
            }
        }

        return selectItemList;
    }

    static createListWithKeyValue(arrLabel: string[], arrValue: string[]): SelectItem[] {
        const selectItemList = [];

        for (const index in arrLabel) {
            selectItemList.push({ label: arrLabel[index], value: arrValue[index] });
        }

        return selectItemList;
    }

    static createDropdownwithoutChooseObjKey(objList: any, label: any, value?: any, title?: any): SelectItem[] {
        const selectItemList: SelectItem[] = [];

        if (objList != null && objList.length > 1) {
            // selectItemList.push({ label: 'Please Select', value: undefined, title: 'Please Select' });
            for (const obj of objList) {
                if (value != null && value != '') {
                    selectItemList.push({ label: obj[label], value: obj[value], title: obj[title] });
                } else {
                    selectItemList.push({ label: obj[label], value: obj[label], title: obj[title] });
                }
            }
        } else if (objList != null && objList.length == 1) {
            const obj = objList[0];
            selectItemList.push({ label: obj[label], value: obj[value], title: obj[title] });
        } else {
            selectItemList.push({ label: 'Please Select', value: undefined, title: 'Please Select' });
        }

        return selectItemList;
    }

}


