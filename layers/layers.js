var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Retainedfields_1 = new ol.format.GeoJSON();
var features_Retainedfields_1 = format_Retainedfields_1.readFeatures(json_Retainedfields_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Retainedfields_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Retainedfields_1.addFeatures(features_Retainedfields_1);
var lyr_Retainedfields_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Retainedfields_1, 
                style: style_Retainedfields_1,
                popuplayertitle: 'Retained fields',
                interactive: true,
                title: '<img src="styles/legend/Retainedfields_1.png" /> Retained fields'
            });
var format_Retainedfields_2 = new ol.format.GeoJSON();
var features_Retainedfields_2 = format_Retainedfields_2.readFeatures(json_Retainedfields_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Retainedfields_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Retainedfields_2.addFeatures(features_Retainedfields_2);
var lyr_Retainedfields_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Retainedfields_2, 
                style: style_Retainedfields_2,
                popuplayertitle: 'Retained fields',
                interactive: true,
                title: '<img src="styles/legend/Retainedfields_2.png" /> Retained fields'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Retainedfields_1.setVisible(true);lyr_Retainedfields_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Retainedfields_1,lyr_Retainedfields_2];
lyr_Retainedfields_1.set('fieldAliases', {'fid': 'fid', 'Anchorage_Government_Parcels_Classified_Class_Code': 'Anchorage_Government_Parcels_Classified_Class_Code', 'Anchorage_Government_Parcels_Classified_Class_Label': 'Anchorage_Government_Parcels_Classified_Class_Label', 'Anchorage_Government_Parcels_Classified_Agency': 'Anchorage_Government_Parcels_Classified_Agency', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'Anchorage_Government_Parcels_Classified_Dept_or_Unit', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl', 'Anchorage_Government_Parcels_Classified_Area_Group': 'Anchorage_Government_Parcels_Classified_Area_Group', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'Anchorage_Government_Parcels_Classified_Owner_Name', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'Anchorage_Government_Parcels_Classified_Parcel_Number', 'Anchorage_Government_Parcels_Classified_Site_Address': 'Anchorage_Government_Parcels_Classified_Site_Address', 'Anchorage_Government_Parcels_Classified_Land_Use': 'Anchorage_Government_Parcels_Classified_Land_Use', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'Anchorage_Government_Parcels_Classified_Zoning_District', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'Anchorage_Government_Parcels_Classified_CAMA_Acreage', });
lyr_Retainedfields_2.set('fieldAliases', {'fid': 'fid', 'Anchorage_Government_Parcels_Classified_Class_Code': 'Anchorage_Government_Parcels_Classified_Class_Code', 'Anchorage_Government_Parcels_Classified_Class_Label': 'Anchorage_Government_Parcels_Classified_Class_Label', 'Anchorage_Government_Parcels_Classified_Agency': 'Anchorage_Government_Parcels_Classified_Agency', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'Anchorage_Government_Parcels_Classified_Dept_or_Unit', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl', 'Anchorage_Government_Parcels_Classified_Area_Group': 'Anchorage_Government_Parcels_Classified_Area_Group', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'Anchorage_Government_Parcels_Classified_Owner_Name', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'Anchorage_Government_Parcels_Classified_Parcel_Number', 'Anchorage_Government_Parcels_Classified_Site_Address': 'Anchorage_Government_Parcels_Classified_Site_Address', 'Anchorage_Government_Parcels_Classified_Land_Use': 'Anchorage_Government_Parcels_Classified_Land_Use', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'Anchorage_Government_Parcels_Classified_Zoning_District', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'Anchorage_Government_Parcels_Classified_CAMA_Acreage', });
lyr_Retainedfields_1.set('fieldImages', {'fid': '', 'Anchorage_Government_Parcels_Classified_Class_Code': '', 'Anchorage_Government_Parcels_Classified_Class_Label': '', 'Anchorage_Government_Parcels_Classified_Agency': '', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': '', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': '', 'Anchorage_Government_Parcels_Classified_Area_Group': '', 'Anchorage_Government_Parcels_Classified_Owner_Name': '', 'Anchorage_Government_Parcels_Classified_Parcel_Number': '', 'Anchorage_Government_Parcels_Classified_Site_Address': '', 'Anchorage_Government_Parcels_Classified_Land_Use': '', 'Anchorage_Government_Parcels_Classified_Zoning_District': '', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': '', });
lyr_Retainedfields_2.set('fieldImages', {'fid': '', 'Anchorage_Government_Parcels_Classified_Class_Code': '', 'Anchorage_Government_Parcels_Classified_Class_Label': '', 'Anchorage_Government_Parcels_Classified_Agency': '', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': '', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': '', 'Anchorage_Government_Parcels_Classified_Area_Group': '', 'Anchorage_Government_Parcels_Classified_Owner_Name': '', 'Anchorage_Government_Parcels_Classified_Parcel_Number': '', 'Anchorage_Government_Parcels_Classified_Site_Address': '', 'Anchorage_Government_Parcels_Classified_Land_Use': '', 'Anchorage_Government_Parcels_Classified_Zoning_District': '', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': '', });
lyr_Retainedfields_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Code': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Label': 'no label', 'Anchorage_Government_Parcels_Classified_Agency': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Area_Group': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Site_Address': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Land_Use': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'inline label - visible with data', });
lyr_Retainedfields_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Code': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Label': 'no label', 'Anchorage_Government_Parcels_Classified_Agency': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Area_Group': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Site_Address': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Land_Use': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'inline label - visible with data', });
lyr_Retainedfields_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});