module.exports = {
    extra:function (data, data1) {
        let matchId = data.reduce((file, item) => {

            if (item.season == 2016) {
                file.push(item.id);
            }
            return file;
        }, [])
        let team = data1.reduce((file, item) => {
            if (matchId.includes(item.match_id)) {
                file[item.batting_team] = (file[item.batting_team] || 0) + parseInt(item.extra_runs);
            }
            return file;
        }, {});
        return team;

    }


}