ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8593075.112213, 4696773.217679, -8571734.475214, 4713049.101730]);
var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_PotentialLocation_1 = new ol.format.GeoJSON();
var features_PotentialLocation_1 = format_PotentialLocation_1.readFeatures(json_PotentialLocation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialLocation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialLocation_1.addFeatures(features_PotentialLocation_1);
var lyr_PotentialLocation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotentialLocation_1, 
                style: style_PotentialLocation_1,
                popuplayertitle: "Potential Location",
                interactive: true,
                title: 'Potential Location'
            });
var format_CountyBoundary_2 = new ol.format.GeoJSON();
var features_CountyBoundary_2 = format_CountyBoundary_2.readFeatures(json_CountyBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundary_2.addFeatures(features_CountyBoundary_2);
var lyr_CountyBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundary_2, 
                style: style_CountyBoundary_2,
                popuplayertitle: "County Boundary",
                interactive: true,
                title: '<img src="styles/legend/CountyBoundary_2.png" /> County Boundary'
            });
var group_Map = new ol.layer.Group({
                                layers: [lyr_Basemap_0,lyr_PotentialLocation_1,lyr_CountyBoundary_2,],
                                fold: "open",
                                title: "Map"});

lyr_Basemap_0.setVisible(true);lyr_PotentialLocation_1.setVisible(true);lyr_CountyBoundary_2.setVisible(true);
var layersList = [group_Map];
lyr_PotentialLocation_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE': 'CODE', 'NAME': 'NAME', 'SYMBOL': 'SYMBOL', 'SENIORCENTER': 'SENIORCENTER', 'ADDRESS': 'ADDRESS', 'GeoSyncDate': 'GeoSyncDate', 'Senior Center': 'Senior Center', });
lyr_CountyBoundary_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'COUNTY': 'COUNTY', 'STATE': 'STATE', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_PotentialLocation_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE': 'ValueMap', 'NAME': 'TextEdit', 'SYMBOL': 'ValueMap', 'SENIORCENTER': 'TextEdit', 'ADDRESS': 'TextEdit', 'GeoSyncDate': 'DateTime', 'Senior Center': '', });
lyr_CountyBoundary_2.set('fieldImages', {'fid': 'Range', 'OBJECTID': 'Range', 'COUNTY': 'TextEdit', 'STATE': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_PotentialLocation_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'CODE': 'hidden field', 'NAME': 'inline label - visible with data', 'SYMBOL': 'hidden field', 'SENIORCENTER': 'hidden field', 'ADDRESS': 'inline label - visible with data', 'GeoSyncDate': 'hidden field', 'Senior Center': 'inline label - visible with data', });
lyr_CountyBoundary_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'COUNTY': 'hidden field', 'STATE': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_CountyBoundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});