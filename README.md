# Salad designer and planner
We aim to provide our salad product planners with a tool to design different salads to be produced in a given week, according to demand and product availability.

We've got a fancy "salad subscription" company, so we know before hand pretty much how many customers we'll have next week, along with how much we can expect to turn over.

We really don't need to make any complex calculation within the app, just lend the tool for our team to work comfortably with the available data.

Here's a rough idea of the desired behaviour:

- Our main goal is to create "composite" salad products.

- Each salad will be stored with the following properties:
  - **id** => integer
  - **name** => string
  - **type** => string (small/medium/large)
  - **ingredients** (products) => array of objects
    - id => integer
    - numOfServings => integer
  - **cost** => float
  - **price** => float
  - **hoursFresh** => integer (actually, the lowest value present in its ingredients, could be a function or a pre-calculated value).
  - **targetStockByWeekday** => number of these salads needed for a particular weekday.
  - **currentStock** => number of salads in stock.

- We've got a database with next week's available products, here are some notes:
  - The main working unit for salad making will be a "**serving**".
  - There's also a **weight per serving** (in grams as of now), so that we can send a comprehensive order to the producer at the end of the process.
  - Each product belongs to a specific supplier.
  - Here's the product schema:
    - id => integer
    - name => string
    - costPerServing => float
    - gramsPerServing => integer
    - hoursFresh => integer
    - supplierId => integer

- There are a handful of suppliers:
  - We want to know how much we'll need to order from each, after the planning is done.
  - Supplier schema:
    - id => integer
    - name => string
  - (\*) Additionally, we might want to calculate when to order what, to ensure freshness. Here are the rules for purchasing:
    - We need to ensure freshness.
    - We need to cut costs by ordering as much quantity as possible each time.

- There's a bit of business logic in our DataService, and more can be added if needed.

- (\*) Additionally, we can create a simple(?) planner for the manufacture following the design of the salads.



<footnote>(\*) => optional.</footnote>