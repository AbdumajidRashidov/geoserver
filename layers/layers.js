var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                interactive: true,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });
var format_Randompointsinpolygons_1 = new ol.format.GeoJSON();
var features_Randompointsinpolygons_1 = format_Randompointsinpolygons_1.readFeatures(json_Randompointsinpolygons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Randompointsinpolygons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randompointsinpolygons_1.addFeatures(features_Randompointsinpolygons_1);
var lyr_Randompointsinpolygons_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Randompointsinpolygons_1, 
                style: style_Randompointsinpolygons_1,
                interactive: true,
                title: '<img src="styles/legend/Randompointsinpolygons_1.png" /> Random points in polygons'
            });
var format_Randompointsinpolygons_2 = new ol.format.GeoJSON();
var features_Randompointsinpolygons_2 = format_Randompointsinpolygons_2.readFeatures(json_Randompointsinpolygons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Randompointsinpolygons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randompointsinpolygons_2.addFeatures(features_Randompointsinpolygons_2);
var lyr_Randompointsinpolygons_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Randompointsinpolygons_2, 
                style: style_Randompointsinpolygons_2,
                interactive: true,
                title: '<img src="styles/legend/Randompointsinpolygons_2.png" /> Random points in polygons'
            });
var format_Randompointsinpolygons_3 = new ol.format.GeoJSON();
var features_Randompointsinpolygons_3 = format_Randompointsinpolygons_3.readFeatures(json_Randompointsinpolygons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Randompointsinpolygons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randompointsinpolygons_3.addFeatures(features_Randompointsinpolygons_3);
var lyr_Randompointsinpolygons_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Randompointsinpolygons_3, 
                style: style_Randompointsinpolygons_3,
                interactive: true,
                title: '<img src="styles/legend/Randompointsinpolygons_3.png" /> Random points in polygons'
            });
var format_Randompointsinpolygons_4 = new ol.format.GeoJSON();
var features_Randompointsinpolygons_4 = format_Randompointsinpolygons_4.readFeatures(json_Randompointsinpolygons_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Randompointsinpolygons_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randompointsinpolygons_4.addFeatures(features_Randompointsinpolygons_4);
var lyr_Randompointsinpolygons_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Randompointsinpolygons_4, 
                style: style_Randompointsinpolygons_4,
                interactive: true,
                title: '<img src="styles/legend/Randompointsinpolygons_4.png" /> Random points in polygons'
            });
var format_Randompointsinpolygons_5 = new ol.format.GeoJSON();
var features_Randompointsinpolygons_5 = format_Randompointsinpolygons_5.readFeatures(json_Randompointsinpolygons_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Randompointsinpolygons_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randompointsinpolygons_5.addFeatures(features_Randompointsinpolygons_5);
var lyr_Randompointsinpolygons_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Randompointsinpolygons_5, 
                style: style_Randompointsinpolygons_5,
                interactive: true,
                title: '<img src="styles/legend/Randompointsinpolygons_5.png" /> Random points in polygons'
            });
var format_Randompointsinpolygons_6 = new ol.format.GeoJSON();
var features_Randompointsinpolygons_6 = format_Randompointsinpolygons_6.readFeatures(json_Randompointsinpolygons_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Randompointsinpolygons_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randompointsinpolygons_6.addFeatures(features_Randompointsinpolygons_6);
var lyr_Randompointsinpolygons_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Randompointsinpolygons_6, 
                style: style_Randompointsinpolygons_6,
                interactive: true,
                title: '<img src="styles/legend/Randompointsinpolygons_6.png" /> Random points in polygons'
            });

lyr_WorldMap_0.setVisible(true);lyr_Randompointsinpolygons_1.setVisible(true);lyr_Randompointsinpolygons_2.setVisible(true);lyr_Randompointsinpolygons_3.setVisible(true);lyr_Randompointsinpolygons_4.setVisible(true);lyr_Randompointsinpolygons_5.setVisible(true);lyr_Randompointsinpolygons_6.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_Randompointsinpolygons_1,lyr_Randompointsinpolygons_2,lyr_Randompointsinpolygons_3,lyr_Randompointsinpolygons_4,lyr_Randompointsinpolygons_5,lyr_Randompointsinpolygons_6];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Randompointsinpolygons_1.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Randompointsinpolygons_2.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Randompointsinpolygons_3.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Randompointsinpolygons_4.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Randompointsinpolygons_5.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Randompointsinpolygons_6.set('fieldAliases', {'rand_point_id': 'rand_point_id', 'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_WorldMap_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Randompointsinpolygons_1.set('fieldImages', {'rand_point_id': '', 'fid': '', 'iso_a2': '', 'NAME': '', 'FIPS_10_': '', 'ISO_A3': '', 'WB_A2': '', 'WB_A3': '', });
lyr_Randompointsinpolygons_2.set('fieldImages', {'rand_point_id': '', 'fid': '', 'iso_a2': '', 'NAME': '', 'FIPS_10_': '', 'ISO_A3': '', 'WB_A2': '', 'WB_A3': '', });
lyr_Randompointsinpolygons_3.set('fieldImages', {'rand_point_id': '', 'fid': '', 'iso_a2': '', 'NAME': '', 'FIPS_10_': '', 'ISO_A3': '', 'WB_A2': '', 'WB_A3': '', });
lyr_Randompointsinpolygons_4.set('fieldImages', {'rand_point_id': '', 'fid': '', 'iso_a2': '', 'NAME': '', 'FIPS_10_': '', 'ISO_A3': '', 'WB_A2': '', 'WB_A3': '', });
lyr_Randompointsinpolygons_5.set('fieldImages', {'rand_point_id': '', 'fid': '', 'iso_a2': '', 'NAME': '', 'FIPS_10_': '', 'ISO_A3': '', 'WB_A2': '', 'WB_A3': '', });
lyr_Randompointsinpolygons_6.set('fieldImages', {'rand_point_id': '', 'fid': '', 'iso_a2': '', 'NAME': '', 'FIPS_10_': '', 'ISO_A3': '', 'WB_A2': '', 'WB_A3': '', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Randompointsinpolygons_1.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Randompointsinpolygons_2.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Randompointsinpolygons_3.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Randompointsinpolygons_4.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Randompointsinpolygons_5.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Randompointsinpolygons_6.set('fieldLabels', {'rand_point_id': 'no label', 'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'header label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Randompointsinpolygons_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});