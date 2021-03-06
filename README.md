# LEARN geoJSON #

Some personal exercises.

Under `./data` some geoJSON file tha can be load.

# RESOURCES #

[Importing Data into Maps](https://developers.google.com/maps/documentation/javascript/importing_data) for geoJSON data.

[Open Data Milano](https://github.com/abahgat/opendata-milano) Examples of geoJSON data, for Milan city.

[Reading files in JavaScript using the File APIs](https://www.html5rocks.com/en/tutorials/file/dndfiles/)

* [./public/index_simple.html](./public/index_simple.html)
* [./public/index_drag_drop.html](./public/index_drag_drop.html)
* [./public/index_read_file.html](./public/index_read_file.html)
* [./public/index_read_progress_bar.html](./public/index_read_progress_bar.html)
* [./public/index_read_slice.html](./public/index_read_slice.html)

[Styling & Customizing File Inputs the Smart Way](https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/)

[Convert Google directions to GeoJSON points or polylines](http://zevross.com/blog/2014/09/23/convert-google-directions-to-geojson-points-or-polylines/) and [Convert Google Maps Directions to geoJSON with Node](http://winstonhearn.com/gmaps-to-geojson/)

* start (very incomplete): getting path from my home to Milan 
`https://maps.googleapis.com/maps/api/directions/json?origin=via Respigi, 6, 21017 Samarate, IT&destination=Via Valtellina, 68, 20159 Milano` [./tools/getLineRoute.js](./tools/getLineRoute.js) and generate [./data/my_line_route.geojson](./data/my_line_route.geojson), from [Road Trip Data](https://github.com/wnstn/roadtripData)

[Data Layer: Drag and Drop GeoJSON](https://developers.google.com/maps/documentation/javascript/examples/layer-data-dragndrop) Inspiration/Example on centering the map on geoJSON data.

* [example_drag_drop.html](./public/example_drag_drop.html)

