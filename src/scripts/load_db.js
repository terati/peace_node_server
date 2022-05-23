const fs = require("fs");
const { models } = require('../sequelize');
const { parse } = require("csv-parse");
const { axios } = require("axios");

console.log('start');

async function push_req(row) {
  await models.inventory_db.create({
    product_id: row[0],
    product_ndc: row[1],
    ndc_package_code: row[2],
    ndc_package_code_without_hyphens: row[3],
    package_description: row[4],
    start_marketing_date: row[5],
    end_marketing_date: row[6],
    ndc_exclude_flag: row[7],
    sample_package: row[8],
    product_type_name: row[10],
    propietary_name: row[11],
    propietary_name_suffix: row[12],
    nonpropietary_name: row[13],
    dosage_form_name: row[14],
    route_name: row[15],
    marketing_category_name: row[18],
    application_number: row[19],
    labeler_name: row[20],
    substance_name: row[21],
    active_numerator_strength: row[22],
    active_ingredient_unit: row[23],
    pharm_classes: row[24],
    deaschedule: row[25],
    ndc_exclude_flag: row[26],
    listing_record_certified_through: row[27]
  })
}

// console.time();

let arr = [];

// insert the inventory_database data
async function read() {
  const stream = fs.createReadStream("../../public/rxp_combined.csv") 
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
      arr.push(row);
    })
    .on("end", function () {
      for (let i = 0; i < arr.length; i++) {
        push_req(arr[i]);
      }
    })
}

read();
  // .then(() => {
  //   console.log(arr.length);
  // })
  // .then(() => {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(arr.length);
  //     push_req(arr[i]);
  //   }
  // })
  // .then(() => {
  //   console.log('trigger');
  // })






// console.timeEnd();