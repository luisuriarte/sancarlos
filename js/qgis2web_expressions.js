// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_label_Multipoligonos_3_eval_expression(context) {
    // wordwrap("name", 1, '')

    var feature = context.feature;
    
    if (feature.properties) {
        return fnc_wordwrap([feature.properties['name'] ,1,''], context);
    } else {
        return fnc_wordwrap([feature['name'] ,1,''], context);
    }
}


function exp_Multipoligonos_3rule0_eval_expression(context) {
    // "amenity"  IN ('school') OR "amenity"  IN ('college') OR "amenity"  IN ('university') OR "amenity"  IN ('kindergarten')

    var feature = context.feature;
    
    if (feature.properties) {
        return ((("'school'".indexOf(feature.properties['amenity'] ) > -1  || "'college'".indexOf(feature.properties['amenity'] ) > -1 ) || "'university'".indexOf(feature.properties['amenity'] ) > -1 ) || "'kindergarten'".indexOf(feature.properties['amenity'] ) > -1 );
    } else {
        return ((("'school'".indexOf(feature['amenity'] ) > -1  || "'college'".indexOf(feature['amenity'] ) > -1 ) || "'university'".indexOf(feature['amenity'] ) > -1 ) || "'kindergarten'".indexOf(feature['amenity'] ) > -1 );
    }
}


function exp_Multipoligonos_3rule1_eval_expression(context) {
    // "amenity"  IN ('hospital') AND "other_tags" ILIKE '%healthcare%'

    var feature = context.feature;
    
    if (feature.properties) {
        return ("'hospital'".indexOf(feature.properties['amenity'] ) > -1  && (feature.properties['other_tags'].toLowerCase().indexOf('healthcare'.toLowerCase()) > -1));
    } else {
        return ("'hospital'".indexOf(feature['amenity'] ) > -1  && (feature['other_tags'].toLowerCase().indexOf('healthcare'.toLowerCase()) > -1));
    }
}


function exp_Multipoligonos_3rule2_eval_expression(context) {
    // "leisure"  IN ('park') OR "leisure"  IN ('garden')

    var feature = context.feature;
    
    if (feature.properties) {
        return ("'park'".indexOf(feature.properties['leisure'] ) > -1  || "'garden'".indexOf(feature.properties['leisure'] ) > -1 );
    } else {
        return ("'park'".indexOf(feature['leisure'] ) > -1  || "'garden'".indexOf(feature['leisure'] ) > -1 );
    }
}


function exp_Multipoligonos_3rule3_eval_expression(context) {
    // "leisure"  IN ('sports_centre')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'sports_centre'".indexOf(feature.properties['leisure'] ) > -1 ;
    } else {
        return "'sports_centre'".indexOf(feature['leisure'] ) > -1 ;
    }
}


function exp_FerrocarrilesAntiguos_4rule0_eval_expression(context) {
    // "name"  IN ('FC Mitre')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'FC Mitre'".indexOf(feature.properties['name'] ) > -1 ;
    } else {
        return "'FC Mitre'".indexOf(feature['name'] ) > -1 ;
    }
}


function exp_FerrocarrilesAntiguos_4rule1_eval_expression(context) {
    // "name"  IN ('FC Belgrano')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'FC Belgrano'".indexOf(feature.properties['name'] ) > -1 ;
    } else {
        return "'FC Belgrano'".indexOf(feature['name'] ) > -1 ;
    }
}


function exp_FerrocarrilesAntiguos_4rule0_eval_expression(context) {
    // "name"  IN ('FC Mitre')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'FC Mitre'".indexOf(feature.properties['name'] ) > -1 ;
    } else {
        return "'FC Mitre'".indexOf(feature['name'] ) > -1 ;
    }
}


function exp_FerrocarrilesAntiguos_4rule1_eval_expression(context) {
    // "name"  IN ('FC Belgrano')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'FC Belgrano'".indexOf(feature.properties['name'] ) > -1 ;
    } else {
        return "'FC Belgrano'".indexOf(feature['name'] ) > -1 ;
    }
}


function exp_ZonasUrbanas_5rule0_eval_expression(context) {
    // "osm_id"  IN ('5836736')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'5836736'".indexOf(feature.properties['osm_id'] ) > -1 ;
    } else {
        return "'5836736'".indexOf(feature['osm_id'] ) > -1 ;
    }
}


