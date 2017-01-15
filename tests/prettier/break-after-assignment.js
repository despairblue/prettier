// set
b.toString = function(): string {
  return "foo";
};

// Should stay on one line
const short1 = short()
let short2 = short()
short2 = short()

const short1 = short
let short2 = short
short2 = short

// Should break at `=` operator and indent

const looooooooooooooongvarname = looooooooooooooooooooooooooooooooooooooooooooooongThing()
let looooooooooooooongvarname = looooooooooooooooooooooooooooooooooooooooooooooongThing()
looooooooooooooongvarname = looooooooooooooooooooooooooooooooooooooooooooooongThing()

const looooooooooooooongvarname = looooooooooooooooooooooooooooooooooooooooooooooongThing
let looooooooooooooongvarname = looooooooooooooooooooooooooooooooooooooooooooooongThing
looooooooooooooongvarname = looooooooooooooooooooooooooooooooooooooooooooooongThing

// real code

function * sendMail () {
  try {
    const pdfStream =
          yield contractsService.getLandlordContractStreamFromBooking(booking)
  } catch (error) {
    report(error)
  }
}
