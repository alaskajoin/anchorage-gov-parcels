var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ParcelsbyZoning_1 = new ol.format.GeoJSON();
var features_ParcelsbyZoning_1 = format_ParcelsbyZoning_1.readFeatures(json_ParcelsbyZoning_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelsbyZoning_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelsbyZoning_1.addFeatures(features_ParcelsbyZoning_1);
var lyr_ParcelsbyZoning_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelsbyZoning_1, 
                style: style_ParcelsbyZoning_1,
                popuplayertitle: 'Parcels by Zoning',
                interactive: true,
                title: '<img src="styles/legend/ParcelsbyZoning_1.png" /> Parcels by Zoning'
            });
var format_ParcelsbyClassOwner_2 = new ol.format.GeoJSON();
var features_ParcelsbyClassOwner_2 = format_ParcelsbyClassOwner_2.readFeatures(json_ParcelsbyClassOwner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelsbyClassOwner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelsbyClassOwner_2.addFeatures(features_ParcelsbyClassOwner_2);
var lyr_ParcelsbyClassOwner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelsbyClassOwner_2, 
                style: style_ParcelsbyClassOwner_2,
                popuplayertitle: 'Parcels by Class Owner',
                interactive: true,
                title: '<img src="styles/legend/ParcelsbyClassOwner_2.png" /> Parcels by Class Owner'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ParcelsbyZoning_1.setVisible(true);lyr_ParcelsbyClassOwner_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ParcelsbyZoning_1,lyr_ParcelsbyClassOwner_2];
lyr_ParcelsbyZoning_1.set('fieldAliases', {'fid': 'fid', 'Anchorage_Government_Parcels_Classified_Class_Code': 'Anchorage_Government_Parcels_Classified_Class_Code', 'Anchorage_Government_Parcels_Classified_Class_Label': 'Anchorage_Government_Parcels_Classified_Class_Label', 'Anchorage_Government_Parcels_Classified_Agency': 'Anchorage_Government_Parcels_Classified_Agency', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'Anchorage_Government_Parcels_Classified_Dept_or_Unit', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl', 'Anchorage_Government_Parcels_Classified_Area_Group': 'Anchorage_Government_Parcels_Classified_Area_Group', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'Anchorage_Government_Parcels_Classified_Owner_Name', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'Anchorage_Government_Parcels_Classified_Parcel_Number', 'Anchorage_Government_Parcels_Classified_Site_Address': 'Anchorage_Government_Parcels_Classified_Site_Address', 'Anchorage_Government_Parcels_Classified_Land_Use': 'Anchorage_Government_Parcels_Classified_Land_Use', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'Anchorage_Government_Parcels_Classified_Zoning_District', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'Anchorage_Government_Parcels_Classified_CAMA_Acreage', });
lyr_ParcelsbyClassOwner_2.set('fieldAliases', {'fid': 'fid', 'Anchorage_Government_Parcels_Classified_Class_Code': 'Anchorage_Government_Parcels_Classified_Class_Code', 'Anchorage_Government_Parcels_Classified_Class_Label': 'Anchorage_Government_Parcels_Classified_Class_Label', 'Anchorage_Government_Parcels_Classified_Agency': 'Anchorage_Government_Parcels_Classified_Agency', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'Anchorage_Government_Parcels_Classified_Dept_or_Unit', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl', 'Anchorage_Government_Parcels_Classified_Area_Group': 'Anchorage_Government_Parcels_Classified_Area_Group', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'Anchorage_Government_Parcels_Classified_Owner_Name', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'Anchorage_Government_Parcels_Classified_Parcel_Number', 'Anchorage_Government_Parcels_Classified_Site_Address': 'Anchorage_Government_Parcels_Classified_Site_Address', 'Anchorage_Government_Parcels_Classified_Land_Use': 'Anchorage_Government_Parcels_Classified_Land_Use', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'Anchorage_Government_Parcels_Classified_Zoning_District', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'Anchorage_Government_Parcels_Classified_CAMA_Acreage', });
lyr_ParcelsbyZoning_1.set('fieldImages', {'fid': '', 'Anchorage_Government_Parcels_Classified_Class_Code': '', 'Anchorage_Government_Parcels_Classified_Class_Label': '', 'Anchorage_Government_Parcels_Classified_Agency': '', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': '', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': '', 'Anchorage_Government_Parcels_Classified_Area_Group': '', 'Anchorage_Government_Parcels_Classified_Owner_Name': '', 'Anchorage_Government_Parcels_Classified_Parcel_Number': '', 'Anchorage_Government_Parcels_Classified_Site_Address': '', 'Anchorage_Government_Parcels_Classified_Land_Use': '', 'Anchorage_Government_Parcels_Classified_Zoning_District': '', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': '', });
lyr_ParcelsbyClassOwner_2.set('fieldImages', {'fid': '', 'Anchorage_Government_Parcels_Classified_Class_Code': '', 'Anchorage_Government_Parcels_Classified_Class_Label': '', 'Anchorage_Government_Parcels_Classified_Agency': '', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': '', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': '', 'Anchorage_Government_Parcels_Classified_Area_Group': '', 'Anchorage_Government_Parcels_Classified_Owner_Name': '', 'Anchorage_Government_Parcels_Classified_Parcel_Number': '', 'Anchorage_Government_Parcels_Classified_Site_Address': '', 'Anchorage_Government_Parcels_Classified_Land_Use': '', 'Anchorage_Government_Parcels_Classified_Zoning_District': '', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': '', });
lyr_ParcelsbyZoning_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Code': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Label': 'no label', 'Anchorage_Government_Parcels_Classified_Agency': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Area_Group': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Site_Address': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Land_Use': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'inline label - visible with data', });
lyr_ParcelsbyClassOwner_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Code': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Class_Label': 'no label', 'Anchorage_Government_Parcels_Classified_Agency': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Dept_or_Unit': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Anchorage_Bowl': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Area_Group': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Owner_Name': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Parcel_Number': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Site_Address': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Land_Use': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_Zoning_District': 'inline label - visible with data', 'Anchorage_Government_Parcels_Classified_CAMA_Acreage': 'inline label - visible with data', });
lyr_ParcelsbyClassOwner_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});