function exp_ZonasUrbanas_5rule1_eval_expression(context) {
    // "osm_id"  IN ('5836735')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'5836735'".indexOf(feature.properties['osm_id'] ) > -1 ;
    } else {
        return "'5836735'".indexOf(feature['osm_id'] ) > -1 ;
    }
}


function exp_ZonasUrbanas_5rule2_eval_expression(context) {
    // "osm_id"  IN ('5836737')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'5836737'".indexOf(feature.properties['osm_id'] ) > -1 ;
    } else {
        return "'5836737'".indexOf(feature['osm_id'] ) > -1 ;
    }
}


function exp_Calles_6rule0_eval_expression(context) {
    // 

    var feature = context.feature;
    
    if (feature.properties) {
        return null;
    } else {
        return null;
    }
}


function exp_Calles_6rule1_eval_expression(context) {
    // 

    var feature = context.feature;
    
    if (feature.properties) {
        return null;
    } else {
        return null;
    }
}


function exp_Calles_6rule2_eval_expression(context) {
    // 

    var feature = context.feature;
    
    if (feature.properties) {
        return null;
    } else {
        return null;
    }
}


function exp_Parcelas_10rule0_eval_expression(context) {
    // left("layer", 3) = 'pnu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (fnc_left([feature.properties['layer'] ,3], context) == 'pnu');
    } else {
        return (fnc_left([feature['layer'] ,3], context) == 'pnu');
    }
}


function exp_Parcelas_10rule1_eval_expression(context) {
    // left("layer", 3) = 'pnr'

    var feature = context.feature;
    
    if (feature.properties) {
        return (fnc_left([feature.properties['layer'] ,3], context) == 'pnr');
    } else {
        return (fnc_left([feature['layer'] ,3], context) == 'pnr');
    }
}


function exp_Distritos_12rule0_eval_expression(context) {
    // "nombre_distrito"  IN ('San Carlos Centro')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'San Carlos Centro'".indexOf(feature.properties['nombre_distrito'] ) > -1 ;
    } else {
        return "'San Carlos Centro'".indexOf(feature['nombre_distrito'] ) > -1 ;
    }
}


function exp_Distritos_12rule1_eval_expression(context) {
    // "nombre_distrito"  IN ('San Carlos Sud')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'San Carlos Sud'".indexOf(feature.properties['nombre_distrito'] ) > -1 ;
    } else {
        return "'San Carlos Sud'".indexOf(feature['nombre_distrito'] ) > -1 ;
    }
}


function exp_Distritos_12rule2_eval_expression(context) {
    // "nombre_distrito"  IN ('San Carlos Norte')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'San Carlos Norte'".indexOf(feature.properties['nombre_distrito'] ) > -1 ;
    } else {
        return "'San Carlos Norte'".indexOf(feature['nombre_distrito'] ) > -1 ;
    }
}


function exp_Distritos_12rule3_eval_expression(context) {
    // "nombre_distrito"  IN ('Matilde')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'Matilde'".indexOf(feature.properties['nombre_distrito'] ) > -1 ;
    } else {
        return "'Matilde'".indexOf(feature['nombre_distrito'] ) > -1 ;
    }
}


function exp_Distritos_12rule4_eval_expression(context) {
    // "nombre_distrito"  IN ('San Agustín')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'San Agust\u00edn'".indexOf(feature.properties['nombre_distrito'] ) > -1 ;
    } else {
        return "'San Agust\u00edn'".indexOf(feature['nombre_distrito'] ) > -1 ;
    }
}


function exp_Distritos_12rule5_eval_expression(context) {
    // "nombre_distrito"  IN ('San Jerónimo Del Sauce')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'San Jer\u00f3nimo Del Sauce'".indexOf(feature.properties['nombre_distrito'] ) > -1 ;
    } else {
        return "'San Jer\u00f3nimo Del Sauce'".indexOf(feature['nombre_distrito'] ) > -1 ;
    }
}


function exp_Distritos_12rule6_eval_expression(context) {
    // "nombre_distrito"  IN ('Santa Clara De Buena Vista')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'Santa Clara De Buena Vista'".indexOf(feature.properties['nombre_distrito'] ) > -1 ;
    } else {
        return "'Santa Clara De Buena Vista'".indexOf(feature['nombre_distrito'] ) > -1 ;
    }
}