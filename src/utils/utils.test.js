const utils = require("./utils")
// @ponicode
describe("utils.formatCurrency", () => {
    test("0", () => {
        let callFunction = () => {
            utils.formatCurrency("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.formatCurrency("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.formatCurrency("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.formatCurrency(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.removeEmpty", () => {
    test("0", () => {
        let callFunction = () => {
            utils.removeEmpty([0, "Chief Product Officer", false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.removeEmpty([false, "Chief Product Officer", false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.removeEmpty(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.unMask", () => {
    test("0", () => {
        let callFunction = () => {
            utils.unMask("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.unMask("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.unMask("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.unMask(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.removeSpaces", () => {
    test("0", () => {
        let callFunction = () => {
            utils.removeSpaces("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.removeSpaces("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.removeSpaces("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.removeSpaces("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.removeSpaces(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.cleanObject", () => {
    test("0", () => {
        let param1 = [["Software Engineer", "Data Scientist", "Data Scientist"], ["Data Scientist", "Sales", "Marketing"], ["Sales", "Marketing", "Sales"]]
        let callFunction = () => {
            utils.cleanObject(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["Marketing", "Marketing", "Data Scientist"], ["Data Scientist", "Marketing", "Chief Product Officer"], ["Marketing", "Sales", "Data Scientist"]]
        let callFunction = () => {
            utils.cleanObject(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Marketing", "Chief Product Officer", "Data Scientist"], ["Marketing", "Sales", "Marketing"], ["Software Engineer", "Data Scientist", "Software Engineer"]]
        let callFunction = () => {
            utils.cleanObject(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Data Scientist", "Chief Product Officer", "Marketing"], ["Software Engineer", "Software Engineer", "Data Scientist"], ["Chief Product Officer", "Software Engineer", "Chief Product Officer"]]
        let callFunction = () => {
            utils.cleanObject(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Chief Product Officer", "Sales", "Data Scientist"], ["Marketing", "Chief Product Officer", "Software Engineer"], ["Sales", "Chief Product Officer", "Chief Product Officer"]]
        let callFunction = () => {
            utils.cleanObject(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.cleanObject(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.getInitials", () => {
    test("0", () => {
        let callFunction = () => {
            utils.getInitials("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.getInitials("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.getInitials("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.getInitials("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.getInitials("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.getInitials(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.formatDate", () => {
    test("0", () => {
        let callFunction = () => {
            utils.formatDate("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.formatDate("01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.formatDate("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.formatDate("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.formatDate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.dateFromNow", () => {
    test("0", () => {
        let callFunction = () => {
            utils.dateFromNow("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.dateFromNow("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.dateFromNow("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.dateFromNow("01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.dateFromNow(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.getDay", () => {
    test("0", () => {
        let callFunction = () => {
            utils.getDay("01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.getDay("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.getDay("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.getDay("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.getDay(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.randColor", () => {
    test("0", () => {
        let callFunction = () => {
            utils.randColor()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.promisify", () => {
    test("0", () => {
        let callFunction = () => {
            utils.promisify(() => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.promisify(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.parseJwt", () => {
    test("0", () => {
        let callFunction = () => {
            utils.parseJwt("data")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.parseJwt("+=.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.parseJwt("~@")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.parseJwt("+")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.parseJwt("not")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.parseJwt(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.decode_utf8", () => {
    test("0", () => {
        let callFunction = () => {
            utils.decode_utf8("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.decode_utf8("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.decode_utf8("TestUpperCase@Example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.decode_utf8("email@Google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.decode_utf8("something@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.decode_utf8(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.capitalizeString", () => {
    test("0", () => {
        let callFunction = () => {
            utils.capitalizeString("\"#'{7855663]}ééàà")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.capitalizeString("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.capitalizeString(123456789)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.capitalizeString("This is a String1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.capitalizeString("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.capitalizeString(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.applyExpirationDateMask", () => {
    test("0", () => {
        let callFunction = () => {
            utils.applyExpirationDateMask("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.applyExpirationDateMask("01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.applyExpirationDateMask("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.applyExpirationDateMask("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.applyExpirationDateMask(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.isANumberValue", () => {
    test("0", () => {
        let callFunction = () => {
            utils.isANumberValue("00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.isANumberValue("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.isANumberValue("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.isANumberValue("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.isANumberValue(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.isANumberValue(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.getUpperCaseInitials", () => {
    test("0", () => {
        let callFunction = () => {
            utils.getUpperCaseInitials("Af4oo A")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.getUpperCaseInitials("A6 A")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.getUpperCaseInitials("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.getUpperCaseInitials("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.getUpperCaseInitials("A")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.getUpperCaseInitials(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.objectHasValues", () => {
    test("0", () => {
        let callFunction = () => {
            utils.objectHasValues({ key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.objectHasValues({ key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.objectHasValues({ key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.objectHasValues(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
