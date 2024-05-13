* Working with RDBMS we use join queries, we do normalization ie breakdown tables

* In here too we've done normalization, we've seperated user, brand, categorie tables

* Now 
- we've used createdBy( eg brand table) as foreign key
- And used populate fetching( eg brand data) to fetch multiple field of user table
- populate query runs an aggregation -> breaking down a query in multiple stages to filter data
    - mongoCompass -> Aggregations ->
        - Addstage -> $lookup(edit lookup) , this is how join query works
        - Addstage -> $unwind(edit path) , doing array flat on that lookup data
        - Addstage -> $project(edit keys to fetch) , project 
        - Addstage -> $match(for adding filter)
    - These all stages are handled by populate
- Now while fetching products data, we've to write query where we can't write unwind, join ,etc
- Instead we need aggration data, so we fetch product from product table writing same agg. pipeline
- There we send category slug as products have linking to categories
     - These stages we've written, populate or findOne cant work with so we do,
        - EXport To Language, copy code ie pipeline
       

* getBySlugWithProduct = (){
     const pipeline = _copiedCode_;
     let data = await CategoryModel.aggeregate(pipeline);
}