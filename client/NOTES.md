Many-to-Many Relationship between Cakes and Layers:
- A single cake has_many layers
- A single layer can be used in many cakes

A layer is categorized as one of two options:
1). batter (e.g. "vanilla sponge", "chocolate sponge", "marble", "carrot", "red velvet")
2). filling (e.g. "chocolate mousse", "lemon custard", "fudge", "whipped cream", "strawberry preserves", "bavarian cream")

Layers must alternate between batter and filling to keep the cake's structure stable.

In my Redux store, I manage the following state, which changes throughout the course of my application:
1). the layers which comprise the layer cake that is currently being constructed.

In the Redux store's state object, the layers key points to an object.
This nested object has key/value pairs in which each key is a unique string flavor, e.g., "crushed oreos"
and its corresponding value is the number of layers in the cake that have that particular flavor, e.g., 2