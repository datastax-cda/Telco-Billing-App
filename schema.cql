CREATE TABLE IF NOT EXISTS telco_billing_ks.users (
    key text,
    p0 text,
    p1 text,
    p2 text,
    p3 text,
    p4 text,
    p5 text,
    p6 text,
    p7 text,
    p8 text,
    p9 text,
    p10 text,
    p11 text,
    p12 text,
    p13 text,
    p14 text,
    p15 text,
    p16 text,
    p17 text,
    p18 text,
    p19 text,
    p20 text,
    p21 text,
    p22 text,
    p23 text,
    p24 text,
    p25 text,
    p26 text,
    p27 text,
    p28 text,
    p29 text,
    p30 text,
    p31 text,
    p32 text,
    p33 text,
    p34 text,
    p35 text,
    p36 text,
    p37 text,
    p38 text,
    p39 text,
    p40 text,
    p41 text,
    p42 text,
    p43 text,
    p44 text,
    bool_value tinyint,
    dbl_value double,
    leaf text,
    text_value text,
    PRIMARY KEY (key, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44)
) WITH CLUSTERING ORDER BY (p0 ASC, p1 ASC, p2 ASC, p3 ASC, p4 ASC, p5 ASC, p6 ASC, p7 ASC, p8 ASC, p9 ASC, p10 ASC, p11 ASC, p12 ASC, p13 ASC, p14 ASC, p15 ASC, p16 ASC, p17 ASC, p18 ASC, p19 ASC, p20 ASC, p21 ASC, p22 ASC, p23 ASC, p24 ASC, p25 ASC, p26 ASC, p27 ASC, p28 ASC, p29 ASC, p30 ASC, p31 ASC, p32 ASC, p33 ASC, p34 ASC, p35 ASC, p36 ASC, p37 ASC, p38 ASC, p39 ASC, p40 ASC, p41 ASC, p42 ASC, p43 ASC, p44 ASC);
CREATE CUSTOM INDEX IF NOT EXISTS users_bool_value_idx ON telco_billing_ks.users (bool_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS users_text_value_idx ON telco_billing_ks.users (text_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS users_leaf_idx ON telco_billing_ks.users (leaf) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS users_dbl_value_idx ON telco_billing_ks.users (dbl_value) USING 'StorageAttachedIndex';

CREATE TABLE IF NOT EXISTS telco_billing_ks.consumption (
    accountid int,
    invocation_time timestamp,
    datausage float,
    end_time timestamp,
    ratinggroup int,
    sliceid int,
    start_time timestamp,
    PRIMARY KEY (accountid, invocation_time)
) WITH CLUSTERING ORDER BY (invocation_time DESC);

CREATE TABLE IF NOT EXISTS telco_billing_ks.phone_location (
    phone_id text,
    record_count int,
    latitude float,
    longitude float,
    PRIMARY KEY (phone_id, record_count)
) WITH CLUSTERING ORDER BY (record_count DESC);

CREATE TABLE IF NOT EXISTS telco_billing_ks.chipotle_stores (
    state text,
    location text,
    address text,
    latitude decimal,
    longitude decimal,
    PRIMARY KEY (state, location)
) WITH CLUSTERING ORDER BY (location ASC);

CREATE TABLE IF NOT EXISTS telco_billing_ks.daily_data_usage (
    accountno int,
    year int,
    month int,
    date int,
    datausage float,
    day text,
    PRIMARY KEY (accountno, year, month, date)
) WITH CLUSTERING ORDER BY (year DESC, month DESC, date DESC);

CREATE TABLE IF NOT EXISTS telco_billing_ks.ratinggroup (
    ratinggroup int PRIMARY KEY,
    charge float,
    plan int,
    plan_detail text,
    provisoned_data int,
    value_added_service int
);

CREATE TABLE IF NOT EXISTS telco_billing_ks.cyclist_semi_pro (
    id int PRIMARY KEY,
    affiliation map<text, text>,
    age int,
    country text,
    firstname text,
    lastname text,
    registration date
);

CREATE TABLE IF NOT EXISTS telco_billing_ks.accountinfo (
    key text,
    p0 text,
    p1 text,
    p2 text,
    p3 text,
    p4 text,
    p5 text,
    p6 text,
    p7 text,
    p8 text,
    p9 text,
    p10 text,
    p11 text,
    p12 text,
    p13 text,
    p14 text,
    p15 text,
    p16 text,
    p17 text,
    p18 text,
    p19 text,
    p20 text,
    p21 text,
    p22 text,
    p23 text,
    p24 text,
    p25 text,
    p26 text,
    p27 text,
    p28 text,
    p29 text,
    p30 text,
    p31 text,
    p32 text,
    p33 text,
    p34 text,
    p35 text,
    p36 text,
    p37 text,
    p38 text,
    p39 text,
    p40 text,
    p41 text,
    p42 text,
    p43 text,
    p44 text,
    bool_value tinyint,
    dbl_value double,
    leaf text,
    text_value text,
    PRIMARY KEY (key, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44)
) WITH CLUSTERING ORDER BY (p0 ASC, p1 ASC, p2 ASC, p3 ASC, p4 ASC, p5 ASC, p6 ASC, p7 ASC, p8 ASC, p9 ASC, p10 ASC, p11 ASC, p12 ASC, p13 ASC, p14 ASC, p15 ASC, p16 ASC, p17 ASC, p18 ASC, p19 ASC, p20 ASC, p21 ASC, p22 ASC, p23 ASC, p24 ASC, p25 ASC, p26 ASC, p27 ASC, p28 ASC, p29 ASC, p30 ASC, p31 ASC, p32 ASC, p33 ASC, p34 ASC, p35 ASC, p36 ASC, p37 ASC, p38 ASC, p39 ASC, p40 ASC, p41 ASC, p42 ASC, p43 ASC, p44 ASC);
CREATE CUSTOM INDEX IF NOT EXISTS accountinfo_leaf_idx ON telco_billing_ks.accountinfo (leaf) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS accountinfo_dbl_value_idx ON telco_billing_ks.accountinfo (dbl_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS accountinfo_bool_value_idx ON telco_billing_ks.accountinfo (bool_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS accountinfo_text_value_idx ON telco_billing_ks.accountinfo (text_value) USING 'StorageAttachedIndex';

CREATE TABLE IF NOT EXISTS telco_billing_ks.games (
    key text,
    p0 text,
    p1 text,
    p2 text,
    p3 text,
    p4 text,
    p5 text,
    p6 text,
    p7 text,
    p8 text,
    p9 text,
    p10 text,
    p11 text,
    p12 text,
    p13 text,
    p14 text,
    p15 text,
    p16 text,
    p17 text,
    p18 text,
    p19 text,
    p20 text,
    p21 text,
    p22 text,
    p23 text,
    p24 text,
    p25 text,
    p26 text,
    p27 text,
    p28 text,
    p29 text,
    p30 text,
    p31 text,
    p32 text,
    p33 text,
    p34 text,
    p35 text,
    p36 text,
    p37 text,
    p38 text,
    p39 text,
    p40 text,
    p41 text,
    p42 text,
    p43 text,
    p44 text,
    bool_value tinyint,
    dbl_value double,
    leaf text,
    text_value text,
    PRIMARY KEY (key, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44)
) WITH CLUSTERING ORDER BY (p0 ASC, p1 ASC, p2 ASC, p3 ASC, p4 ASC, p5 ASC, p6 ASC, p7 ASC, p8 ASC, p9 ASC, p10 ASC, p11 ASC, p12 ASC, p13 ASC, p14 ASC, p15 ASC, p16 ASC, p17 ASC, p18 ASC, p19 ASC, p20 ASC, p21 ASC, p22 ASC, p23 ASC, p24 ASC, p25 ASC, p26 ASC, p27 ASC, p28 ASC, p29 ASC, p30 ASC, p31 ASC, p32 ASC, p33 ASC, p34 ASC, p35 ASC, p36 ASC, p37 ASC, p38 ASC, p39 ASC, p40 ASC, p41 ASC, p42 ASC, p43 ASC, p44 ASC);
CREATE CUSTOM INDEX IF NOT EXISTS games_bool_value_idx ON telco_billing_ks.games (bool_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS games_dbl_value_idx ON telco_billing_ks.games (dbl_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS games_leaf_idx ON telco_billing_ks.games (leaf) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS games_text_value_idx ON telco_billing_ks.games (text_value) USING 'StorageAttachedIndex';

CREATE TABLE IF NOT EXISTS telco_billing_ks.charged_usage (
    accountno int,
    year int,
    month int,
    datausage float,
    month_name text,
    PRIMARY KEY (accountno, year, month)
) WITH CLUSTERING ORDER BY (year DESC, month DESC);

CREATE TABLE IF NOT EXISTS telco_billing_ks.login (
    username text PRIMARY KEY,
    account int
);

CREATE TABLE IF NOT EXISTS telco_billing_ks."covid_19_MH" (
    "Sno" int,
    "Date" text,
    "Confirmed" int,
    "Cured" int,
    "Deaths" int,
    "State" text,
    "Time" text,
    PRIMARY KEY ("Sno", "Date")
) WITH CLUSTERING ORDER BY ("Date" ASC);

CREATE TABLE IF NOT EXISTS telco_billing_ks.subscription (
    key text,
    p0 text,
    p1 text,
    p2 text,
    p3 text,
    p4 text,
    p5 text,
    p6 text,
    p7 text,
    p8 text,
    p9 text,
    p10 text,
    p11 text,
    p12 text,
    p13 text,
    p14 text,
    p15 text,
    p16 text,
    p17 text,
    p18 text,
    p19 text,
    p20 text,
    p21 text,
    p22 text,
    p23 text,
    p24 text,
    p25 text,
    p26 text,
    p27 text,
    p28 text,
    p29 text,
    p30 text,
    p31 text,
    p32 text,
    p33 text,
    p34 text,
    p35 text,
    p36 text,
    p37 text,
    p38 text,
    p39 text,
    p40 text,
    p41 text,
    p42 text,
    p43 text,
    p44 text,
    bool_value tinyint,
    dbl_value double,
    leaf text,
    text_value text,
    PRIMARY KEY (key, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44)
) WITH CLUSTERING ORDER BY (p0 ASC, p1 ASC, p2 ASC, p3 ASC, p4 ASC, p5 ASC, p6 ASC, p7 ASC, p8 ASC, p9 ASC, p10 ASC, p11 ASC, p12 ASC, p13 ASC, p14 ASC, p15 ASC, p16 ASC, p17 ASC, p18 ASC, p19 ASC, p20 ASC, p21 ASC, p22 ASC, p23 ASC, p24 ASC, p25 ASC, p26 ASC, p27 ASC, p28 ASC, p29 ASC, p30 ASC, p31 ASC, p32 ASC, p33 ASC, p34 ASC, p35 ASC, p36 ASC, p37 ASC, p38 ASC, p39 ASC, p40 ASC, p41 ASC, p42 ASC, p43 ASC, p44 ASC);
CREATE CUSTOM INDEX IF NOT EXISTS subscription_text_value_idx ON telco_billing_ks.subscription (text_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS subscription_bool_value_idx ON telco_billing_ks.subscription (bool_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS subscription_dbl_value_idx ON telco_billing_ks.subscription (dbl_value) USING 'StorageAttachedIndex';
CREATE CUSTOM INDEX IF NOT EXISTS subscription_leaf_idx ON telco_billing_ks.subscription (leaf) USING 'StorageAttachedIndex';
