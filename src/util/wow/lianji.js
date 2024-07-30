export function lianji( log, bagList, quota,curMonsterList) {
    quota.curExp++;
    if (quota.curExp >= quota.nextLevelExp) {
        quota.curLevel++;
        quota.curExp -= quota.nextLevelExp;
    }
      //击杀随机怪物
      const randomMonster = curMonsterList[Math.floor(Math.random() * curMonsterList.length)];
      log.push("击杀"+randomMonster.name+",获得经验值 1 ")
      //掉落判断逻辑
    if (Math.random() < 0.3) {
        const randomItem = randomMonster.item[Math.floor(Math.random() * randomMonster.item.length)];
        log.push("获得物品" + randomItem.name);
        const existingItem = bagList.find(item => item.name === randomItem.name);

        if (existingItem) {
            existingItem.num++;
        } else {
            bagList.push({
                name: randomItem.name,
                num: 1,
                item_function: randomItem.item_function,
                comment: randomItem.comment,
            });
        }
    }
}

