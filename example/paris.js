
//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/
var addressPoints = [
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.862544, 2.361052, "3rd"],
[48.865481, 2.345603, "2nd"],
[48.865481, 2.345603, "2nd"],
[48.865481, 2.345603, "2nd"],
[48.865481, 2.345603, "2nd"],
[48.865481, 2.345603, "2nd"],
[48.865481, 2.345603, "2nd"],
[48.865481, 2.345603, "2nd"],
[48.865481, 2.345603, "2nd"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.865765, 2.326718, "1st"],
[48.828567, 2.357529, "13th"],
[48.828567, 2.357529, "13th"],
[48.828567, 2.357529, "13th"],
[48.828567, 2.357529, "13th"],
[48.828567, 2.357529, "13th"],
[48.828567, 2.357529, "13th"],
[48.830641, 2.320393, "14th"],
[48.830641, 2.320393, "14th"],
[48.830641, 2.320393, "14th"],
[48.830641, 2.320393, "14th"],
[48.830641, 2.320393, "14th"],
[48.840358, 2.292326, "15th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.858488, 2.268382, "16th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"],
[48.867908, 2.310237, "8th"]
];

var latlngs = [[48.841965, 2.378602],[48.841965, 2.358602],[48.841965, 2.358602],[2.346675453051013]];
var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
// zoom the map to the polygon
map.fitBounds(polygon.getBounds());

// {"type":"Polygon","coordinates":[[[2.351518483670821,48.8644258050741],[2.350949105218923,48.86340592861751],[2.346676032763327,48.864430925901665],[2.346675453051013,48.86443106483368],[2.34510165517]]]};