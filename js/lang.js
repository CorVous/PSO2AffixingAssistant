/**
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2018  Arthur Malulley B. de O.
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

const lang = Object.freeze({
    "app": {
        appTitle: {
            en: "PSO2 Affixing Assistant",
            jp: "PSO2合成アシスタント"
        },
        subHeader: {
            en: "How it works:",
            jp: "使い方："
        },
        goalFodderTitle: {
            en: "GOAL",
            jp: "ゴール"
        },
        mainFodderTitle: {
            en: "Main Fodder",
            jp: "主装備"
        },
        fodderTitle: {
            en: "Fodder",
            jp: "装備"
        },
        materialTitle: {
            en: "Material Fodder",
            jp: "材料装備"
        },
        affixLabel: {
            en: "AFFIX IT",
            jp: "合成"
        },
        reAffixLabel: {
            en: "RE-AFFIX IT",
            jp: "再合成"
        },
        cannotAffixLabel: {
            en: "CANNOT AFFIX",
            jp: "塞がり"
        },
        transplantLabel: {
            en: "TRANSFER IT",
            jp: "移植"
        },
        reTransplantLabel: {
            en: "RE-TRANSFER IT",
            jp: "再移植"
        },
        cannotTransplantLabel: {
            en: "CANNOT TRANSFER",
            jp: "移植不可能"
        },
        stageSuccessLabel: {
            en: "Stage Success",
            jp: "ステージの成功"
        },
        abilitySuccessSpanTitle: {
            en: (rate) => `${rate}% chance of transfering this ability`,
            jp: (rate) => `この能力を${rate}％の確率で譲渡する`
        },
        stageTransplantCostLabel: {
            en: "Stage Transfer Cost",
            jp: "ステージ移植費用"
        },
        fodderTransplantCostLabel: {
            en: "Transfer Cost",
            jp: "移植費用"
        },
        factorLabel: {
            en: "Augment Factor",
            jp: "特殊能力因子"
        },
        fodderSuccessDivTitle: {
            en: "Success in making this equipment",
            jp: "この機器の製造に成功"
        },
        goalLabel: {
            en: "Goal",
            jp: "ゴール"
        },
        fodderLabel: {
            en: "Fodder",
            jp: "装備"
        },
        fodderSuccessLabel: {
            en: "Success",
            jp: "成功率"
        },
        sameEquipLabel: {
            en: "Same Equipment",
            jp: "同じ機器"
        },
        sameEquipDescription: {
            en: "Is fodder made with identical equipment?",
            jp: "それは同じ装置で作られていますか？"
        },
        rateBoostDescription: {
            en: "Is fodder using Affix Boost Item?",
            jp: "合成ブーストアイテムが使用されていますか？"
        },
        potDescription: {
            en: "Does equipment have potential that boosts affixing?",
            jp: "装置は合成を促進する 潜在能力を持っていますか？"
        },
        boostWeekOption: {
            en: (option) => `+${option}% Boost Week`,
            jp: (option) => `+${option}%ブーストウィーク`
        },
        boostWeekDescription: {
            en: "Additional affixing boost from boost week",
            jp: "ブースト週間からの追加の固定ブースト"
        },
        rateStarsRequest: {
            en: "Rate the New Formula?",
            jp: "新しい式を評価しますか？"
        },
        rateStarsRated: {
            en: "Thank You!",
            jp: "ありがとう！"
        },
        rateStars1AltText: {
            en: "Terrible",
            jp: "ひどい"
        },
        rateStars2AltText: {
            en: "Bad",
            jp: "悪い"
        },
        rateStars4AltText: {
            en: "Great",
            jp: "良い"
        },
        rateStars5AltText: {
            en: "Incredible",
            jp: "すごい"
        },
        shareFormulaTitle: {
            en: "Link to This Formula",
            jp: "この数式へのリンク"
        },
        shareFormulaButton: {
            en: "Copy to Clipboard (Long)",
            jp: "クリップボードにコピー(長いです)"
        },
        shareFormulaButtonShort: {
            en: "Copy to Clipboard (Short)",
            jp: "クリップボードにコピー(ショート)"
        },
        openInSimButton: {
            en: "Open in Affix Simulator",
            jp: "合成シミュレータで開く"
        },
        closeButton: {
            en: "Close",
            jp: "閉じる"
        },
        filterSearchPlaceholder: {
            en: "Search affixes..",
            jp: "能力を検索する。。"
        },
        filterSearchTitle: {
            en: "Type in an augment name",
            jp: "能力名を入力して"
        },
        excludeSearchPlaceholder: {
            en: "Exclude affixes (,)",
            jp: "能力を除外（、）"
        },
        excludeSearchTitle: {
            en: "Type in augment names to exclude separated by comma",
            jp: "除外する能力名をコンマで区切って入力します"
        },
        excludeSearchBtn: {
            en: "Toggle to exclude results",
            jp: "結果を除外するトグル"
        },
        chooseAffixTitle: {
            en: "Choose Augments",
            jp: "能力を選ぶ"
        },
        chooseMethodTitle: {
            en: "Choose Method of Making",
            jp: "作り方を選ぶ"
        },
        reviewTweakTitle: {
            en: "Review and Tweak",
            jp: "レビューと微調整"
        },
        reviewTweakTooltip1: {
            en: "Select augments to change places",
            jp: "場所を変更する能力を選択する"
        },
        reviewTweakTooltip2: {
            en: "And press confirm when ready",
            jp: "準備ができたら確定を押してください"
        },
        transplantTitle: {
            en: "Augment Transfer Pass",
            jp: "特殊能力移植"
        },
        transplantTooltip: {
            en: "<strong>WARNING</strong>: The formula below will cause the Material Fodder to lose some augment slots.",
            jp: "<strong>警告</strong>: 以下の式では、マテリアルフォダーが一部の能力スロットを失います。"
        },
        transplantOptionsLabel: {
            en: "Transfer Options:",
            jp: "移植オプション"
        },
        transplantMaterialSlotLabel: {
            en: "Material Slot",
            jp: "材料のスロット数"
        },
        transplantAddAbilityItemLabel: {
            en: "Add Augment Item",
            jp: "特殊能力追加"
        },
        selectButton: {
            en: "Select",
            jp: "選択する"
        },
        cancelButton: {
            en: "Cancel",
            jp: "キャンセル"
        },
        resetButton: {
            en: "Reset",
            jp: "リセット"
        },
        affixingTitle: {
            en: "Affixing",
            jp: "合成"
        },
        reportIssueTitle: {
            en: "Uh oh...",
            jp: "ええとああ。。。"
        },
        reportIssueDescription: {
            en: "Something went wrong while building this affixing formula. Would you like to report this problem?",
            jp: "この式を作成中に何かがうまくいかなかった。この問題を報告しますか？"
        },
        reportIssueButtonLabel: {
            en: "Open GitHub Issues Page",
            jp: "GitHubの問題ページを開く"
        },
        formulaSheetTitle: {
            en: "Affixing Formula Sheet",
            jp: "合成フォーミュラシート"
        },
        affixUse: {
            en: (successRate, affixName, choicesString) => `${successRate}% Making ${affixName} with: ${choicesString}`,
            jp: (successRate, affixName, choicesString) => `${successRate}%と一緒に${affixName}を作る: ${choicesString}`
        },
        wishListTitle: {
            en: "Materials Needed",
            jp: "必要な材料"
        },
        wishListItemDivider: {
            en: ', ',
            jp: '、'
        },
        wishListFactorDescription: {
            en: (name) => ` (Augment Factor: ${name})`,
            jp: (name) => `（特殊能力因子：${name}）`
        },
        wishListAbilityItem: {
            en: (fodder) => `${fodder.size()}s Fodder: ${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `Any Junk` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_en).sort().join(lang.app.wishListItemDivider.en)}`,
            jp: (fodder) => `${fodder.size()}スロット装備：${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `ジャンク` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_jp).sort().join(lang.app.wishListItemDivider.jp)}`
        },
        wishListAbilityDescription: {
            en: (amount, description) => `${(amount > 1) ? `(${amount}x) ` : ``}${description}`,
            jp: (amount, description) => `${(amount > 1) ? `（${amount}倍）` : ``}${description}`
        },
        wishListTransplantCostDescr: {
            en: (count) => `${count} Augmentation Transfer Pass${count > 1 ? `es` : ``}`,
            jp: (count) => `${count}特殊能力移植パス`
        },
        upslottingLabel: {
            en: "Affix By Upslotting",
            jp: "増加カウントによる合成"
        },
        upslottingDescription: {
            en: "Using equipment with less slots to make gear with more slots",
            jp: "より少ないスロットの装置を使用して、より多くのスロットを備えたギアを作る"
        },
        spreadLabel: {
            en: "Use All Six Fodders",
            jp: "6つの合成スロットをすべて使用する"
        },
        spreadDescription: {
            en: "Makes it cheaper to produce the intermediary equipment",
            jp: "仲介機器を生産するのが安くなる"
        },
        trainerLabel: {
            en: "Guidance Trainer +5%",
            jp: "錬成の導き"
        },
        trainerDescription: {
            en: "Increases affixing success rate by 5% (it must be in the main fodder)",
            jp: "特殊能力の成功率を5％上昇させる(それは主装備の中にある必要があります)"
        },
        affixingSelectionTitle: {
            en: "Affixing Goal",
            jp: "合成目標"
        },
        statsViewerTitle: {
            en: "Stats",
            jp: "状態"
        },
        affixChoices: {
            en: "Choices",
            jp: "選択肢"
        },
        affixChoiceLabel: {
            en: "Affix",
            jp: "合成"
        },
        abilityListTitle: {
            en: "Augment",
            jp: "能力"
        },
        abilityFormulasTitle: {
            en: "How To Make",
            jp: "作成方法"
        },
        abilityFormulaUsesTitle: {
            en: "Used To Make",
            jp: "合成に使用"
        },
        warningMsg: {
            en: abilities => `WARNING! The following augments can only be transferred via Augmentation Transfer: ${abilities.reduce((a, b, c) => a + (c === 0 ? '' : ', ') + b )}`,
            jp: abilities => `警告！以下の能力は、特殊能力移植でのみ譲渡できます:${abilities.reduce((a, b, c) => a + (c === 0 ? '' : '、') + b)}`
        },
        cancelButton: {
            en: "Cancel",
            jp: "取消"
        },
        transplantButton: {
            en: "Transfer",
            jp: "移植"
        },
        affixButton: {
            en: "Affix",
            jp: "合成"
        },
        confirmButton: {
            en: "Confirm",
            jp: "確認"
        },
        menuStartNewDescription: {
            en: "Check or change the affixing goal",
            jp: "合成目標を確定または変更する"
        },
        menuWishListDescription: {
            en: "View fodders needed",
            jp: "必要な装備を見る"
        },
        menuFormulaSheetDescription: {
            en: "View affixing formula sheet",
            jp: "合成式の表示"
        },
        menuShareDescription: {
            en: "Share the link to this affixing formula",
            jp: "この合成式へのリンクを共有する"
        },
        menuLanguageDescription: {
            en: "Switch languase (japanese/日本語)",
            jp: "スイッチランゲージ（英語/English）"
        },
        menuThemesDescription: {
            en: "Change application theme",
            jp: "アプリケーションのテーマを変更する"
        },
        menuTargetDescription: {
            en: "Display affixing goal",
            jp: "合成目標を表示する"
        },
        menuBugDescription: {
            en: "Report a problem",
            jp: "問題を報告"
        },
        malulleybovo: {
            en: "by malulleybovo",
            jp: "malulleybovoから"
        }
    },
    "filters": {
        en: ["All", "MEL Pwr", "RNG Pwr", "TEC Pwr", "PP", "HP", "DEX"],
        jp: ["全", "打撃力", "射撃力", "法撃力", "PP", "HP", "技量"]
    },
    "statsDisplayOrder": {
        en: ["MEL Pwr", "RNG Pwr", "TEC Pwr", "PP", "HP", "DEX", "MEL Def", "RNG Def", "TEC Def"], // Others follow after
        jp: ["打撃力", "射撃力", "法撃力", "PP", "HP", "技量", "打撃防御", "射撃防御", "法撃防御"] // Others follow after
    },
    "synonyms": {
        en: {
            "ALL": ["MEL Pwr", "RNG Pwr", "TEC Pwr", "MEL Def", "RNG Def", "TEC Def"],
            "All Resist": ["Fire Resist", "Ice Resist", "Lightning Resist", "Wind Resist", "Light Resist", "Dark Resist"]
        },
        jp: {
            "ALL": ["打撃力", "射撃力", "法撃力", "技量", "打撃防御", "射撃防御", "法撃防御"],
            "All Resist": ["炎耐性", "氷耐性", "雷耐性", "風耐性", "光耐性", "闇耐性"]
        }
    },
    "support": {
        "Nothing": {
            en: "Nothing",
            jp: "無し"
        },
        "Augmentation Aid +5%": {
            en: "Augmentation Aid +5%",
            jp: "能力追加成功率+5%"
        },
        "Augmentation Aid +10%": {
            en: "Augmentation Aid +10%",
            jp: "能力追加成功率+10%"
        },
        "Augmentation Aid +20%": {
            en: "Augmentation Aid +20%",
            jp: "能力追加成功率+20%"
        },
        "Augmentation Aid +30%": {
            en: "Augmentation Aid +30%",
            jp: "能力追加成功率+30%"
        },
        "Augmentation Aid +40%": {
            en: "Augmentation Aid +40%",
            jp: "能力追加成功率+40%"
        },
        "Augmentation Aid +45%": {
            en: "Augmentation Aid +45%",
            jp: "能力追加成功率+45%"
        },
        "Augmentation Aid +50%": {
            en: "Augmentation Aid +50%",
            jp: "能力追加成功率+50%"
        },
		"Augmentation Aid +55%": {
            en: "Augmentation Aid +55%",
            jp: "能力追加成功率+55%"
        },
		"Augmentation Aid +60%": {
            en: "Augmentation Aid +60%",
            jp: "能力追加成功率+60%"
        }
    },
    "additional": {
        "Nothing": {
            en: "Nothing",
            jp: "無し"
        },
        "Add Ability (HP)": {
            en: "Add Ability (HP)",
            jp: "特殊能力追加(HP)"
        },
        "Add Ability (PP)": {
            en: "Add Ability (PP)",
            jp: "特殊能力追加(PP)"
        },
        "Add Ability (MEL Pwr)": {
            en: "Add Ability (MEL Pwr)",
            jp: "特殊能力追加(打撃)"
        },
        "Add Ability (RNG Pwr)": {
            en: "Add Ability (RNG Pwr)",
            jp: "特殊能力追加(射撃)"
        },
        "Add Ability (TEC Pwr)": {
            en: "Add Ability (TEC Pwr)",
            jp: "特殊能力追加(法撃)"
        },
        "Add Ability (Tenora)": {
            en: "Add Ability (Tenora)",
            jp: "特殊能力追加(テノラ)"
        },
        "Add Ability (GRM)": {
            en: "Add Ability (GRM)",
            jp: "特殊能力追加(GRM)"
        },
        "Add Ability (Yohmei)": {
            en: "Add Ability (Yohmei)",
            jp: "特殊能力追加(ヨウメイ)"
        },
        "Add Ability (HP&PP)": {
            en: "Add Ability (HP&PP)",
            jp: "特殊能力追加(HP&PP)"
        },
        "Add Ability (HP&PP/2)": {
            en: "Add Ability (HP&PP/2)",
            jp: "特殊能力(HP&PP/2)"
        },
        "Add Ability (HP&PP/3)": {
            en: "Add Ability (HP&PP/3)",
            jp: "特殊能力(HP&PP/3)"
        },
        "Add Ability (Grand HP)": {
            en: "Add Ability (Grand HP)",
            jp: "特殊能力(グランドHP)"
        },
        "Add Ability (MEL Pwr&PP)": {
            en: "Add Ability (MEL Pwr&PP)",
            jp: "特殊能力追加(打撃&PP)"
        },
        "Add Ability (MEL Pwr&PP/2)": {
            en: "Add Ability (MEL Pwr&PP/2)",
            jp: "特殊能力(打撃&PP/2)"
        },
        "Add Ability (MEL Pwr&PP/3)": {
            en: "Add Ability (MEL Pwr&PP/3)",
            jp: "特殊能力(打撃&PP/3)"
        },
        "Add Ability (Grand P)": {
            en: "Add Ability (Grand P)",
            jp: "特殊能力(グランドP)"
        },
        "Add Ability (RNG Pwr&PP)": {
            en: "Add Ability (RNG Pwr&PP)",
            jp: "特殊能力追加(射撃&PP)"
        },
        "Add Ability (RNG Pwr&PP/2)": {
            en: "Add Ability (RNG Pwr&PP/2)",
            jp: "特殊能力(射撃&PP/2)"
        },
        "Add Ability (RNG Pwr&PP/3)": {
            en: "Add Ability (RNG Pwr&PP/3)",
            jp: "特殊能力(射撃&PP/3)"
        },
        "Add Ability (Grand S)": {
            en: "Add Ability (Grand S)",
            jp: "特殊能力(グランドS)"
        },
        "Add Ability (TEC Pwr&PP)": {
            en: "Add Ability (TEC Pwr&PP)",
            jp: "特殊能力追加(法撃&PP)"
        },
        "Add Ability (TEC Pwr&PP/2)": {
            en: "Add Ability (TEC Pwr&PP/2)",
            jp: "特殊能力(法撃&PP/2)"
        },
        "Add Ability (TEC Pwr&PP/3)": {
            en: "Add Ability (TEC Pwr&PP/3)",
            jp: "特殊能力(法撃&PP/3)"
        },
        "Add Ability (Grand T)": {
            en: "Add Ability (Grand T)",
            jp: "特殊能力(グランドT)"
        },
        "Add Ability (Grand PP)": {
            en: "Add Ability (Grand PP)",
            jp: "特殊能力(グランドPP)"
        },
        "Add Ability (Offense Focus)": {
            en: "Add Ability (Offense Focus)",
            jp: "特殊能力追加(攻撃総合)"
        },
        "Add Ability (Offense Focus/2)": {
            en: "Add Ability (Offense Focus/2)",
            jp: "特殊能力追加(攻撃総合/2)"
        },
        "Add Ability (Defense Focus)": {
            en: "Add Ability (Defense Focus)",
            jp: "特殊能力追加(防御総合)"
        },
        "Add Ability (Defense Focus/2)": {
            en: "Add Ability (Defense Focus/2)",
            jp: "特殊能力追加(防御総合/2)"
        },
        "Add Ability (Attack Inherit)": {
            en: "Add Ability (Attack Inherit)",
            jp: "特殊能力追加(攻撃継承)"
        },
        "Add Ability (Defense Inherit)": {
            en: "Add Ability (Defense Inherit)",
            jp: "特殊能力追加(防御継承)"
        },
        "Add Ability (Photon Inherit)": {
            en: "Add Ability (Photon Inherit)",
            jp: "特殊能力追加(心身継承)"
        },
        "Add Ability (Mark Receptor)": {
            en: "Add Ability (Mark Receptor)",
            jp: "特殊能力追加(マークレセプター)"
        },
        "Add Ability (Divine Receptor)": {
            en: "Add Ability (Divine Receptor)",
            jp: "特殊能力追加(ディバインレセプター)"
        },
        "Add Ability (Catalyst Receptor)": {
            en: "Add Ability (Catalyst Receptor)",
            jp: "特殊能力追加(カタリストレセプター)"
        },
        "Add Ability (Sentence P)": {
            en: "Add Ability (Sentence P)",
            jp: "特殊能力(センテンスP)"
        },
        "Add Ability (Sentence S)": {
            en: "Add Ability (Sentence S)",
            jp: "特殊能力(センテンスS)"
        },
        "Add Ability (Sentence T)": {
            en: "Add Ability (Sentence T)",
            jp: "特殊能力(センテンスT)"
        },
        "Add Ability (Might VI)": {
            en: "Add Ability (Might VI)",
            jp: "特殊能力(パワーⅥ)"
        },
        "Add Ability (Precision VI)": {
            en: "Add Ability (Precision VI)",
            jp: "特殊能力(シュートⅥ)"
        },
        "Add Ability (Casting VI)": {
            en: "Add Ability (Casting VI)",
            jp: "特殊能力(テクニックⅥ)"
        },
        "Add Ability (Mastery IV)": {
            en: "Add Ability (Mastery IV)",
            jp: "特殊能力(アビリティⅣ)"
        },
        "Add Ability (Mark Joy)": {
            en: "Add Ability (Mark Joy)",
            jp: "特殊能力(マーク・ジョイオ)"
        },
        "Add Ability (Mark Courage)": {
            en: "Add Ability (Mark Courage)",
            jp: "特殊能力(マーク・カレジナ)"
        },
        "Add Ability (Mark Anger)": {
            en: "Add Ability (Mark Anger)",
            jp: "特殊能力(マーク・アンガル)"
        },
        "Add Ability (Mark Grief)": {
            en: "Add Ability (Mark Grief)",
            jp: "特殊能力(マーク・グリフ)"
        },
        "S1 Add: Photon Reduction 2": {
            en: "S1 Add: Photon Reduction 2",
            jp: "S1追加:光子縮減2"
        },
        "S1 Add: Brilliant Ruin 2": {
            en: "S1 Add: Brilliant Ruin 2",
            jp: "S1追加:滅域輝与2"
        },
        "S1 Add: Flowing Intent": {
            en: "S1 Add: Flowing Intent",
            jp: "S1追加:時流の志"
        },
        "S1 Add: Lethal Intent": {
            en: "S1 Add: Lethal Intent",
            jp: "S1追加:死中の志"
        },
        "S1 Add: Reckless Strike": {
            en: "S1 Add: Reckless Strike",
            jp: "S1追加:賭死の撃"
        },
        "S1 Add: Eclipsing Decay": {
            en: "S1 Add: Eclipsing Decay",
            jp: "S1追加:失力の蝕"
        },
        "S1 Add: Augment Intent": {
            en: "S1 Add: Augment Intent",
            jp: "S1追加:錬成の志"
        },
        "S1 Add: Photon Balance": {
            en: "S1 Add: Photon Balance",
            jp: "S1追加:光子の秤"
        },
        "S1 Add: Collaborator Liberator": {
            en: "S1 Add: Collaborator Liberator",
            jp: "S1追加:戦友の加護"
        },
        "S1 Add: Wise Skill": {
            en: "S1 Add: Wise Skill",
            jp: "S1追加:妙技の巧"
        },
        "S1 Add: Radiating Grace": {
            en: "S1 Add: Radiating Grace",
            jp: "S1追加:輝勢の恵"
        },
        "S1 Add: Skilled Brilliance": {
            en: "S1 Add: Skilled Brilliance",
            jp: "S1追加:輝充の志"
        },
        "S1 Add: Red Petal Flash": {
            en: "S1 Add: Red Petal Flash",
            jp: "S1追加:花ノ赤閃"
        },
        "S1 Add: Blue Ocean Flash": {
            en: "S1 Add: Blue Ocean Flash",
            jp: "S1追加:海ノ青閃"
        },
        "S1 Add: White Snow Flash": {
            en: "S1 Add: White Snow Flash",
            jp: "S1追加:雪ノ白閃"
        },
        "S1 Add: Yellow Moon Flash": {
            en: "S1 Add: Yellow Moon Flash",
            jp: "S1追加:月ノ黄閃"
        },
        "S1 Add: Green Leaf Flash": {
            en: "S1 Add: Green Leaf Flash",
            jp: "S1追加:葉ノ緑閃"
        },
        "S1 Add: Black Shadow Flash": {
            en: "S1 Add: Black Shadow Flash",
            jp: "S1追加:影ノ黒閃"
        },
        "S1 Add: Skilled Strike": {
            en: "S1 Add: Skilled Strike",
            jp: "S1追加:妙撃の志"
        },
        "S1 Add: Flowing Exhilaration": {
            en: "S1 Add: Flowing Exhilaration",
            jp: "S1追加:時流活与"
        },
        "S1 Add: Guardian Armor": {
            en: "S1 Add: Guardian Armor",
            jp: "S1追加:守護の備"
        },
        "S1 Add: Rupturing Excess": {
            en: "S1 Add: Rupturing Excess",
            jp: "S1追加:裂砕の剰"
        },
        "S1 Add: Spirited Response": {
            en: "S1 Add: Spirited Response",
            jp: "S1追加:気輝応変"
        },
        "S1 Add: Rupturing Intent": {
            en: "S1 Add: Rupturing Intent",
            jp: "S1追加:裂砕の志"
        },
        "S1 Add: Double-Edged Sword": {
            en: "S1 Add: Double-Edged Sword",
            jp: "S1追加:諸刃の撃"
        },
        "S1 Add: Radiant Strike": {
            en: "S1 Add: Radiant Strike",
            jp: "S1追加:輝剰の撃"
        },
        "S2 Add: Umbrageous Melody": {
            en: "S2 Add: Umbrageous Melody",
            jp: "S2追加:月葉影の歌"
        },
        "S2 Add: Nature's Reduction 2": {
            en: "S2 Add: Nature's Reduction 2",
            jp: "S2追加:花海雪の縮減2"
        },
        "S2 Add: Umbrageous Radiance 2": {
            en: "S2 Add: Umbrageous Radiance 2",
            jp: "S2追加:月葉影の輝剰2"
        },
        "S2 Add: Wise Skill 2": {
            en: "S2 Add: Wise Skill 2",
            jp: "S2追加:妙技の巧2"
        },
        "S2 Add: Skilled Strike 2": {
            en: "S2 Add: Skilled Strike 2",
            jp: "S2追加:妙撃の志2"
        },
        "S2 Add: Radiant Strike 2": {
            en: "S2 Add: Radiant Strike 2",
            jp: "S2追加:輝剰の撃2"
        },
        "S2 Add: Runner's High": {
            en: "S2 Add: Runner's High",
            jp: "S2追加:走者高揚"
        },
        "S2 Add: Skill Reduction": {
            en: "S2 Add: Skill Reduction",
            jp: "S2追加:技巧縮減"
        },
        "S2 Add: Heavenly Keeper": {
            en: "S2 Add: Heavenly Keeper",
            jp: "S2追加:保天輝地"
        },
        "S2 Add: Flowing Armor": {
            en: "S2 Add: Flowing Armor",
            jp: "S2追加:時流の護"
        },
        "S2 Add: Flowing Exhilaration": {
            en: "S2 Add: Flowing Exhilaration",
            jp: "S2追加:時流活与"
        },
        "S2 Add: Photon Reduction": {
            en: "S2 Add: Photon Reduction",
            jp: "S2追加:光子縮減"
        },
        "S2 Add: Sturdy Recovery": {
            en: "S2 Add: Sturdy Recovery",
            jp: "S2追加:剛乱活与"
        },
        "S2 Add: Cursed Radiance": {
            en: "S2 Add: Cursed Radiance",
            jp: "S2追加:災転輝与"
        },
        "S2 Add: Flowing Grace": {
            en: "S2 Add: Flowing Grace",
            jp: "S2追加:時流の恵"
        },
        "S2 Add: Rupturing Excess": {
            en: "S2 Add: Rupturing Excess",
            jp: "S2追加:裂砕の剰"
        },
        "S2 Add: Double-Edged Sword": {
            en: "S2 Add: Double-Edged Sword",
            jp: "S2追加:諸刃の撃"
        },
        "S2 Add: Rainbow's Intent": {
            en: "S2 Add: Rainbow's Intent",
            jp: "S2追加:六色の志"
        },
        "S2 Add: Rainbow's Exhilaration": {
            en: "S2 Add: Rainbow's Exhilaration",
            jp: "S2追加:六色の活与"
        },
        "S2 Add: Skilled Brilliance": {
            en: "S2 Add: Skilled Brilliance",
            jp: "S2追加:輝充の志"
        },
        "S3 Add: Nature's Melody": {
            en: "S3 Add: Nature's Melody",
            jp: "S3追加:花海雪の歌"
        },
        "S3 Add: Nature's Gleam 2": {
            en: "S3 Add: Nature's Gleam 2",
            jp: "S3追加:花海雪の輝勢2"
        },
        "S3 Add: Flowing Grace": {
            en: "S3 Add: Flowing Grace",
            jp: "S3追加:時流の恵"
        },
        "S3 Add: Flowing Exhilaration 2": {
            en: "S3 Add: Flowing Exhilaration 2",
            jp: "S3追加:時流活与2"
        },
        "S3 Add: Radiating Grace 2": {
            en: "S3 Add: Radiating Grace 2",
            jp: "S3追加:輝勢の恵2"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:撃流の備"
        },
        "S3 Add: Curtailed Strike": {
            en: "S3 Add: Curtailed Strike",
            jp: "S3追加:撃流縮減"
        },
        "S3 Add: Wise Strike": {
            en: "S3 Add: Wise Strike",
            jp: "S3追加:撃流の巧"
        },
        "S3 Add: Flowing Courage": {
            en: "S3 Add: Flowing Courage",
            jp: "S3追加:時流の勇"
        },
        "S3 Add: Fortifying Strike": {
            en: "S3 Add: Fortifying Strike",
            jp: "S3追加:撃流の備"
        },
        "S3 Add: Radiant Strike": {
            en: "S3 Add: Radiant Strike",
            jp: "S3追加:輝剰の撃"
        },
        "S3 Add: Skilled Strike": {
            en: "S3 Add: Skilled Strike",
            jp: "S3追加:妙撃の志"
        },
        "S3 Add: Offensive Intent": {
            en: "S3 Add: Offensive Intent",
            jp: "S3追加:剛撃の志"
        },
        "S3 Add: Vital Intent": {
            en: "S3 Add: Vital Intent",
            jp: "S3追加:活実の志"
        },
        "S3 Add: Wise Skill": {
            en: "S3 Add: Wise Skill",
            jp: "S3追加:妙技の巧"
        },
        "S3 Add: Rupturing Intent": {
            en: "S3 Add: Rupturing Intent",
            jp: "S3追加:裂砕の志"
        },
        "S3 Add: Brilliant Ruin": {
            en: "S3 Add: Brilliant Ruin",
            jp: "S3追加:滅域輝与"
        },
        "S3 Add: Cursed Radiance": {
            en: "S3 Add: Cursed Radiance",
            jp: "S3追加:災転輝与"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:静心活与"
        },
        "S3 Add: Powering Intent": {
            en: "S3 Add: Powering Intent",
            jp: "S3追加:強闘の志"
        },
        "S3 Add: Rainbow's Reduction": {
            en: "S3 Add: Rainbow's Reduction",
            jp: "S3追加:六色の縮減"
        },
        "S3 Add: Rainbow's Radiance": {
            en: "S3 Add: Rainbow's Radiance",
            jp: "S3追加:六色の輝剰"
        },
        "S3 Add: Rainbow's Gleam": {
            en: "S3 Add: Rainbow's Gleam",
            jp: "S3追加:六色の輝勢"
        },
        "S3 Add: Nature's Melody 2": {
            en: "S3 Add: Nature's Melody 2",
            jp: "S3追加:花海雪の歌2"
        },
        "S4 Add: Heavenly Protection": {
            en: "S4 Add: Heavenly Protection",
            jp: "S4追加:天輝の守護"
        },
        "S4 Add: Calming Intent": {
            en: "S4 Add: Calming Intent",
            jp: "S4追加:静心の志"
        },
        "S4 Add: Mysterious Strike": {
            en: "S4 Add: Mysterious Strike",
            jp: "S4追加:妙撃の秤"
        },
        "S4 Add: Saint Shield": {
            en: "S4 Add: Saint Shield",
            jp: "S4追加:聖者の盾"
        },
        "S4 Add: Harmonized Rainbow": {
            en: "S4 Add: Harmonized Rainbow",
            jp: "S4追加:六色の輝秤"
        },
        "S4 Add: Raising Pursuit": {
            en: "S4 Add: Raising Pursuit",
            jp: "S4追加:累加追撃"
        },
        "S4 Add: Pursuing Eclipse": {
            en: "S4 Add: Pursuing Eclipse",
            jp: "S4追加:追蝕の巧"
        },
        "S4 Add: Cursed Rainbow": {
            en: "S4 Add: Cursed Rainbow",
            jp: "S4追加:六色の災転"
        },
        "S4 Add: Colossal Radiance": {
            en: "S4 Add: Colossal Radiance",
            jp: "S4追加:強闘輝与"
        },
        "S4 Add: Evasion Training": {
            en: "S4 Add: Evasion Training",
            jp: "S4追加:回避訓練"
        },
        "S4 Add: Radiant Eclipse": {
            en: "S4 Add: Radiant Eclipse",
            jp: "S4追加:追蝕輝剰"
        },
        "S4 Add: Shared Ruin": {
            en: "S4 Add: Shared Ruin",
            jp: "S4追加:滅域分与"
        },
        "S5 Add: Anthesis Cultivation": {
            en: "S5 Add: Anthesis Cultivation",
            jp: "S5追加:錬成萌花"
        },
        "S5 Add: Instant Invocation": {
            en: "S5 Add: Instant Invocation",
            jp: "S5追加:瞬術略唱"
        },
        "S5 Add: Tethered Eclipse": {
            en: "S5 Add: Tethered Eclipse",
            jp: "S5追加:追蝕の縛"
        },
        "S5 Add: Vigorous Response": {
            en: "S5 Add: Vigorous Response",
            jp: "S5追加:活器応変"
        },
        "S5 Add: Angelic Respite": {
            en: "S5 Add: Angelic Respite",
            jp: "S5追加:槍機天悠"
        },
        "S6 Add: Ironclad Illness": {
            en: "S6 Add: Ironclad Illness",
            jp: "S6追加:癒蝕頑強"
        },
        "S6 Add: Guardian Armor": {
            en: "S6 Add: Guardian Armor",
            jp: "S6追加:守護の備"
        },
        "S6 Add: Heroic Howl": {
            en: "S6 Add: Heroic Howl",
            jp: "S6追加:英雄咆哮"
        },
        "S6 Add: Soaring Ballet": {
            en: "S6 Add: Soaring Ballet",
            jp: "S6追加:翔機天舞"
        },
        "S6 Add: Guardian's Essence": {
            en: "S6 Add: Guardian's Essence",
            jp: "S6追加:機魂の守護"
        },
        "S6 Add: Evasion Whistle": {
            en: "S6 Add: Evasion Whistle",
            jp: "S6追加:回避の口笛"
        },
        "S6 Add: Long Night Star": {
            en: "S6 Add: Long Night Star",
            jp: "S6追加:長夜の明星"
        },
        "S6 Add: Overlimit": {
            en: "S6 Add: Overlimit",
            jp: "S6追加:超限活器"
        },
        "S7 Add: MEL Pwr Up": {
            en: "S7 Add: MEL Pwr Up",
            jp: "S7追加:打撃上昇"
        },
        "S7 Add: RNG Pwr Up": {
            en: "S7 Add: RNG Pwr Up",
            jp: "S7追加:射撃上昇"
        },
        "S7 Add: TEC Pwr Up": {
            en: "S7 Add: TEC Pwr Up",
            jp: "S7追加:法撃上昇"
        },
        "S7 Add: Zenith Impact": {
            en: "S7 Add: Zenith Impact",
            jp: "S7追加:瞬撃の極"
        },
        "S7 Add: Increased Efficiency": {
            en: "S7 Add: Increased Efficiency",
            jp: "S7追加:薬効増大"
        },
        "S7 Add: Genius Merge": {
            en: "S7 Add: Genius Merge",
            jp: "S7追加:以心伝心"
        },
        "S7 Add: Sentinel's Gift": {
            en: "S7 Add: Sentinel's Gift",
            jp: "S7追加:法護の与"
        },
        "S7 Add: Glowing Grace": {
            en: "S7 Add: Glowing Grace",
            jp: "S7追加:輝静の恵"
        },
        "S8 Add: HP Up": {
            en: "S8 Add: HP Up",
            jp: "S8追加:活器上昇"
        },
        "S8 Add: PP Up": {
            en: "S8 Add: PP Up",
            jp: "S8追加:輝器上昇"
        },
        "S8 Add: Strong Potency": {
            en: "S8 Add: Strong Potency",
            jp: "S8追加:服薬強身"
        },
        "S8 Add: High-Minded": {
            en: "S8 Add: High-Minded",
            jp: "S8追加:一念滞空"
        },
        "S8 Add: HP Up 2": {
            en: "S8 Add: HP Up 2",
            jp: "S8追加:活器上昇2"
        },
        "S8 Add: Sky Dance's Boon": {
            en: "S8 Add: Sky Dance's Boon",
            jp: "S8追加:舞空の援"
        }
    },
    "potential": {
        "Nothing": {
            en: "Nothing",
            jp: "無し"
        },
        "Guidance of Life Lv1 (+2%)": {
            en: "Guidance of Life Lv1 (+2%)",
            jp: "生命の導きLv1(+2%)"
        },
        "Guidance of Life Lv2 (+5%)": {
            en: "Guidance of Life Lv2 (+5%)",
            jp: "生命の導きLv2(+5%)"
        },
        "Guidance of Life Lv3 (+10%)": {
            en: "Guidance of Life Lv3 (+10%)",
            jp: "生命の導きLv3(+10%)"
        }
    },
    "AA01": {
        name_en: "Might I",
        name_jp: "パワーⅠ",
        effect_en: "MEL Pwr(+10)",
        effect_jp: "打撃力(+10)"
    },
    "AA02": {
        name_en: "Might II",
        name_jp: "パワーⅡ",
        effect_en: "MEL Pwr(+20)",
        effect_jp: "打撃力(+20)"
    },
    "AA03": {
        name_en: "Might III",
        name_jp: "パワーⅢ",
        effect_en: "MEL Pwr(+30)",
        effect_jp: "打撃力(+30)"
    },
    "AA04": {
        name_en: "Might IV",
        name_jp: "パワーⅣ",
        effect_en: "MEL Pwr(+35)",
        effect_jp: "打撃力(+35)"
    },
    "AA05": {
        name_en: "Might V",
        name_jp: "パワーⅤ",
        effect_en: "MEL Pwr(+40)",
        effect_jp: "打撃力(+40)"
    },
    "AA06": {
        name_en: "Might VI",
        name_jp: "パワーⅥ",
        effect_en: "MEL Pwr(+45)",
        effect_jp: "打撃力(+45)"
    },
    "AB01": {
        name_en: "Precision I",
        name_jp: "シュートⅠ",
        effect_en: "RNG Pwr(+10)",
        effect_jp: "射撃力(+10)"
    },
    "AB02": {
        name_en: "Precision II",
        name_jp: "シュートⅡ",
        effect_en: "RNG Pwr(+20)",
        effect_jp: "射撃力(+20)"
    },
    "AB03": {
        name_en: "Precision III",
        name_jp: "シュートⅢ",
        effect_en: "RNG Pwr(+30)",
        effect_jp: "射撃力(+30)"
    },
    "AB04": {
        name_en: "Precision IV",
        name_jp: "シュートⅣ",
        effect_en: "RNG Pwr(+35)",
        effect_jp: "射撃力(+35)"
    },
    "AB05": {
        name_en: "Precision V",
        name_jp: "シュートⅤ",
        effect_en: "RNG Pwr(+40)",
        effect_jp: "射撃力(+40)"
    },
    "AB06": {
        name_en: "Precision VI",
        name_jp: "シュートⅥ",
        effect_en: "RNG Pwr(+45)",
        effect_jp: "射撃力(+45)"
    },
    "AC01": {
        name_en: "Casting I",
        name_jp: "テクニックⅠ",
        effect_en: "TEC Pwr(+10)",
        effect_jp: "法撃力(+10)"
    },
    "AC02": {
        name_en: "Casting II",
        name_jp: "テクニックⅡ",
        effect_en: "TEC Pwr(+20)",
        effect_jp: "法撃力(+20)"
    },
    "AC03": {
        name_en: "Casting III",
        name_jp: "テクニックⅢ",
        effect_en: "TEC Pwr(+30)",
        effect_jp: "法撃力(+30)"
    },
    "AC04": {
        name_en: "Casting IV",
        name_jp: "テクニックⅣ",
        effect_en: "TEC Pwr(+35)",
        effect_jp: "法撃力(+35)"
    },
    "AC05": {
        name_en: "Casting V",
        name_jp: "テクニックⅤ",
        effect_en: "TEC Pwr(+40)",
        effect_jp: "法撃力(+40)"
    },
    "AC06": {
        name_en: "Casting VI",
        name_jp: "テクニックⅥ",
        effect_en: "TEC Pwr(+45)",
        effect_jp: "法撃力(+45)"
    },
    "AD01": {
        name_en: "Deftness I",
        name_jp: "アームⅠ",
        effect_en: "DEX(+10)",
        effect_jp: "技量(+10)"
    },
    "AD02": {
        name_en: "Deftness II",
        name_jp: "アームⅡ",
        effect_en: "DEX(+20)",
        effect_jp: "技量(+20)"
    },
    "AD03": {
        name_en: "Deftness III",
        name_jp: "アームⅢ",
        effect_en: "DEX(+30)",
        effect_jp: "技量(+30)"
    },
    "AD04": {
        name_en: "Deftness IV",
        name_jp: "アームⅣ",
        effect_en: "DEX(+35)",
        effect_jp: "技量(+35)"
    },
    "AD05": {
        name_en: "Deftness V",
        name_jp: "アームⅤ",
        effect_en: "DEX(+40)",
        effect_jp: "技量(+40)"
    },
    "BA01": {
        name_en: "Toughness I",
        name_jp: "ボディⅠ",
        effect_en: "MEL Def(+10)",
        effect_jp: "打撃防御(+10)"
    },
    "BA02": {
        name_en: "Toughness II",
        name_jp: "ボディⅡ",
        effect_en: "MEL Def(+20)",
        effect_jp: "打撃防御(+20)"
    },
    "BA03": {
        name_en: "Toughness III",
        name_jp: "ボディⅢ",
        effect_en: "MEL Def(+30)",
        effect_jp: "打撃防御(+30)"
    },
    "BA04": {
        name_en: "Toughness IV",
        name_jp: "ボディⅣ",
        effect_en: "MEL Def(+35)",
        effect_jp: "打撃防御(+35)"
    },
    "BA05": {
        name_en: "Toughness V",
        name_jp: "ボディⅤ",
        effect_en: "MEL Def(+40)",
        effect_jp: "打撃防御(+40)"
    },
    "BB01": {
        name_en: "Reflex I",
        name_jp: "リアクトⅠ",
        effect_en: "RNG Def(+10)",
        effect_jp: "射撃防御(+10)"
    },
    "BB02": {
        name_en: "Reflex II",
        name_jp: "リアクトⅡ",
        effect_en: "RNG Def(+20)",
        effect_jp: "射撃防御(+20)"
    },
    "BB03": {
        name_en: "Reflex III",
        name_jp: "リアクトⅢ",
        effect_en: "RNG Def(+30)",
        effect_jp: "射撃防御(+30)"
    },
    "BB04": {
        name_en: "Reflex IV",
        name_jp: "リアクトⅣ",
        effect_en: "RNG Def(+35)",
        effect_jp: "射撃防御(+35)"
    },
    "BB05": {
        name_en: "Reflex V",
        name_jp: "リアクトⅤ",
        effect_en: "RNG Def(+40)",
        effect_jp: "射撃防御(+40)"
    },
    "BC01": {
        name_en: "Genius I",
        name_jp: "マインドⅠ",
        effect_en: "TEC Def(+10)",
        effect_jp: "法撃防御(+10)"
    },
    "BC02": {
        name_en: "Genius II",
        name_jp: "マインドⅡ",
        effect_en: "TEC Def(+20)",
        effect_jp: "法撃防御(+20)"
    },
    "BC03": {
        name_en: "Genius III",
        name_jp: "マインドⅢ",
        effect_en: "TEC Def(+30)",
        effect_jp: "法撃防御(+30)"
    },
    "BC04": {
        name_en: "Genius IV",
        name_jp: "マインドⅣ",
        effect_en: "TEC Def(+35)",
        effect_jp: "法撃防御(+35)"
    },
    "BC05": {
        name_en: "Genius V",
        name_jp: "マインドⅤ",
        effect_en: "TEC Def(+40)",
        effect_jp: "法撃防御(+40)"
    },
    "EA01": {
        name_en: "Stamina I",
        name_jp: "スタミナⅠ",
        effect_en: "HP(+20)",
        effect_jp: "HP(+20)"
    },
    "EA02": {
        name_en: "Stamina II",
        name_jp: "スタミナⅡ",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)"
    },
    "EA03": {
        name_en: "Stamina III",
        name_jp: "スタミナⅢ",
        effect_en: "HP(+50)",
        effect_jp: "HP(+50)"
    },
    "EA04": {
        name_en: "Stamina IV",
        name_jp: "スタミナⅣ",
        effect_en: "HP(+60)",
        effect_jp: "HP(+60)"
    },
    "EA05": {
        name_en: "Stamina V",
        name_jp: "スタミナⅤ",
        effect_en: "HP(+70)",
        effect_jp: "HP(+70)"
    },
    "EA06": {
        name_en: "Stamina VI",
        name_jp: "スタミナⅤI",
        effect_en: "HP(+70)",
        effect_jp: "HP(+70)"
    },
    "EB01": {
        name_en: "Spirit I",
        name_jp: "スピリタⅠ",
        effect_en: "PP(+2)",
        effect_jp: "PP(+2)"
    },
    "EB02": {
        name_en: "Spirit II",
        name_jp: "スピリタⅡ",
        effect_en: "PP(+3)",
        effect_jp: "PP(+3)"
    },
    "EB03": {
        name_en: "Spirit III",
        name_jp: "スピリタⅢ",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)"
    },
    "EB04": {
        name_en: "Spirit IV",
        name_jp: "スピリタⅣ",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)"
    },
    "EB05": {
        name_en: "Spirit V",
        name_jp: "スピリタⅤ",
        effect_en: "PP(+6)",
        effect_jp: "PP(+6)"
    },
    "EB06": {
        name_en: "Spirit VI",
        name_jp: "スピリタⅥ",
        effect_en: "PP(+7)",
        effect_jp: "PP(+7)"
    },
    "FA01": {
        name_en: "Mastery I",
        name_jp: "アビリティⅠ",
        effect_en: "ALL(+5)",
        effect_jp: "ALL(+5)"
    },
    "FA02": {
        name_en: "Mastery II",
        name_jp: "アビリティⅡ",
        effect_en: "ALL(+10)",
        effect_jp: "ALL(+10)"
    },
    "FA03": {
        name_en: "Mastery III",
        name_jp: "アビリティⅢ",
        effect_en: "ALL(+15)",
        effect_jp: "ALL(+15)"
    },
    "FA04": {
        name_en: "Mastery IV",
        name_jp: "アビリティⅣ",
        effect_en: "ALL(+20)",
        effect_jp: "ALL(+20)"
    },
    "FA05": {
        name_en: "Mastery V",
        name_jp: "アビリティⅤ",
        effect_en: "ALL(+25)",
        effect_jp: "ALL(+25)"
    },
    "HA01": {
        name_en: "Impact Ward I",
        name_jp: "ブロウレジストⅠ",
        effect_en: "Strike Resist(+3)",
        effect_jp: "打撃耐性(+3)"
    },
    "HA02": {
        name_en: "Impact Ward II",
        name_jp: "ブロウレジストⅡ",
        effect_en: "Strike Resist(+4)",
        effect_jp: "打撃耐性(+4)"
    },
    "HA03": {
        name_en: "Impact Ward III",
        name_jp: "ブロウレジストⅢ",
        effect_en: "Strike Resist(+5)",
        effect_jp: "打撃耐性(+5)"
    },
    "HA04": {
        name_en: "Impact Ward IV",
        name_jp: "ブロウレジストⅣ",
        effect_en: "Strike Resist(+6)",
        effect_jp: "打撃耐性(+6)"
    },
    "HA05": {
        name_en: "Impact Ward V",
        name_jp: "ブロウレジストⅤ",
        effect_en: "Strike Resist(+7)",
        effect_jp: "打撃耐性(+7)"
    },
    "HB01": {
        name_en: "Projectile Ward I",
        name_jp: "ショットレジストⅠ",
        effect_en: "Range Resist(+3)",
        effect_jp: "射撃耐性(+3)"
    },
    "HB02": {
        name_en: "Projectile Ward II",
        name_jp: "ショットレジストⅡ",
        effect_en: "Range Resist(+4)",
        effect_jp: "射撃耐性(+4)"
    },
    "HB03": {
        name_en: "Projectile Ward III",
        name_jp: "ショットレジストⅢ",
        effect_en: "Range Resist(+5)",
        effect_jp: "射撃耐性(+5)"
    },
    "HB04": {
        name_en: "Projectile Ward IV",
        name_jp: "ショットレジストⅣ",
        effect_en: "Range Resist(+6)",
        effect_jp: "射撃耐性(+6)"
    },
    "HB05": {
        name_en: "Projectile Ward V",
        name_jp: "ショットレジストⅤ",
        effect_en: "Range Resist(+7)",
        effect_jp: "射撃耐性(+7)"
    },
    "HC01": {
        name_en: "Technique Ward I",
        name_jp: "マインドレジストⅠ",
        effect_en: "Tech Resist(+3)",
        effect_jp: "法撃耐性(+3)"
    },
    "HC02": {
        name_en: "Technique Ward II",
        name_jp: "マインドレジストⅡ",
        effect_en: "Tech Resist(+4)",
        effect_jp: "法撃耐性(+4)"
    },
    "HC03": {
        name_en: "Technique Ward III",
        name_jp: "マインドレジストⅢ",
        effect_en: "Tech Resist(+5)",
        effect_jp: "法撃耐性(+5)"
    },
    "HC04": {
        name_en: "Technique Ward IV",
        name_jp: "マインドレジストⅣ",
        effect_en: "Tech Resist(+6)",
        effect_jp: "法撃耐性(+6)"
    },
    "HC05": {
        name_en: "Technique Ward V",
        name_jp: "マインドレジストⅤ",
        effect_en: "Tech Resist(+7)",
        effect_jp: "法撃耐性(+7)"
    },
    "HI01": {
        name_en: "Wildfire Ward I",
        name_jp: "フレイムレジストⅠ",
        effect_en: "Fire Resist(+3)",
        effect_jp: "炎耐性(+3)"
    },
    "HI02": {
        name_en: "Wildfire Ward II",
        name_jp: "フレイムレジストⅡ",
        effect_en: "Fire Resist(+4)",
        effect_jp: "炎耐性(+4)"
    },
    "HI03": {
        name_en: "Wildfire Ward III",
        name_jp: "フレイムレジストⅢ",
        effect_en: "Fire Resist(+5)",
        effect_jp: "炎耐性(+5)"
    },
    "HI04": {
        name_en: "Wildfire Ward IV",
        name_jp: "フレイムレジストⅣ",
        effect_en: "Fire Resist(+6)",
        effect_jp: "炎耐性(+6)"
    },
    "HI05": {
        name_en: "Wildfire Ward V",
        name_jp: "フレイムレジストⅤ",
        effect_en: "Fire Resist(+7)",
        effect_jp: "炎耐性(+7)"
    },
    "HJ01": {
        name_en: "Frost Ward I",
        name_jp: "アイスレジストⅠ",
        effect_en: "Ice Resist(+3)",
        effect_jp: "氷耐性(+3)"
    },
    "HJ02": {
        name_en: "Frost Ward II",
        name_jp: "アイスレジストⅡ",
        effect_en: "Ice Resist(+4)",
        effect_jp: "氷耐性(+4)"
    },
    "HJ03": {
        name_en: "Frost Ward III",
        name_jp: "アイスレジストⅢ",
        effect_en: "Ice Resist(+5)",
        effect_jp: "氷耐性(+5)"
    },
    "HJ04": {
        name_en: "Frost Ward IV",
        name_jp: "アイスレジストⅣ",
        effect_en: "Ice Resist(+6)",
        effect_jp: "氷耐性(+6)"
    },
    "HJ05": {
        name_en: "Frost Ward V",
        name_jp: "アイスレジストⅤ",
        effect_en: "Ice Resist(+7)",
        effect_jp: "氷耐性(+7)"
    },
    "HK01": {
        name_en: "Lightning Ward I",
        name_jp: "ショックレジストⅠ",
        effect_en: "Lightning Resist(+3)",
        effect_jp: "雷耐性(+3)"
    },
    "HK02": {
        name_en: "Lightning Ward II",
        name_jp: "ショックレジストⅡ",
        effect_en: "Lightning Resist(+4)",
        effect_jp: "雷耐性(+4)"
    },
    "HK03": {
        name_en: "Lightning Ward III",
        name_jp: "ショックレジストⅢ",
        effect_en: "Lightning Resist(+5)",
        effect_jp: "雷耐性(+5)"
    },
    "HK04": {
        name_en: "Lightning Ward IV",
        name_jp: "ショックレジストⅣ",
        effect_en: "Lightning Resist(+6)",
        effect_jp: "雷耐性(+6)"
    },
    "HK05": {
        name_en: "Lightning Ward V",
        name_jp: "ショックレジストⅤ",
        effect_en: "Lightning Resist(+7)",
        effect_jp: "雷耐性(+7)"
    },
    "HL01": {
        name_en: "Gale Ward I",
        name_jp: "ウィンドレジストⅠ",
        effect_en: "Wind Resist(+3)",
        effect_jp: "風耐性(+3)"
    },
    "HL02": {
        name_en: "Gale Ward II",
        name_jp: "ウィンドレジストⅡ",
        effect_en: "Wind Resist(+4)",
        effect_jp: "風耐性(+4)"
    },
    "HL03": {
        name_en: "Gale Ward III",
        name_jp: "ウィンドレジストⅢ",
        effect_en: "Wind Resist(+5)",
        effect_jp: "風耐性(+5)"
    },
    "HL04": {
        name_en: "Gale Ward IV",
        name_jp: "ウィンドレジストⅣ",
        effect_en: "Wind Resist(+6)",
        effect_jp: "風耐性(+6)"
    },
    "HL05": {
        name_en: "Gale Ward V",
        name_jp: "ウィンドレジストⅤ",
        effect_en: "Wind Resist(+7)",
        effect_jp: "風耐性(+7)"
    },
    "HM01": {
        name_en: "Radiant Ward I",
        name_jp: "ライトレジストⅠ",
        effect_en: "Light Resist(+3)",
        effect_jp: "光耐性(+3)"
    },
    "HM02": {
        name_en: "Radiant Ward II",
        name_jp: "ライトレジストⅡ",
        effect_en: "Light Resist(+4)",
        effect_jp: "光耐性(+4)"
    },
    "HM03": {
        name_en: "Radiant Ward III",
        name_jp: "ライトレジストⅢ",
        effect_en: "Light Resist(+5)",
        effect_jp: "光耐性(+5)"
    },
    "HM04": {
        name_en: "Radiant Ward IV",
        name_jp: "ライトレジストⅣ",
        effect_en: "Light Resist(+6)",
        effect_jp: "光耐性(+6)"
    },
    "HM05": {
        name_en: "Radiant Ward V",
        name_jp: "ライトレジストⅤ",
        effect_en: "Light Resist(+7)",
        effect_jp: "光耐性(+7)"
    },
    "HN01": {
        name_en: "Umbral Ward I",
        name_jp: "グルームレジストⅠ",
        effect_en: "Dark Resist(+3)",
        effect_jp: "闇耐性(+3)"
    },
    "HN02": {
        name_en: "Umbral Ward II",
        name_jp: "グルームレジストⅡ",
        effect_en: "Dark Resist(+4)",
        effect_jp: "闇耐性(+4)"
    },
    "HN03": {
        name_en: "Umbral Ward III",
        name_jp: "グルームレジストⅢ",
        effect_en: "Dark Resist(+5)",
        effect_jp: "闇耐性(+5)"
    },
    "HN04": {
        name_en: "Umbral Ward IV",
        name_jp: "グルームレジストⅣ",
        effect_en: "Dark Resist(+6)",
        effect_jp: "闇耐性(+6)"
    },
    "HN05": {
        name_en: "Umbral Ward V",
        name_jp: "グルームレジストⅤ",
        effect_en: "Dark Resist(+7)",
        effect_jp: "闇耐性(+7)"
    },
    "HZ01": {
        name_en: "Sovereign Ward I",
        name_jp: "オールレジストⅠ",
        effect_en: "All Resist(+1)",
        effect_jp: "全耐性(+1)"
    },
    "HZ02": {
        name_en: "Sovereign Ward II",
        name_jp: "オールレジストⅡ",
        effect_en: "All Resist(+2)",
        effect_jp: "全耐性(+2)"
    },
    "HZ03": {
        name_en: "Sovereign Ward III",
        name_jp: "オールレジストⅢ",
        effect_en: "All Resist(+3)",
        effect_jp: "全耐性(+3)"
    },
    "HZ04": {
        name_en: "Sovereign Ward IV",
        name_jp: "オールレジストⅣ",
        effect_en: "All Resist(+4)",
        effect_jp: "全耐性(+4)"
    },
    "HZ05": {
        name_en: "Sovereign Ward V",
        name_jp: "オールレジストⅤ",
        effect_en: "All Resist(+5)",
        effect_jp: "全耐性(+5)"
    },
    "JA01": {
        name_en: "Burn I",
        name_jp: "バーンⅠ",
        effect_en: "Grants Burn Lv1",
        effect_jp: "バーンLv1付与"
    },
    "JA02": {
        name_en: "Burn II",
        name_jp: "バーンⅡ",
        effect_en: "Grants Burn Lv2",
        effect_jp: "バーンLv2付与"
    },
    "JA03": {
        name_en: "Burn III",
        name_jp: "バーンⅢ",
        effect_en: "Grants Burn Lv3",
        effect_jp: "バーンLv3付与"
    },
    "JA04": {
        name_en: "Burn IV",
        name_jp: "バーンⅣ",
        effect_en: "Grants Burn Lv4",
        effect_jp: "バーンLv4付与"
    },
    "JA05": {
        name_en: "Burn V",
        name_jp: "バーンⅤ",
        effect_en: "Grants Burn Lv5",
        effect_jp: "バーンLv5付与"
    },
    "JB01": {
        name_en: "Freeze I",
        name_jp: "フリーズⅠ",
        effect_en: "Grants Freeze Lv1",
        effect_jp: "フリーズLv1付与"
    },
    "JB02": {
        name_en: "Freeze II",
        name_jp: "フリーズⅡ",
        effect_en: "Grants Freeze Lv2",
        effect_jp: "フリーズLv2付与"
    },
    "JB03": {
        name_en: "Freeze III",
        name_jp: "フリーズⅢ",
        effect_en: "Grants Freeze Lv3",
        effect_jp: "フリーズLv3付与"
    },
    "JB04": {
        name_en: "Freeze IV",
        name_jp: "フリーズⅣ",
        effect_en: "Grants Freeze Lv4",
        effect_jp: "フリーズLv4付与"
    },
    "JB05": {
        name_en: "Freeze V",
        name_jp: "フリーズⅤ",
        effect_en: "Grants Freeze Lv5",
        effect_jp: "フリーズLv5付与"
    },
    "JC01": {
        name_en: "Shock I",
        name_jp: "ショックⅠ",
        effect_en: "Grants Shock Lv1",
        effect_jp: "ショックLv1付与"
    },
    "JC02": {
        name_en: "Shock II",
        name_jp: "ショックⅡ",
        effect_en: "Grants Shock Lv2",
        effect_jp: "ショックLv2付与"
    },
    "JC03": {
        name_en: "Shock III",
        name_jp: "ショックⅢ",
        effect_en: "Grants Shock Lv3",
        effect_jp: "ショックLv3付与"
    },
    "JC04": {
        name_en: "Shock IV",
        name_jp: "ショックⅣ",
        effect_en: "Grants Shock Lv4",
        effect_jp: "ショックLv4付与"
    },
    "JC05": {
        name_en: "Shock V",
        name_jp: "ショックⅤ",
        effect_en: "Grants Shock Lv5",
        effect_jp: "ショックLv5付与"
    },
    "JD01": {
        name_en: "Blind I",
        name_jp: "ミラージュⅠ",
        effect_en: "Grants Blind Lv1",
        effect_jp: "ミラージュLv1付与"
    },
    "JD02": {
        name_en: "Blind II",
        name_jp: "ミラージュⅡ",
        effect_en: "Grants Blind Lv2",
        effect_jp: "ミラージュLv2付与"
    },
    "JD03": {
        name_en: "Blind III",
        name_jp: "ミラージュⅢ",
        effect_en: "Grants Blind Lv3",
        effect_jp: "ミラージュLv3付与"
    },
    "JD04": {
        name_en: "Blind IV",
        name_jp: "ミラージュⅣ",
        effect_en: "Grants Blind Lv4",
        effect_jp: "ミラージュLv4付与"
    },
    "JD05": {
        name_en: "Blind V",
        name_jp: "ミラージュⅤ",
        effect_en: "Grants Blind Lv5",
        effect_jp: "ミラージュLv5付与"
    },
    "JE01": {
        name_en: "Panic I",
        name_jp: "パニックⅠ",
        effect_en: "Grants Panic Lv1",
        effect_jp: "パニックLv1付与"
    },
    "JE02": {
        name_en: "Panic II",
        name_jp: "パニックⅡ",
        effect_en: "Grants Panic Lv2",
        effect_jp: "パニックLv2付与"
    },
    "JE03": {
        name_en: "Panic III",
        name_jp: "パニックⅢ",
        effect_en: "Grants Panic Lv3",
        effect_jp: "パニックLv3付与"
    },
    "JE04": {
        name_en: "Panic IV",
        name_jp: "パニックⅣ",
        effect_en: "Grants Panic Lv4",
        effect_jp: "パニックLv4付与"
    },
    "JE05": {
        name_en: "Panic V",
        name_jp: "パニックⅤ",
        effect_en: "Grants Panic Lv5",
        effect_jp: "パニックLv5付与"
    },
    "JF01": {
        name_en: "Poison I",
        name_jp: "ポイズンⅠ",
        effect_en: "Grants Poison Lv1",
        effect_jp: "ポイズンLv1付与"
    },
    "JF02": {
        name_en: "Poison II",
        name_jp: "ポイズンⅡ",
        effect_en: "Grants Poison Lv2",
        effect_jp: "ポイズンLv2付与"
    },
    "JF03": {
        name_en: "Poison III",
        name_jp: "ポイズンⅢ",
        effect_en: "Grants Poison Lv3",
        effect_jp: "ポイズンLv3付与"
    },
    "JF04": {
        name_en: "Poison IV",
        name_jp: "ポイズンⅣ",
        effect_en: "Grants Poison Lv4",
        effect_jp: "ポイズンLv4付与"
    },
    "JF05": {
        name_en: "Poison V",
        name_jp: "ポイズンⅤ",
        effect_en: "Grants Poison Lv5",
        effect_jp: "ポイズンLv5付与"
    },
    "LA01": {
        name_en: "S1:Offensive Intent",
        name_jp: "S1:剛撃の志",
        effect_en: "Boosts damage by 2%.",
        effect_jp: "与ダメージが2%上昇。"
    },
    "LA02": {
        name_en: "S1:Photon Reduction",
        name_jp: "S1:光子縮減",
        effect_en: "PP consumption is reduced by 7%.",
        effect_jp: "PP消費量を7%軽減。"
    },
    "LA03": {
        name_en: "S1:Wise Skill",
        name_jp: "S1:妙技の巧",
        effect_en: "Increases critical rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。"
    },
    "LA2S": {
        name_en: "S1:Wise Skill 2",
        name_jp: "S1:妙技の巧2",
        effect_en: "Increases critical rate by 18%.",
        effect_jp: "クリティカル率が18%上昇する。"
    },
    "LA04": {
        name_en: "S1:Skilled Brilliance",
        name_jp: "S1:輝充の志",
        effect_en: "Boosts damage by 3% while PP<br>at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。"
    },
    "LA05": {
        name_en: "S1:Double-Edged Sword",
        name_jp: "S1:諸刃の撃",
        effect_en: "Deal 4% more damage but take<br>8% more damage.",
        effect_jp: "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。"
    },
    "LA06": {
        name_en: "S1:Radiating Grace",
        name_jp: "S1:輝勢の恵",
        effect_en: "PP regeneration increases by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。"
    },
    "LA2R": {
        name_en: "S1:Radiating Grace 2",
        name_jp: "S1:輝勢の恵2",
        effect_en: "PP regeneration increases by 23%.",
        effect_jp: "PPの自然回復速度が23%上昇する。"
    },
    "LA11": {
        name_en: "S1:Immediate Intent",
        name_jp: "S1:瞬連の志",
        effect_en: "Successive Just Attacks will<br>increase damage up to 3%.",
        effect_jp: "連続でジャストアタックに成功すると、最大で3%まで与ダメージが上昇。"
    },
    "LA12": {
        name_en: "S1:Red Petal Flash",
        name_jp: "S1:花ノ赤閃",
        effect_en: "+3% Damage for 30 seconds after<br>inflicting 450,000 damage.",
        effect_jp: "与ダメージ450,000毎に30秒間、3%威力上昇。"
    },
    "LA13": {
        name_en: "S1:Blue Ocean Flash",
        name_jp: "S1:海ノ青閃",
        effect_en: "Recover 4% HP every second for 30<br>seconds after taking 600 damage.",
        effect_jp: "被ダメージ600毎に30秒間、毎秒HPが4%回復。"
    },
    "LA14": {
        name_en: "S1:White Snow Flash",
        name_jp: "S1:雪ノ白閃",
        effect_en: "+20% PP Recovery on attacks for 30<br>seconds after using 150 PP.",
        effect_jp: "発動時PP消費量150毎に30秒間、攻撃時のPP回復量が20%上昇。"
    },
    "LA15": {
        name_en: "S1:Yellow Moon Flash",
        name_jp: "S1:月ノ黄閃",
        effect_en: "8% PP Consumption Reduction for 20<br>seconds upon Just Guarding.",
        effect_jp: "ジャストガード成功時に20秒間、PP消費量を8%軽減。"
    },
    "LA16": {
        name_en: "S1:Green Leaf Flash",
        name_jp: "S1:葉ノ緑閃",
        effect_en: "Every 20 seconds, a barrier will<br>turn on/off. The barrier reduces<br>damage by 8% and prevents flinching.",
        effect_jp: "被ダメージを8%軽減し怯まなくなるバリアが20秒間隔で発生・消滅。"
    },
    "LA17": {
        name_en: "S1:Black Shadow Flash",
        name_jp: "S1:影ノ黒閃",
        effect_en: "Increase Natural PP Recovery for 20<br>seconds after standing still<br>for 5 seconds.",
        effect_jp: "5秒間静止する毎に20秒間、PPの自然回復量が20%上昇。"
    },
    "LA18": {
        name_en: "S1:Brilliant Ruin",
        name_jp: "S1:滅域輝与",
        effect_en: "Recovery PP upon enemies being defeated near you.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LA21": {
        name_en: "S1:Skilled Strike",
        name_jp: "S1:妙撃の志",
        effect_en: "+3% damage on Critical Hits.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。"
    },
    "LA22": {
        name_en: "S1:Radiant Strike",
        name_jp: "S1:輝剰の撃",
        effect_en: "+17% PP Recovery on attacks.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。"
    },
    "LA23": {
        name_en: "S1:Flowing Exhilaration",
        name_jp: "S1:時流活与",
        effect_en: "Recovers 60% HP at set intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。"
    },
    "LA24": {
        name_en: "S1:Guardian Armor",
        name_jp: "S1:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。"
    },
    "LA25": {
        name_en: "S1:Vigor Enhancement",
        name_jp: "S1:活剰増進",
        effect_en: "Boost self HP recovery by 40%.",
        effect_jp: "自身のHP回復量が40％上昇する"
    },
    "LA78": {
        name_en: "S1:Violent Invigoration",
        name_jp: "S1:猛威の奮激",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。"
    },
    "LA79": {
        name_en: "S1:Phanatical Advantage",
        name_jp: "S1:狂幻の利",
        effect_en: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
    },
    "LA80": {
        name_en: "S1:Powering Intent",
        name_jp: "S1:強闘の志",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが4%上昇する。"
    },
    "LA81": {
        name_en: "S1:Rupturing Excess",
        name_jp: "S1:裂砕の剰",
        effect_en: "Increase PP recovery rate by 40% when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が40%上昇。"
    },
    "LA82": {
        name_en: "S1:Spirited Response",
        name_jp: "S1:気輝応変",
        effect_en: "Increases PP regeneration rate (+80%) while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。"
    },
    "LA83": {
        name_en: "S1:Rupturing Intent",
        name_jp: "S1:裂砕の志",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。"
    },
    "LA84": {
        name_en: "S1:Sturdy Intent",
        name_jp: "S1:依属の志",
        effect_en: "Increase damage by 4% if your weapon's element or equipped Guard Ring match the enemy's elemental weakness.",
        effect_jp: "ガード系リングまたは武器属性が弱点属性と一致時、4%威力上昇。"
    },
    "LA85": {
        name_en: "S1:Phantasmal Intent",
        name_jp: "S1:幻精の志",
        effect_en: "Increase Power based on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて威力が上昇する。"
    },
    "LA86": {
        name_en: "S1:Photon Reduction 2",
        name_jp: "S1:光子縮減2",
        effect_en: "Reduce PP consumption by 10%.",
        effect_jp: "PP消費量を10%軽減。"
    },
    "LA87": {
        name_en: "S1:Brilliant Ruin 2",
        name_jp: "S1:滅域輝与2",
        effect_en: "Recover PP when an enemy near you is defeated. (+4 PP)",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LA88": {
        name_en: "S1:Flowing Intent",
        name_jp: "S1:時流の志",
        effect_en: "Increase power every second. Maxes at 4% (30s to MAX).",
        effect_jp: "1秒毎に与ダメージが上昇。最大で4%。"
    },
    "LA89": {
        name_en: "S1:Lethal Intent",
        name_jp: "S1:死中の志",
        effect_en: "Reduce HP by 5% every 20 seconds and increase Might by 4%.",
        effect_jp: "20秒毎に最大HPの5%ダメージを負う代わりに威力が4%上昇する。"
    },
    "LA90": {
        name_en: "S1:Augment Intent",
        name_jp: "S1:錬成の志",
        effect_en: "Increase Power based on the number of Special Abilities attached to this weapon. Maxes at 4%.",
        effect_jp: "特殊能力の付与数に応じて威力上昇。最大で4%。"
    },
    "LA91": {
        name_en: "S1:Strike Boost",
        name_jp: "S1:打撃増幅",
        effect_en: "Increase Power by 1% for every 60 MEL Pwr affixed to this weapon. Increase Power by an additional 2% if at least 200 MEL Pwr is affixed to this weapon.",
        effect_jp: "特殊能力の追加打撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。"
    },
    "LA92": {
        name_en: "S1:Precision Boost",
        name_jp: "S1:射撃増幅",
        effect_en: "Increase Power by 1% for every 60 RNG Pwr affixed to this weapon. Increase Power by an additional 2% if at least 200 RNG Pwr is affixed to this weapon.",
        effect_jp: "特殊能力の追加射撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。"
    },
    "LA93": {
        name_en: "S1:Tech Boost",
        name_jp: "S1:法撃増幅",
        effect_en: "Increase Power by 1% for every 60 TEC Pwr affixed to this weapon. Increase Power by an additional 2% if at least 200 TEC Pwr is affixed to this weapon.",
        effect_jp: "特殊能力の追加法撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。"
    },
    "LA94": {
        name_en: "S1:Reckless Strike",
        name_jp: "S1:賭死の撃",
        effect_en: "Increase Power every three times you are attacked. Upon being attacked a tenth time, release an explosion that incapacitates you and damages all nearby targets.",
        effect_jp: "被ダメージの回数に応じて威力上昇。最大段階時の被ダメージで自身が戦闘不能になり周囲に与ダメージ。"
    },
    "LA95": {
        name_en: "S1:Eclipsing Decay",
        name_jp: "S1:失力の蝕",
        effect_en: "Grant a 25% chance to inflict the Jellen status when attacking an enemy.",
        effect_jp: "命中時に25％の確率でジェルンを付与。"
    },
    "LA2P": {
        name_en: "S1:Photon Balance",
        name_jp: "S1:光子の秤",
        effect_en: "Increases PP consumption by 8%, but boosts PA and Tech damage by 4%.",
        effect_jp: "PP消費量が8％増加する代わりにPAとテクニックの威力が4％上昇する。"
    },
    "LA2Q": {
        name_en: "S1:Collaborator Liberator",
        name_jp: "S1:戦友の加護",
        effect_en: "Reduces PP consumption, boosts critical rate and boosts power based on the number of people in your party (min. 2).",
        effect_jp: "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。"
    },
    "LB01": {
        name_en: "S2:Sturdy Recovery",
        name_jp: "S2:剛乱活与",
        effect_en: "Gives a fixed chance of<br>restoring HP equal to 1%<br>of damage dealt. (Max: 300)",
        effect_jp: "一定確率で与ダメージの1%をHPとして吸収。(上限300)"
    },
    "LB02": {
        name_en: "S2:Photon Reduction",
        name_jp: "S2:光子縮減",
        effect_en: "PP consumption is reduced by 10%.",
        effect_jp: "PP消費量を10%軽減。"
    },
    "LB2F": {
        name_en: "S2:Photon Reduction 2",
        name_jp: "S2:光子縮減2",
        effect_en: "PP consumption is reduced by 13%.",
        effect_jp: "PP消費量を13%軽減。"
    },
    "LB03": {
        name_en: "S2:Wise Skill",
        name_jp: "S2:妙技の巧",
        effect_en: "Increases critical rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。"
    },
    "LB04": {
        name_en: "S2:Radiant Strike",
        name_jp: "S2:輝剰の撃",
        effect_en: "Increases attack PP recovery by 17%.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。"
    },
    "LB05": {
        name_en: "S2:Cursed Radiance",
        name_jp: "S2:災転輝与",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。"
    },
    "LB06": {
        name_en: "S2:Guardian Armor",
        name_jp: "S2:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。"
    },
    "LB07": {
        name_en: "S2:Flowing Exhilaration",
        name_jp: "S2:時流活与",
        effect_en: "Recover HP by 60% at<br>regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。"
    },
    "LB2G": {
        name_en: "S2:Flowing Exhilaration 2",
        name_jp: "S2:時流活与2",
        effect_en: "Recover 75% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを75%回復する。"
    },
    "LB08": {
        name_en: "S2:Immediate Profusion",
        name_jp: "S2:瞬撃繚乱",
        effect_en: "Raises damage by 3% when Just<br>Attacking different PAs or <br>Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。"
    },
    "LB09": {
        name_en: "S2:Spirited Response",
        name_jp: "S2:気輝応変",
        effect_en: "Increases PP regeneration rate<br>while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。"
    },
    "LB0A": {
        name_en: "S2:Flowing Grace",
        name_jp: "S2:時流の恵",
        effect_en: "Regenerate 10 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを10回復する。"
    },
    "LB11": {
        name_en: "S2:Nature's Skill",
        name_jp: "S2:花海雪の巧",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Red Petal Flash, S1:Blue<br>Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、クリティカル率20%上昇。"
    },
    "LB12": {
        name_en: "S2:Nature's Intent",
        name_jp: "S2:花海雪の志",
        effect_en: "Increase damage by 3% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、与ダメージが3%上昇。"
    },
    "LB13": {
        name_en: "S2:Nature's Exhilaration",
        name_jp: "S2:花海雪の活与",
        effect_en: "Recover 2% HP every second when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒HPが2%回復。"
    },
    "LB14": {
        name_en: "S2:Nature's Reduction",
        name_jp: "S2:花海雪の縮減",
        effect_en: "Decrease PP consumption by 12% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を12%軽減。"
    },
    "LB15": {
        name_en: "S2:Umbrageous Gleam",
        name_jp: "S2:月葉影の輝勢",
        effect_en: "Increase Natural PP Recovery by 25% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP自然回復量25%上昇。"
    },
    "LB16": {
        name_en: "S2:Umbrageous Guardian",
        name_jp: "S2:月葉影の備",
        effect_en: "Decrease damage taken by 12% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、被ダメージを12%軽減。"
    },
    "LB17": {
        name_en: "S2:Brilliant Ruin",
        name_jp: "S2:滅域輝与",
        effect_en: "Recover PP when an enemy near you<br>is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LB18": {
        name_en: "S2:Radiating Grace",
        name_jp: "S2:輝勢の恵",
        effect_en: "Increases Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。"
    },
    "LB19": {
        name_en: "S2:Offensive Intent",
        name_jp: "S2:剛撃の志",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。"
    },
    "LB1A": {
        name_en: "S2:Skilled Strike",
        name_jp: "S2:妙撃の志",
        effect_en: "Increase Critical Hit Damage by 3%.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。"
    },
    "LB1B": {
        name_en: "S2:Rupturing Intent",
        name_jp: "S2:裂砕の志",
        effect_en: "Increase damage against breakable parts by 3%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が3%上昇する。"
    },
    "LB1C": {
        name_en: "S2:Rupturing Excess",
        name_jp: "S2:裂砕の剰",
        effect_en: "Increase PP recovery rate by 35%<br>when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が35%上昇。"
    },
    "LB1D": {
        name_en: "S2:Double-Edged Sword",
        name_jp: "S2:諸刃の撃",
        effect_en: "Increase Power by 3%<br>but take 6% more damage<br>when weapon is drawn.",
        effect_jp: "与ダメージが3%上昇し、抜刀時のみ被ダメージが6%増える。"
    },
    "LB1E": {
        name_en: "S2:Powering Intent",
        name_jp: "S2:強闘の志",
        effect_en: "Increase damage dealt to bosses by 3%.",
        effect_jp: "強敵への与ダメージが3%上昇する。"
    },
    "LB1F": {
        name_en: "S2:Phantasmal Radiance",
        name_jp: "S2:幻精輝剰",
        effect_en: "Increase Active PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて攻撃時PP回復量が上昇する。"
    },
    "LB1G": {
        name_en: "S2:Phantasmal Gleam",
        name_jp: "S2:幻精輝勢",
        effect_en: "Increase Natural PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じてPP自然回復量が上昇する。"
    },
    "LB1H": {
        name_en: "S2:Phantasmal Guardian",
        name_jp: "S2:幻精の備",
        effect_en: "Reduce damage taken based<br>on the Photon Blast Guage.",
        effect_jp: "フォトンブラストゲージに応じて被ダメージ量が減少する。"
    },
    "LB1I": {
        name_en: "S2:Phanatical Advantage",
        name_jp: "S2:狂幻の利",
        effect_en: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
    },
    "LB1J": {
        name_en: "S2:Violent Invigoration",
        name_jp: "S2:猛威の奮激",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。"
    },
    "LB1K": {
        name_en: "S2:Umbrageous Melody",
        name_jp: "S2:月葉影の歌",
        effect_en: "Increase power over time when<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.<br>Maxes at 5%",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で5%。"
    },
    "LB1L": {
        name_en: "S2:Nature's Reduction 2",
        name_jp: "S2:花海雪の縮減2",
        effect_en: "Reduce PP consumption by 14%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を14%軽減。"
    },
    "LB1R": {
        name_en: "S2:Umbrageous Radiance",
        name_jp: "S2:月葉影の輝剰",
        effect_en: "Increase Active PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が25%上昇。"
    },
    "LB1M": {
        name_en: "S2:Umbrageous Radiance 2",
        name_jp: "S2:月葉影の輝剰2",
        effect_en: "Increase Active PP Recovery by 28%<br>when S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が28%上昇。"
    },
    "LB1N": {
        name_en: "S2:Wise Skill 2",
        name_jp: "S2:妙技の巧2",
        effect_en: "Increase Critical Hit Rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。"
    },
    "LB1O": {
        name_en: "S2:Skilled Strike 2",
        name_jp: "S2:妙撃の志2",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。"
    },
    "LB1P": {
        name_en: "S2:Radiant Strike 2",
        name_jp: "S2:輝剰の撃2",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。"
    },
    "LB1Q": {
        name_en: "S2:Medicinal Wisdom",
        name_jp: "S2:服薬の恵",
        effect_en: "Boost PP recovery when a -mate item is used.<br>Effects varies per mate.",
        effect_jp: "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。"
    },
    "LB89": {
        name_en: "S2:Instant Reduction",
        name_jp: "S2:瞬乱縮減",
        effect_en: "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックするとPP消費量を12%軽減。"
    },
    "LB90": {
        name_en: "S2:Flaming Guard",
        name_jp: "S2:火炎の備志",
        effect_en: "Increase Fire Attribute and Burn Resistance. Increase damage against enemies weak to Fire.",
        effect_jp: "炎属性、バーン耐性が上昇。敵の弱点属性が炎属性の時、威力上昇"
    },
    "LB91": {
        name_en: "S2:Freezing Guard",
        name_jp: "S2:氷雪の備志",
        effect_en: "Increase Ice Attribute and Freeze Resistance. Increase damage against enemies weak to Ice.",
        effect_jp: "氷属性、フリーズ耐性が上昇。敵の弱点属性が氷属性の時、威力上昇"
    },
    "LB92": {
        name_en: "S2:Runner's High",
        name_jp: "S2:走者高揚",
        effect_en: "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running.",
        effect_jp: "ダッシュ状態時PP自然回復量が100%上昇しHPが5秒ごとに回復。"
    },
    "LB93": {
        name_en: "S2:Skill Reduction",
        name_jp: "S2:技巧縮減",
        effect_en: "Reduce PP consumption for 30 seconds upon hitting with a PA/Casting. Has a low chance to grant amplified effects. Triggers Recast upon activation.",
        effect_jp: "フォトンアーツまたはテクニック命中後30秒間、PPの消費量を軽減。また、まれに大きく軽減することがある。効果発動後にリキャストが発生。"
    },
    "LB1W": {
        name_en: "S2:Lightning Guard",
        name_jp: "S2:轟雷の備志",
        effect_en: "Increases your Lightning attribute and Shock resistance. Boosts power against enemies that are weak to Lightning.",
        effect_jp: "雷耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。"
    },
    "LB1Y": {
        name_en: "S2:Storm Guard",
        name_jp: "S2:暴風の備志",
        effect_en: "Increases your Wind attribute and Shock resistance. Boosts power against enemies that are weak to Wind.",
        effect_jp: "風耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。"
    },
    "LB1Z": {
        name_en: "S2:Aegis Gift",
        name_jp: "S2:瞬護の与",
        effect_en: "When you Just Guard at less than 25% HP, recovers HP by 50% and PP by 30%.",
        effect_jp: "HPを25％未満にすると、HPが50％、PPが30％回復します。"
    },
    "LB2A": {
        name_en: "S2:Heavenly Keeper",
        name_jp: "S2:保天輝地",
        effect_en: "In the air, reduces PP consumption by 8%. On the ground, boosts PP regeneration and attack PP recovery by 20%.",
        effect_jp: "空中時では、PP消費量が8％軽減。地上時では自然PP回復量が20％かつ地上での攻撃時ではPP回復量が20％上昇。"
    },
    "LB2C": {
        name_en: "S2:Flowing Armor",
        name_jp: "S2:時流の護",
        effect_en: "Automatically casts Deband at regular intervals.",
        effect_jp: "一定間隔で自身にデバンドを発動する。"
    },
    "LB2D": {
        name_en: "S2:Shining Guard",
        name_jp: "S2:光明の備志",
        effect_en: "Increase Light Attribute and Panic Resistance. Increase damage against enemies weak to Light.",
        effect_jp: "光耐性、パニック耐性が上昇。敵の弱点属性が光属性の時、威力上昇。"
    },
    "LB2E": {
        name_en: "S2:Darkness Guard",
        name_jp: "S2:暗闇の備志",
        effect_en: "Increases your Dark attribute and Poison resistance. Boosts power against enemies that are weak to Dark.",
        effect_jp: "闇耐性、ポイズン耐性が上昇。敵の弱点属性が闇属性の時、威力上昇。"
    },
    "LB2I": {
        name_en: "S2:Rainbow's Intent",
        name_jp: "S2:六色の志",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts damage by 5%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中与ダメージが5%上昇。"
    },
    "LB2J": {
        name_en: "S2:Rainbow's Exhilaration",
        name_jp: "S2:六色の活与",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Recovers 3% of your<br>HP every second.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中毎秒HPが3%回復。"
    },
    "LB98": {
        name_en: "S2:Skilled Brilliance",
        name_jp: "S2:輝充の志",
        effect_en: "Boosts damage by 3% while PP at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。"
    },
    "LC01": {
        name_en: "S3:Offensive Intent",
        name_jp: "S3:剛撃の志",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。"
    },
    "LC02": {
        name_en: "S3:Vital Intent",
        name_jp: "S3:活実の志",
        effect_en: "Boosts damage by 3% while HP is 80% or more.",
        effect_jp: "HPが80%以上の時、与ダメージが3%上昇。"
    },
    "LC03": {
        name_en: "S3:Radiant Strike",
        name_jp: "S3:輝剰の撃",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。"
    },
    "LC1P": {
        name_en: "S3:Radiant Strike 2",
        name_jp: "S3:輝剰の撃2",
        effect_en: "Increase Attack PP Recovery by 23%.",
        effect_jp: "攻撃時のPP回復量が23%上昇する。"
    },
    "LC04": {
        name_en: "S3:Skilled Strike",
        name_jp: "S3:妙撃の志",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。"
    },
    "LC1O": {
        name_en: "S3:Skilled Strike 2",
        name_jp: "S3:妙撃の志2",
        effect_en: "Increase Critical Hit Damage by 5%.",
        effect_jp: "クリティカル時の与ダメージが5%上昇。"
    },
    "LC05": {
        name_en: "S3:Radiating Grace",
        name_jp: "S3:輝勢の恵",
        effect_en: "Increase Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。"
    },
    "LC06": {
        name_en: "S3:Flowing Exhilaration",
        name_jp: "S3:時流活与",
        effect_en: "Recover 40% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。"
    },
    "LC11": {
        name_en: "S3:Umbrageous Intent",
        name_jp: "S3:月葉影の志",
        effect_en: "Increase damage by 3% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、与ダメージが3%上昇。"
    },
    "LC12": {
        name_en: "S3:Umbrageous Reduction",
        name_jp: "S3:月葉影の縮減",
        effect_en: "Decrease PP consumption by 14% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP消費量を14%軽減。"
    },
    "LC13": {
        name_en: "S3:Umbrageous Exhilaration",
        name_jp: "S3:月葉影の活与",
        effect_en: "Recover 2% HP every second when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒HPが2%回復。"
    },
    "LC14": {
        name_en: "S3:Nature's Radiance",
        name_jp: "S3:花海雪の輝剰",
        effect_en: "Increase Natural PP Recovery by 28% when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、攻撃時PP回復量が28%上昇。"
    },
    "LC15": {
        name_en: "S3:Wise Skill",
        name_jp: "S3:妙技の巧",
        effect_en: "Increase Critical Hit Rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。"
    },
    "LC16": {
        name_en: "S3:Photon Reduction",
        name_jp: "S3:光子縮減",
        effect_en: "Reduces PP consumption by 10%.",
        effect_jp: "PP消費量を7%軽減。"
    },
    "LC17": {
        name_en: "S3:Guardian Armor",
        name_jp: "S3:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。"
    },
    "LC18": {
        name_en: "S3:Nature's Guardian",
        name_jp: "S3:花海雪の備",
        effect_en: "Decrease damage taken by 10%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、被ダメージを10%軽減。"
    },
    "LC19": {
        name_en: "S3:Umbrageous Skill",
        name_jp: "S3:月葉影の巧",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or<br>S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、クリティカル率20%上昇。"
    },
    "LC1A": {
        name_en: "S3:Brilliant Ruin",
        name_jp: "S3:滅域輝与",
        effect_en: "Recover PP when a enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LC1B": {
        name_en: "S3:Cursed Radiance",
        name_jp: "S3:災転輝与",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。"
    },
    "LC1C": {
        name_en: "S3:Violent Invigoration",
        name_jp: "S3:猛威の奮激",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。"
    },
    "LC1D": {
        name_en: "S3:Phantasmal Reduction",
        name_jp: "S3:幻精縮減",
        effect_en: "Reduce PP consumption based<br>on the Photon Blast Gauge",
        effect_jp: "フォトンブラストゲージに応じてPP消費量が減少する。"
    },
    "LC1E": {
        name_en: "S3:Phanatical Advantage",
        name_jp: "S3:狂幻の利",
        effect_en: "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
    },
    "LC1F": {
        name_en: "S3:Immediate Profusion",
        name_jp: "S3:瞬撃繚乱",
        effect_en: "Raises damage by 3%<br>when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。"
    },
    "LC1G": {
        name_en: "S3:Nature's Melody",
        name_jp: "S3:花海雪の歌",
        effect_en: "Increase damage over time when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で5%。"
    },
    "LC1H": {
        name_en: "S3:Nature's Gleam 2",
        name_jp: "S3:花海雪の輝勢2",
        effect_en: "Increase Natural PP Recovery by 25%<br>when S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量25%上昇。"
    },
    "LC1I": {
        name_en: "S3:Flowing Grace",
        name_jp: "S3:時流の恵",
        effect_en: "Regenerate 7 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを7回復する。"
    },
    "LC1J": {
        name_en: "S3:Flowing Exhilaration 2",
        name_jp: "S3:時流活与2",
        effect_en: "Recover 60% of your maximum HP<br>at regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。"
    },
    "LC1K": {
        name_en: "S3:Radiating Grace 2",
        name_jp: "S3:輝勢の恵2",
        effect_en: "Increase Automatic PP Recovery by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。"
    },
    "LC88": {
        name_en: "S3:Rupturing Intent",
        name_jp: "S3:裂砕の志",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。"
    },
    "LC89": {
        name_en: "S3:Nature's Gleam",
        name_jp: "S3:花海雪の輝勢",
        effect_en: "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量23%上昇。"
    },
    "LC90": {
        name_en: "S3:Calming Exhilaration",
        name_jp: "S3:静心活与",
        effect_en: "Recover 70 HP when you hit with a normal attack. Has a cooldown between uses.",
        effect_jp: "通常攻撃が命中した時HPが70回復。発動後リキャスト発生。"
    },
    "LC91": {
        name_en: "S3:Fortifying Strike",
        name_jp: "S3:撃流の備",
        effect_en: "Decrease damage taken by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとに被ダメージが1%軽減。（最大15%まで）"
    },
    "LC92": {
        name_en: "S3:Curtailed Strike",
        name_jp: "S3:撃流縮減",
        effect_en: "Decrease PP consumption by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとにPP消費量が1%軽減。（最大15%まで）"
    },
    "LC93": {
        name_en: "S3:Wise Strike",
        name_jp: "S3:撃流の巧",
        effect_en: "Increase Critical Hit Rate by 2% for every 300, 000 damage dealt. Maxes at 30%.",
        effect_jp: "与ダメージ300000ごとにクリティカル率が2%上昇。（最大30%まで）"
    },
    "LC2B": {
        name_en: "S3:Flowing Courage",
        name_jp: "S3:時流の勇",
        effect_en: "Automatically casts Shifta at regular intervals.",
        effect_jp: "一定間隔で自身にシフタを発動する。"
    },
    "LC1S": {
        name_en: "S3:Furious Inspiration",
        name_jp: "S3:猛威の奮激",
        effect_en: "Boosts power and<br>critical hit rate.<br>Improves PP efficiency.<br>This effect disappears<br>on taking damage, then<br>is restored after a set<br>time.",
        effect_jp: "威力とクリティカル率が上昇。PP効率が向上。被ダメージで消失。一定時間で効果が復活。"
    },
    "LC1U": {
        name_en: "S3:Nature's Melody 2",
        name_jp: "S3:花海雪の歌2",
        effect_en: "While Red Petal Flash,<br>Blue Ocean Flash or<br>White Snow Flash is<br>active:<br>Boosts damage by up<br>to 7% over time.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で7%。"
    },
    "LC98": {
        name_en: "S3:Powering Intent",
        name_jp: "S3:強闘の志",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが3%上昇する。"
    },
    "LC1V": {
        name_en: "S3:Rainbow's Reduction",
        name_jp: "S3:六色の縮減",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Reduces your PP<br>consumption by 20%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP消費量を20%軽減。"
    },
    "LC1W": {
        name_en: "S3:Rainbow's Radiance",
        name_jp: "S3:六色の輝剰",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts attack PP<br>recovery by 45%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中攻撃時PP回復量が45%上昇。"
    },
    "LC1X": {
        name_en: "S3:Rainbow's Gleam",
        name_jp: "S3:六色の輝勢",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts PP regeneration<br>by 40%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP自然回復量40%上昇。"
    },
    "LD07": {
        name_en: "S4:Marvelous Aegis",
        name_jp: "S4:瞬護輝与",
        effect_en: "Restores PP on a successful Just Guard.",
        effect_jp: "ジャストガード成功時、PPを回復する。"
    },
    "LD08": {
        name_en: "S4:Steel Resolve",
        name_jp: "S4:鋼の決意",
        effect_en: "Survive one fatal hit with 1 HP remaining.",
        effect_jp: "致命傷を受けても一度限りだが必ずHPが1残る。"
    },
    "LD09": {
        name_en: "S4:Radiant Response",
        name_jp: "S4:輝器応変",
        effect_en: "Raises PP efficiency based on maximum PP.",
        effect_jp: "最大PPに応じてPP効率が向上する。"
    },
    "LD0A": {
        name_en: "S4:Opposing Skill",
        name_jp: "S4:正対の巧",
        effect_en: "During Brave Stance, frontal critical<br>rate is raised by 30%.",
        effect_jp: "ブレイブスタンス中、正面へのクリティカル率が30%上昇。"
    },
    "LD0B": {
        name_en: "S4:Scything Wind",
        name_jp: "S4:鎌風重吹",
        effect_en: "Extends Kamaitachi duration by 4 seconds.",
        effect_jp: "カマイタチの持続時間が4秒延長される。"
    },
    "LD0C": {
        name_en: "S4:Cunning Strike",
        name_jp: "S4:賢勇両撃",
        effect_en: "During Wise Stance, boosts frontal damage by 15%.",
        effect_jp: "ワイズスタンス中、正面からの与ダメージが15%上昇。"
    },
    "LD0D": {
        name_en: "S4:Vampiric Strike",
        name_jp: "S4:奪命の撃",
        effect_en: "Restores HP equal to 1% of damage dealt.<br>(Max: 30)",
        effect_jp: "攻撃時に与ダメージの1%をHPとして吸収。(上限30)"
    },
    "LD0E": {
        name_en: "S4:Steadfast Courage",
        name_jp: "S4:静の胆力",
        effect_en: "Become immune to knockback by standing still<br>for a certain time.",
        effect_jp: "一定時間、静止状態が続いた時、打ち上げや吹き飛ばしを防ぐ。"
    },
    "LD0F": {
        name_en: "S4:Lustrous Trap",
        name_jp: "S4:輝剰の罠",
        effect_en: "Increases PP recovery from Tactics Trap by<br>20%.",
        effect_jp: "タクティクストラップのPP回復量が20%上昇。"
    },
    "LD0G": {
        name_en: "S4:Dynamic Chain",
        name_jp: "S4:鎖動強身",
        effect_en: "Become invincible for 5 seconds when activating<br>Chain Trigger.",
        effect_jp: "チェイントリガー発動時、5秒間無敵になる。"
    },
    "LD0H": {
        name_en: "S4:Refined Providence",
        name_jp: "S4:摂理洗練",
        effect_en: "Enhances Element Conversion.",
        effect_jp: "エレメントコンバージョンが強化される。"
    },
    "LD0I": {
        name_en: "S4:Circuit Rotation",
        name_jp: "S4:回路輪転",
        effect_en: "Reduces recast time of Photon Flare by 20%.",
        effect_jp: "フォトンフレアのリキャスト時間を20%軽減する。"
    },
    "LD0J": {
        name_en: "S4:Wand Clobber",
        name_jp: "S4:短杖強打",
        effect_en: "Enhances Wand's normal attacks.",
        effect_jp: "ウォンドの通常攻撃性能が強化される。"
    },
    "LD0K": {
        name_en: "S4:Gear Reduction",
        name_jp: "S4:刃機放縮",
        effect_en: "Decreases rate that Gear gauge empties while<br>Katana Gear is active.",
        effect_jp: "カタナギア解放中、ギアゲージの減少速度が低下する。"
    },
    "LD0L": {
        name_en: "S4:Rapid-fire Arrow",
        name_jp: "S4:迅弓の撃",
        effect_en: "Bullet Bow damage is boosted by 3% during<br>Rapid Precision.",
        effect_jp: "ラピッドシュート中、バレットボウ装備時に与ダメージが3%上昇。"
    },
    "LD0M": {
        name_en: "S4:Support Extension",
        name_jp: "S4:支援限長",
        effect_en: "Extends the effect of Shifta and Deband to<br>last 120 seconds.",
        effect_jp: "シフタ・デバンドの効果時間上限を120秒に延長する。"
    },
    "LD0N": {
        name_en: "S4:Genesis Ring",
        name_jp: "S4:変素応輪",
        effect_en: "Changes the weapon's element to match an equipped<br>Guard ring.",
        effect_jp: "装備しているガード系リングに応じて武器属性が変化する。"
    },
    "LD0O": {
        name_en: "S4:Heavenly Protection",
        name_jp: "S4:天輝の守護",
        effect_en: "Bestow Natural PP Recovery and<br>increase PP recovery rate while Guarding.",
        effect_jp: "ガード中PPが自然回復しPP回復速度が上昇。"
    },
    "LD0P": {
        name_en: "S4:Calming Intent",
        name_jp: "S4:静心の志",
        effect_en: "Increase the power of<br>Normal Attacks by 13%.",
        effect_jp: "通常攻撃の威力が13%上昇。"
    },
    "LD0Q": {
        name_en: "S4:Mysterious Strike",
        name_jp: "S4:妙撃の秤",
        effect_en: "Reduce Critical Hit Rate by 50% and<br>increase the power of Critical Hits by 6%.",
        effect_jp: "クリティカル率を50%低下し、クリティカルの威力が6%上昇。"
    },
    "LD0R": {
        name_en: "S4:Saint Shield",
        name_jp: "S4:聖者の盾",
        effect_en: "Generates a barrier (-50% Damage Taken,<br>Negate Knockback) at regular intervals",
        effect_jp: "一定間隔で被ダメージを軽減するバリアを展開。"
    },
    "LD0S": {
        name_en: "S4:Harmonized Rainbow",
        name_jp: "S4:六色の輝秤",
        effect_en: "Decrease Natural PP Recovery but decrease PP consumption when S1:Red Petal / Blue Ocean / White Snow / Yellow Moon / Green Leaf / Black Shadow Flash are active.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中、PP自然回復は減少するがPP消費量は低下する。"
    },
    "LD0T": {
        name_en: "S4:Raising Pursuit",
        name_jp: "S4:累加追撃",
        effect_en: "When you hit with a PA/Tech, boosts damage of the next PA/Tech based on the damage you deal in the next 4 seconds.",
        effect_jp: "PA・テクニックの命中後4秒間の与ダメージ量に応じて、次に命中したPA・テクニックに追加ダメージが発生。(上限25万、リキャスト10秒)"
    },
    "LD0U": {
        name_en: "S4:Pursuing Eclipse",
        name_jp: "S4:追蝕の巧",
        effect_en: "Boosts critical hit rate by 50% against enemies affected by Jellen, Weak Bullet or a status effect.",
        effect_jp: "状態異常、ジェルン、ウィークバレットが発動中のエネミーへのクリティカル率が50％上昇する。"
    },
    "LD0V": {
        name_en: "S4:Cursed Rainbow",
        name_jp: "S4:六色の災転",
        effect_en: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Recovers 500 HP each time you take 500 or more damage at once.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中一度に500以上のダメージを受けるとHPが500回復する。"
    },
    "LD0W": {
        name_en: "S4:Colossal Radiance",
        name_jp: "S4:強闘輝与",
        effect_en: "Recovers 40 PP every 10 seconds when there is a boss nearby.",
        effect_jp: "一定の範囲内に強敵が居る場合10秒ごとにPPが40回復。"
    },
    "LD0X": {
        name_en: "S4:Evasion Training",
        name_jp: "S4:回避訓練",
        effect_en: "Perform an evasive maneuver when the two circles overlap to gain \"Successful Dodge (Counter)\" status.If you do not evade, recover 5% HP.",
        effect_jp: "二つの円が重なる際に回避すると「回避成功」状態となる。回避しなかった場合はHPを５％回復する。"
    },
    "LD0Y": {
        name_en: "S4:Radiant Eclipse",
        name_jp: "S4:追蝕輝剰",
        effect_en: "Increases active PP recovery by 60% when attacking an enemy affectedw by a Status Effect, Jellen, or Weak Bullet.",
        effect_jp: "状態異常、ジェルン、ウィークバレット効果が発生中のエネミー攻撃時、PP回復量が60%上昇。"
    },
    "LD0Z": {
        name_en: "S4:Shared Ruin",
        name_jp: "S4:滅域分与",
        effect_en: "You and your party<br>recover HP and PP<br>when an enemy dies<br>within range.",
        effect_jp: "一定の範囲内でエネミーが死亡した時PTメンバーと自身のHPとPPを回復。"
    },
    "LE01": {
        name_en: "S5:Release Parry",
        name_jp: "S5:瞬護解放",
        effect_en: "Performance changes when Just Guarding with a Weapon Action. Sword only.",
        effect_jp: "武器アクションによるジャストガードで性能が変化する。大剣のみ有効。"
    },
    "LE02": {
        name_en: "S5:Unrivaled Parry",
        name_jp: "S5:瞬護無双",
        effect_en: "Consume no Gear for 15s after performing a Just Guard. Increase Power by 2%. Wired Lance only.",
        effect_jp: "ジャストガード成功時15秒間ギア消費なし。威力2%上昇。自在槍限定。"
    },
    "LE03": {
        name_en: "S5:Rushing Bolt",
        name_jp: "S5:瞬駆突貫",
        effect_en: "Inflict damage while running. Unleash a shockwave attack when you stop running. Increase Power by 2%. Partizan only.",
        effect_jp: "ダッシュ状態時接触した敵にダメージ。ダッシュの停止時衝撃波が発生。威力2%上昇。長槍限定。"
    },
    "LE04": {
        name_en: "S5:Shining Cyclone",
        name_jp: "S5:輝境の旋",
        effect_en: "PP recovery and consumption changes when your maximum PP falls below 50%. Twin Daggers only.",
        effect_jp: "PP50%を境にPPの消費量と回復速度が変化。双小剣限定。"
    },
    "LE05": {
        name_en: "S5:Evasive Barrage",
        name_jp: "S5:巧避連撃",
        effect_en: "Boost Gear Gauge and unleash a counterattack upon successfully blocking an attack with DS Wind Parrying.Increase Power by 2%. Double Saber only.",
        effect_jp: "DSウィンドパリング成功時、ギアが上昇し強力な連撃で切り刻む。威力上昇2%。両剣限定。"
    },
    "LE06": {
        name_en: "S5:Evasive Meteor",
        name_jp: "S5:巧避巨拳",
        effect_en: "Successfully evade an attack with Sway to summon a giant fist. Increase Power by 2%. Knuckles only.",
        effect_jp: "スウェーで回避成功時特大の拳を落とす。威力2%上昇。鋼拳限定。"
    },
    "LE07": {
        name_en: "S5:Hangeki Edge",
        name_jp: "S5:反撃鋭刃",
        effect_en: "Increase the damage of Counter by 15%. Restore Braver Gear Gauge to its maximum value when you successfully perform Katana Counter.Increase Power by 2%. Katana only.",
        effect_jp: "カウンター威力が上昇。ブレイバーでのカウンター成功時ギアが最大まで上昇。威力2%上昇。抜剣限定。"
    },
    "LE08": {
        name_en: "S5:Thundering Pursuit",
        name_jp: "S5:雷光追撃",
        effect_en: "When using a PA, lightning-charged Photon Blades are generated. (Might: ?%). Dual Blades only.",
        effect_jp: "PAを使用すると雷光を纏ったフォトンの追撃が発生。飛翔剣限定。"
    },
    "LE09": {
        name_en: "S5:Fiery End",
        name_jp: "S5:烈終焉弾",
        effect_en: "Enhance the performance of End Attract with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Assault Rifle only.",
        effect_jp: "エンドアトラクト強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。長銃限定。"
    },
    "LE0A": {
        name_en: "S5:Fiery Zero",
        name_jp: "S5:烈零射砲",
        effect_en: "Enhance the performance of Zero Distance with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Launcher only.",
        effect_jp: "ゼロディスタンス強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。大砲限定。"
    },
    "LE0B": {
        name_en: "S5:Bright Escape",
        name_jp: "S5:巧避輝与",
        effect_en: "Successfully evade an attack with Hero Step or Stylish Roll to restore PP. Effect is negated if damage is taken.Twin Machineguns only.",
        effect_jp: "SロールかHrステップで回避成功時PP回復効果。被ダメージで効果消失。双機銃限定。"
    },
    "LE0C": {
        name_en: "S5:Auxiliary Arrow",
        name_jp: "S5:追射剛矢",
        effect_en: "Produces a Chase Arrow when a PA (except Banish Arrow) hits an enemy. Boosts the power of this ability's Chase Arrow for 15 seconds after successfully dodging an attack with Step.Bullet Bow only.",
        effect_jp: "バニッシュアロウ以外のPA命中時、追撃が発生。ステップ回避成功後にPA命中後15秒間追撃が強化。強弓限定。"
    },
    "LE0D": {
        name_en: "S5:Calming Bullet",
        name_jp: "S5:静心杖弾",
        effect_en: "Enhance the performance of Normal Attacks and increase the damage of Rod Precision by 100%. Rod only.",
        effect_jp: "通常攻撃性能が強化されロッドシュートの威力が100%上昇する。長杖限定。"
    },
    "LE0E": {
        name_en: "S5:Speedy Support",
        name_jp: "S5:急速補助",
        effect_en: "Shorten the charge time of Support Techniques. The power of Zondeel is reduced. Talis only.",
        effect_jp: "補助テクニックのチャージ時間を短縮。ゾンディールの威力減少。導具限定。"
    },
    "LE0F": {
        name_en: "S5:Calming Shockwave",
        name_jp: "S5:静心衝杖",
        effect_en: "Generates a wave attack on the third Normal Attack. Increase Power by 2%. Wand only.",
        effect_jp: "通常攻撃の3段目に衝撃波が発生。威力が2%上昇。短杖限定。"
    },
    "LE0G": {
        name_en: "S5:Rhythmic Pursuer",
        name_jp: "S5:追災律動",
        effect_en: "Boost the potency of Elemental Burst by 30% and automatically activate Elemental Burst when using a Photon Art.Jet Boots only.",
        effect_jp: "エレメンタルバーストの威力が30%上昇しPA派生攻撃時自動的に発動する。魔装脚限定。"
    },
    "LE0H": {
        name_en: "S5:Mysterious Intent",
        name_jp: "S5:妙の巧志",
        effect_en: "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX).",
        effect_jp: "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)"
    },
    "LE0I": {
        name_en: "S5:Anthesis Cultivation",
        name_jp: "S5:錬成萌花",
        effect_en: "Doubles the effects of Special Abilities.",
        effect_jp: "特殊能力のステータス変化を2倍にする。"
    },
    "LE98": {
        name_en: "S5:Instant Invocation",
        name_jp: "S5:錬成萌花",
        effect_en: "Casting damage is<br>decreased by 40%, but<br>using the same<br>Casting with a JA<br>substantially<br>decreases charge<br>time.",
        effect_jp: "テクニックの与ダメージが常時40%減少するがテクニック使用後に同属性テクニックJAでチャージ時間大幅短縮。"
    },
    "LE0J": {
        name_en: "S5:Vigorous Response",
        name_jp: "S5:錬成萌花",
        effect_en: "Grants a bonus when<br>your max HP is at<br>1000. Gain additional<br>bonuses per 500 max<br>HP over. Maximum<br>bonuses are reached<br>when max HP is at<br>3000.",
        effect_jp: "最大HP1000から追加効果が発動しHPが500増加ごとに追加効果が発生する。追加効果最大値3000"
    },
    "LE0K": {
        name_en: "S5:Tethered Eclipse",
        name_jp: "S5:錬成萌花",
        effect_en: "Boosts damage by 3%<br>against enemies<br>inflicted with a<br>status effect. Also<br>gives a chance to<br>inflict Bind by 40%.",
        effect_jp: "状態異常中のエネミーに対して威力が3%上昇し40%の確率でバインド状態にする。"
    },
    "LE97": {
        name_en: "S5:Angelic Respite",
        name_jp: "S5:槍機天悠",
        effect_en: "At maximum gear, no gear is consumed while airborne. Increase Power by 2%. Partizan only.",
        effect_jp: "ギア最大時、空中ではギアを消費しなくなる。威力2%上昇。長槍限定。"
    },
    "LF0A": {
        name_en: "S6:Heroic Howl",
        name_jp: "S6:英雄咆哮",
        effect_en: "Enhances Hero Boost. Increases the rate that Hero Boosts's damage boost increases. No effect if using weapon with \"Heroic Victory\".",
        effect_jp: "ヒーローブースト強化。威力増加速度が上昇。「英雄の凱歌」が優先され併用不可。"
    },
    "LF0B": {
        name_en: "S6:Soaring Ballet",
        name_jp: "S6:翔機天舞",
        effect_en: "Bouncer weapon Gear fills while standing still. No effect if using weapon with \"Angelic Guidance\".",
        effect_jp: "バウンサー武器のギアが滞空状態時に上昇。「聖鳥の導き」が優先され併用不可。"
    },
    "LF0C": {
        name_en: "S6:Guardian's Essence",
        name_jp: "S6:機魂の守護",
        effect_en: "Hunter weapon and Katana Gear fills while Guarding. No effect if using weapon with \"Zephyr's Edge\".",
        effect_jp: "ハンター武器・カタナのギアがガード中に上昇。「風視の太刀」が優先され併用不可。"
    },
    "LF0D": {
        name_en: "S6:Ironclad Illness",
        name_jp: "S6:癒蝕頑強",
        effect_en: "Become massive for 60 seconds after becoming affected by a status.",
        effect_jp: "状態異常になってから60秒間、頑強になる。"
    },
    "LF0E": {
        name_en: "S6:Wise Skill",
        name_jp: "S6:妙技の巧",
        effect_en: "Increases your critical hit rate by 15%.",
        effect_jp: "クリティカル率が15％上昇する。"
    },
    "LF0F": {
        name_en: "S6:Guardian Armor",
        name_jp: "S6:守護の備",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。"
    },
    "LF0G": {
        name_en: "S6:MEL Pwr Up",
        name_jp: "S6:打撃上昇",
        effect_en: "MEL Pwr(+30)",
        effect_jp: "打撃力(+30)"
    },
    "LF0H": {
        name_en: "S6:RNG Pwr Up",
        name_jp: "S6:射撃上昇",
        effect_en: "RNG Pwr(+30)",
        effect_jp: "射撃力(+30)"
    },
    "LF0I": {
        name_en: "S6:TEC Pwr Up",
        name_jp: "S6:法撃上昇",
        effect_en: "TEC Pwr(+30)",
        effect_jp: "法撃力(+30)"
    },
    "LF0J": {
        name_en: "S6:HP Up",
        name_jp: "S6:活器上昇",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)"
    },
    "LF0K": {
        name_en: "S6:PP Up",
        name_jp: "S6:輝器上昇",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)"
    },
    "LF0L": {
        name_en: "S6:Brilliant Ruin",
        name_jp: "S6:滅域輝与",
        effect_en: "Recover 5 PP when an enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。"
    },
    "LF0M": {
        name_en: "S6:Readying Guard",
        name_jp: "S6:守護乱備",
        effect_en: "Gain a 10% chance to reduce damage by 70%.",
        effect_jp: "10％の確率で被ダメージを70％軽減。"
    },
    "LF0N": {
        name_en: "S6:Angelic Wings",
        name_jp: "S6:翔天の翼",
        effect_en: "Increases Jump Might.",
        effect_jp: "ジャンプ力が上昇する。"
    },
    "LF0O": {
        name_en: "S6:Long Night Star",
        name_jp: "S6:長夜の明星",
        effect_en: "Reduce Etoile Boost's decay per second by 50%.",
        effect_jp: "エトワールブーストの秒間軽減減少率を50％緩和する。"
    },
    "LF0P": {
        name_en: "S6:Evasion Whistle",
        name_jp: "S6:回避の口笛",
        effect_en: "Dodging will cause your pet to return back to you.",
        effect_jp: "回避行動に合わせてペットが戻ってくる。"
    },
    "LF0Q": {
        name_en: "S6:Battle Readiness",
        name_jp: "S6:修羅の備",
        effect_en: "When your HP is at 50% or lower, damage is reduced by 40%. Resets after a brief cooldown.",
        effect_jp: "HPが50％以下の時3秒間、被ダメージを40％軽減する。発動後リキャスト発生。"
    },
    "LF0S": {
        name_en: "S6:Overlimit",
        name_jp: "S6:超限活器",
        effect_en: "Boosts maximum HP by<br>50% while Limit Break<br>is active.",
        effect_jp: "リミットブレイク発動中最大HPが50%上昇する。"
    },
    "LG0A": {
        name_en: "S7:Glowing Grace",
        name_jp: "S7:輝静の恵",
        effect_en: "Recovers 4 PP per second when standing still for longer than 1 second.",
        effect_jp: "1秒間静止状態が続いた時、ppが1秒ごとに4回復。"
    },
    "LG0B": {
        name_en: "S7:MEL Pwr Up",
        name_jp: "S7:打撃上昇",
        effect_en: "MEL Pwr(+30)",
        effect_jp: "打撃力(+30)"
    },
    "LG0C": {
        name_en: "S7:RNG Pwr Up",
        name_jp: "S7:射撃上昇",
        effect_en: "RNG Pwr(+30)",
        effect_jp: "射撃力(+30)"
    },
    "LG0D": {
        name_en: "S7:TEC Pwr Up",
        name_jp: "S7:法撃上昇",
        effect_en: "TEC Pwr(+30)",
        effect_jp: "法撃力(+30)"
    },
    "LG0E": {
        name_en: "S7:HP Up",
        name_jp: "S7:活器上昇",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)"
    },
    "LG0F": {
        name_en: "S7:PP Up",
        name_jp: "S7:輝器上昇",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)"
    },
    "LG0G": {
        name_en: "S7:S-Atk Up 2",
        name_jp: "S7:打撃上昇2",
        effect_en: "MEL Pwr(+50)",
        effect_jp: "打撃力(+50)"
    },
    "LG0H": {
        name_en: "S7:RNG Pwr Up 2",
        name_jp: "S7:射撃上昇2",
        effect_en: "RNG Pwr(+50)",
        effect_jp: "射撃力(+50)"
    },
    "LG0I": {
        name_en: "S7:TEC Pwr Up 2",
        name_jp: "S7:法撃上昇2",
        effect_en: "TEC Pwr(+50)",
        effect_jp: "法撃力(+50)"
    },
    "LG0J": {
        name_en: "S7:Attack Up",
        name_jp: "S7:攻撃上昇",
        effect_en: "MEL Pwr(+25),RNG Pwr(+25),TEC Pwr(+25)",
        effect_jp: "打撃力(+25),射撃力(+25),法撃力(+25)"
    },
    "LG0K": {
        name_en: "S7:Attack Up 2",
        name_jp: "S7:攻撃上昇2",
        effect_en: "MEL Pwr(+45),RNG Pwr(+45),TEC Pwr(+45)",
        effect_jp: "打撃力(+45),射撃力(+45),法撃力(+45)"
    },
    "LG0L": {
        name_en: "S7:Zenith Impact",
        name_jp: "S7:瞬撃の極",
        effect_en: "Gain a 10% chance to stun the enemy with a Just Attack.",
        effect_jp: "ジャストアタック時に10%の確率で対象をスタンさせる。"
    },
    "LG0M": {
        name_en: "S7:Increased Efficiency",
        name_jp: "S7:薬効増大",
        effect_en: "Boost the effect of recovery items by 30%.",
        effect_jp: "回復アイテムの効果を30％上昇させる。"
    },
    "LG0N": {
        name_en: "S7:Genius Merge",
        name_jp: "S7:以心伝心",
        effect_en: "Automatically answers Sympathy requests during Alter Ego. No effect if using weapon with \"Glance of Darkness\".",
        effect_jp: "アルターエゴ発動中ペットシンパシーの要求に自動支援を行う。「闇の一瞥」が優先され併用不可。"
    },
    "LG0O": {
        name_en: "S7:Sentinel's Gift",
        name_jp: "S7:法護の与",
        effect_en: "Upon a successful<br>Tech Charge Parry,<br>recover 5% HP and 10 PP.",
        effect_jp: "テックCパリング成功時HPを5%回復しPPを10回復。"
    },
    "LH0A": {
        name_en: "S8:Sky Dance's Boon",
        name_jp: "S8:舞空の援",
        effect_en: "Activates Shifta and Deband every 10 seconds when you stay in the air for longer than 2 seconds.",
        effect_jp: "2秒間、滞空状態が続くと、10秒間ごとにシフタ、デバンド発動。"
    },
    "LH0B": {
        name_en: "S8:Strong Potency",
        name_jp: "S8:服薬強身",
        effect_en: "Makes you temporarily invincible after drinking a -mate item.",
        effect_jp: "自身でメイト系アイテム使用時、一定時間無敵。"
    },
    "LH0C": {
        name_en: "S8:MEL Pwr Up",
        name_jp: "S8:打撃上昇",
        effect_en: "MEL Pwr(+30)",
        effect_jp: "打撃力(+30)"
    },
    "LH0D": {
        name_en: "S8:RNG Pwr Up",
        name_jp: "S8:射撃上昇",
        effect_en: "RNG Pwr(+30)",
        effect_jp: "射撃力(+30)"
    },
    "LH0E": {
        name_en: "S8:TEC Pwr Up",
        name_jp: "S8:法撃上昇",
        effect_en: "TEC Pwr(+30)",
        effect_jp: "法撃力(+30)"
    },
    "LH0F": {
        name_en: "S8:HP Up",
        name_jp: "S8:活器上昇",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)"
    },
    "LH0G": {
        name_en: "S8:PP Up",
        name_jp: "S8:輝器上昇",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)"
    },
    "LH0H": {
        name_en: "S8:HP Up 2",
        name_jp: "S8:活器上昇2",
        effect_en: "HP(+60)",
        effect_jp: "HP(+60)"
    },
    "LH0I": {
        name_en: "S8:PP Up 2",
        name_jp: "S8:輝器上昇2",
        effect_en: "PP(+6)",
        effect_jp: "PP(+6)"
    },
    "LH0J": {
        name_en: "S8:High-Minded",
        name_jp: "S8:一念滞空",
        effect_en: "Reduce falling speed while charging a Casting in mid-air.",
        effect_jp: "空中でテクニックをチャージ中に落下速度が遅くなる。"
    },
    "OA01": {
        name_en: "Mutation I",
        name_jp: "ミューテーションⅠ",
        effect_en: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+10)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>,法撃力(+10)<br>HP(+10)"
    },
    "OA02": {
        name_en: "Mutation II",
        name_jp: "ミューテーションⅡ",
        effect_en: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>HP(+15)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>,法撃力(+15)<br>HP(+15)"
    },
    "RA11": {
        name_en: "Gunne Soul",
        name_jp: "グンネ・ソール",
        effect_en: "MEL Pwr(+15),<br>HP(+45)",
        effect_jp: "打撃力(+15),<br>HP(+45)"
    },
    "RA15": {
        name_en: "Jigmol Soul",
        name_jp: "ジグモル・ソール",
        effect_en: "MEL Pwr(+15),<br>PP(+4)",
        effect_jp: "打撃力(+15),<br>PP(+4)"
    },
    "RA21": {
        name_en: "Vol Soul",
        name_jp: "ヴォル・ソール",
        effect_en: "MEL Pwr(+30),<br>HP(+20)",
        effect_jp: "打撃力(+30),<br>HP(+20)"
    },
    "RA22": {
        name_en: "Gwana Soul",
        name_jp: "グワナ・ソール",
        effect_en: "MEL Pwr(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "打撃力(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RA23": {
        name_en: "Quartz Soul",
        name_jp: "クォーツ・ソール",
        effect_en: "MEL Pwr(+30),<br>PP(+3)",
        effect_jp: "打撃力(+30),<br>PP(+3)"
    },
    "RA31": {
        name_en: "Deadleon Soul",
        name_jp: "デッドリオン・ソール",
        effect_en: "MEL Pwr(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>HP(+30)"
    },
    "RA32": {
        name_en: "Leone Soul",
        name_jp: "レオーネ・ソール",
        effect_en: "MEL Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RA33": {
        name_en: "Beari Soul",
        name_jp: "ベーアリ・ソール",
        effect_en: "MEL Pwr(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>PP(+3)"
    },
    "RB11": {
        name_en: "Idihta Soul",
        name_jp: "イーデッタ・ソール",
        effect_en: "RNG Pwr(+15),<br>HP(+45)",
        effect_jp: "射撃力(+15),<br>HP(+45)"
    },
    "RB15": {
        name_en: "Madu Soul",
        name_jp: "マドゥ・ソール",
        effect_en: "RNG Pwr(+15),<br>PP(+4)",
        effect_jp: "射撃力(+15),<br>PP(+4)"
    },
    "RB21": {
        name_en: "Ransa Soul",
        name_jp: "ランサ・ソール",
        effect_en: "RNG Pwr(+30),<br>HP(+20)",
        effect_jp: "射撃力(+30),<br>HP(+20)"
    },
    "RB22": {
        name_en: "Fang Soul",
        name_jp: "ファング・ソール",
        effect_en: "RNG Pwr(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "射撃力(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RB23": {
        name_en: "Mizer Soul",
        name_jp: "マイザー・ソール",
        effect_en: "RNG Pwr(+30),<br>PP(+3)",
        effect_jp: "射撃力(+30),<br>PP(+3)"
    },
    "RB31": {
        name_en: "Leopod Soul",
        name_jp: "レオパード・ソール",
        effect_en: "RNG Pwr(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>HP(+30)"
    },
    "RB32": {
        name_en: "Siogr Soul",
        name_jp: "ジオーグ・ソール",
        effect_en: "RNG Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RB33": {
        name_en: "Greuzoras Soul",
        name_jp: "グリュゾラス・ソール",
        effect_en: "RNG Pwr(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>PP(+3)"
    },
    "RC11": {
        name_en: "Jadeu Soul",
        name_jp: "ジャドゥ・ソール",
        effect_en: "TEC Pwr(+15),<br>HP(+45)",
        effect_jp: "法撃力(+15),<br>HP(+45)"
    },
    "RC13": {
        name_en: "Nept Soul",
        name_jp: "ネプト・ソール",
        effect_en: "TEC Pwr(+15),<br>PP(+4)",
        effect_jp: "法撃力(+15),<br>PP(+4)"
    },
    "RC21": {
        name_en: "Ragne Soul",
        name_jp: "ラグネ・ソール",
        effect_en: "TEC Pwr(+30),<br>HP(+20)",
        effect_jp: "法撃力(+30),<br>HP(+20)"
    },
    "RC22": {
        name_en: "Wolga Soul",
        name_jp: "ウォルガ・ソール",
        effect_en: "TEC Pwr(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "法撃力(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RC23": {
        name_en: "Elder Soul",
        name_jp: "エルダー・ソール",
        effect_en: "TEC Pwr(+30),<br>PP(+3)",
        effect_jp: "法撃力(+30),<br>PP(+3)"
    },
    "RC31": {
        name_en: "Diabo Soul",
        name_jp: "ディアボ・ソール",
        effect_en: "TEC Pwr(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>HP(+30)"
    },
    "RC32": {
        name_en: "Duvals Soul",
        name_jp: "ドゥバルス・ソール",
        effect_en: "TEC Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RC33": {
        name_en: "Granz Soul",
        name_jp: "グランゾ・ソール",
        effect_en: "TEC Pwr(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>PP(+3)"
    },
    "RE13": {
        name_en: "Nyau Soul",
        name_jp: "ニャウ・ソール",
        effect_en: "DEX(+15),<br>PP(+4)",
        effect_jp: "技量(+15),<br>PP(+4)"
    },
    "RE21": {
        name_en: "Signo Soul",
        name_jp: "シグノ・ソール",
        effect_en: "DEX(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "技量(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RE22": {
        name_en: "Chrome Soul",
        name_jp: "クローム・ソール",
        effect_en: "DEX(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "技量(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RE23": {
        name_en: "Rappy Soul",
        name_jp: "ラッピー・ソール",
        effect_en: "DEX(+30),<br>PP(+4)",
        effect_jp: "技量(+30),<br>PP(+4)"
    },
    "RE51": {
        name_en: "Sinow Soul",
        name_jp: "シノワ・ソール",
        effect_en: "MEL Pwr(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)",
        effect_jp: "打撃力(+5),<br>技量(+30),<br>HP(+25)<br>PP(+2)"
    },
    "RH21": {
        name_en: "Snow Soul",
        name_jp: "スノウ・ソール",
        effect_en: "MEL Def(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃防御(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RH22": {
        name_en: "Rockbear Soul",
        name_jp: "ロックベア・ソール",
        effect_en: "MEL Def(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "打撃防御(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RH23": {
        name_en: "X Soul",
        name_jp: "エクス・ソール",
        effect_en: "MEL Def(+30),<br>PP(+4)",
        effect_jp: "打撃防御(+30),<br>PP(+4)"
    },
    "RI21": {
        name_en: "Marmoth Soul",
        name_jp: "マルモ・ソール",
        effect_en: "RNG Def(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "射撃防御(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RI22": {
        name_en: "Persona Soul",
        name_jp: "ペルソナ・ソール",
        effect_en: "RNG Def(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "射撃防御(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RI23": {
        name_en: "Varder Soul",
        name_jp: "ヴァーダー・ソール",
        effect_en: "RNG Def(+30),<br>PP(+4)",
        effect_jp: "射撃防御(+30),<br>PP(+4)"
    },
    "RJ21": {
        name_en: "Catre Soul",
        name_jp: "キャタ・ソール",
        effect_en: "TEC Def(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "法撃防御(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RJ22": {
        name_en: "Shraider Soul",
        name_jp: "シュレイダ・ソール",
        effect_en: "TEC Def(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "法撃防御(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RJ23": {
        name_en: "Goron Soul",
        name_jp: "ゴロン・ソール",
        effect_en: "TEC Def(+30),<br>PP(+4)",
        effect_jp: "法撃防御(+30),<br>PP(+4)"
    },
    "ROA1": {
        name_en: "Org Soul",
        name_jp: "オルグ・ソール",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>HP(+10)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>HP(+10)"
    },
    "ROA2": {
        name_en: "Meduna Soul",
        name_jp: "メデューナ・ソール",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROA3": {
        name_en: "Soma Soul",
        name_jp: "ソーマ・ソール",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>PP(+2)"
    },
    "ROC1": {
        name_en: "Ringa Soul",
        name_jp: "リンガ・ソール",
        effect_en: "MEL Pwr(+20),<br>TEC Pwr(+20),<br>HP(+10)",
        effect_jp: "打撃力(+20),<br>法撃力(+20),<br>HP(+10)"
    },
    "ROC2": {
        name_en: "Luther Soul",
        name_jp: "ルーサー・ソール",
        effect_en: "MEL Pwr(+20),<br>TEC Pwr(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+20),<br>法撃力(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROC3": {
        name_en: "Malluda Soul",
        name_jp: "マリューダ・ソール",
        effect_en: "MEL Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>法撃力(+20),<br>PP(+2)"
    },
    "ROE1": {
        name_en: "Bar Soul",
        name_jp: "バル・ソール",
        effect_en: "RNG Pwr(+20),<br>TEC Pwr(+20),<br>HP(+10)",
        effect_jp: "射撃力(+20),<br>法撃力(+20),<br>HP(+10)"
    },
    "ROE2": {
        name_en: "Vibras Soul",
        name_jp: "ビブラス・ソール",
        effect_en: "RNG Pwr(+20),<br>TEC Pwr(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "射撃力(+20),<br>法撃力(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROE3": {
        name_en: "Tagami Kazuchi Soul",
        name_jp: "タガミカヅチ・ソール",
        effect_en: "RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)",
        effect_jp: "射撃力(+20),<br>法撃力(+20),<br>PP(+2)"
    },
    "ROG5": {
        name_en: "Lili Soul",
        name_jp: "リーリー・ソール",
        effect_en: "MEL Pwr(+20),<br>MEL Def(+20),<br>HP(+20)",
        effect_jp: "打撃力(+20),<br打撃防御(+20),<br>HP(+20)"
    },
    "RP05": {
        name_en: "Cougar Soul",
        name_jp: "クーガー・ソール",
        effect_en: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>技量(+15),<br>HP(+10),<br>PP(+2)"
    },
    "RP10": {
        name_en: "Gryphon Soul",
        name_jp: "グリフォン・ソール",
        effect_en: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>技量(+15),<br>HP(+5),<br>PP(+3)"
    },
    "RP15": {
        name_en: "Knight Gear Soul",
        name_jp: "ナイトギア・ソール",
        effect_en: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>PP(+4)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>技量(+15),<br>PP(+4)"
    },
    "RP22": {
        name_en: "Izane Kazuchi Soul",
        name_jp: "イザネカヅチ・ソール",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+20),<br>PP(+2)"
    },
    "RP25": {
        name_en: "Anga Soul",
        name_jp: "アンガ・ソール",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+4)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+20),<br>PP(+4)"
    },
    "RP55": {
        name_en: "Apprentice Soul",
        name_jp: "アプレンティス・ソール",
        effect_en: "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40)",
        effect_jp: "打撃力(+40),<br>射撃力(+40),<br>法撃力(+40)"
    },
    "RPA5": {
        name_en: "Magatsu Soul",
        name_jp: "マガツ・ソール",
        effect_en: "MEL Def(+15),<br>RNG Def(+15),<br>TEC Def(+15),<br>HP(+30),<br>PP(+3)",
        effect_jp: "打撃防御(+15),<br>射撃防御(+15),<br>法撃防御(+15),<br>HP(+30),<br>PP(+3)"
    },
    "RQ01": {
        name_en: "Gemini Soul",
        name_jp: "ダブル・ソール",
        effect_en: "HP(+40),<br>PP(+3)",
        effect_jp: "HP(+40),<br>PP(+3)"
    },
    "RZ01": {
        name_en: "Soul of Darkness",
        name_jp: "ダークネス・ソール",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "SA01": {
        name_en: "Astral Soul",
        name_jp: "アストラル・ソール",
        effect_en: "ALL(+35),<br>HP(+35),<br>PP(+5)",
        effect_jp: "ALL(+35),<br>HP(+35),<br>PP(+5)"
    },
    "SA11": {
        name_en: "Ether Soul",
        name_jp: "エーテル・ソール",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "SB01": {
        name_en: "Toh\'oh Soul",
        name_jp: "トウオウ・ソール",
        effect_en: "ALL(+10)",
        effect_jp: "ALL(+10)"
    },
    "SB02": {
        name_en: "FullVegas Soul",
        name_jp: "フルベガス・ソール",
        effect_en: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15)"
    },
    "SB03": {
        name_en: "Escarde Soul",
        name_jp: "エスカード・ソール",
        effect_en: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>DEX(+20)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>法撃力(+10),<br>技量(+20)"
    },
    "SB04": {
        name_en: "Fabula Soul",
        name_jp: "ファーブラ・ソール",
        effect_en: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+20)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>法撃力(+10),<br>HP(+20)"
    },
    "SB05": {
        name_en: "Historia Soul",
        name_jp: "イストリア・ソール",
        effect_en: "MEL Def(+25),<br>RNG Def(+25),<br>TEC Def(+25),<br>HP(+30),<br>PP(+2)",
        effect_jp: "打撃防御(+25),<br>射撃防御(+25),<br>法撃防御(+25),<br>HP(+30),<br>PP(+2)"
    },
    "SH10": {
        name_en: "Acto Di Soul",
        name_jp: "アクト・ジ・ソール",
        effect_en: "MEL Pwr(+35),<br>PP(+3)",
        effect_jp: "打撃力(+35),<br>PP(+3)"
    },
    "SH20": {
        name_en: "Tir Di Soul",
        name_jp: "ティル・ジ・ソール",
        effect_en: "RNG Pwr(+35),<br>PP(+3)",
        effect_jp: "射撃力(+35),<br>PP(+3)"
    },
    "SH30": {
        name_en: "Magia Di Soul",
        name_jp: "マギー・ジ・ソール",
        effect_en: "TEC Pwr(+35),<br>PP(+3)",
        effect_jp: "法撃力(+35),<br>PP(+3)"
    },
    "SH40": {
        name_en: "Ares The Soul",
        name_jp: "アレス・ジ・ソール",
        effect_en: "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25),<br>HP(+35),<br>PP(+3)",
        effect_jp: "打撃力(+25),<br>射撃力(+25),<br>法撃力(+25),<br>HP(+35),<br>PP(+3)"
    },
    "SI01": {
        name_en: "Ex Act Soul",
        name_jp: "イクスアクト・ソール",
        effect_en: "MEL Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)"
    },
    "SI02": {
        name_en: "Ex Till Soul",
        name_jp: "イクスティル・ソール",
        effect_en: "RNG Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)",
        effect_jp: "射撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)"
    },
    "SI03": {
        name_en: "Ex Magi Soul",
        name_jp: "イクスマギー・ソール",
        effect_en: "TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)",
        effect_jp: "法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)"
    },
    "SI04": {
        name_en: "Ex Ares Soul",
        name_jp: "イクスアレス・ソール",
        effect_en: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+50), PP(+2)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+50),PP(+2)"
    },
    "TA01": {
        name_en: "Stigma",
        name_jp: "スティグマ",
        effect_en: "DEX(+20),<br>PP(+5)",
        effect_jp: "技量(+20),<br>PP(+5)"
    },
    "TB01": {
        name_en: "Vinculum",
        name_jp: "ウィンクルム",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+20)"
    },
    "TC01": {
        name_en: "Modulator",
        name_jp: "モデュレイター",
        effect_en: "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30)",
        effect_jp: "打撃力(+30),<br>射撃力(+30),<br>法撃力(+30)"
    },
    "TL01": {
        name_en: "ARKS Max",
        name_jp: "アクス・ＭＡＸ",
        effect_en: "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25)",
        effect_jp: "打撃力(+25),<br>射撃力(+25),<br>法撃力(+25)"
    },
    "TG02": {
        name_en: "Yamato Factor",
        name_jp: "ヤマト・ファクター",
        effect_en: "MEL Pwr(+10),<br>RNG Pwr(+20),<br>TEC Pwr(+10),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>射撃力(+20),<br>法撃力(+10),<br>HP(+20),<br>PP(+1)"
    },
    "TG03": {
        name_en: "Mother Factor",
        name_jp: "マザー・ファクター",
        effect_en: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+20),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>法撃力(+20),<br>HP(+20),<br>PP(+1)"
    },
    "TG04": {
        name_en: "Deus Factor",
        name_jp: "デウス・ファクター",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+20),<br>射撃力(+10),<br>法撃力(+10),<br>HP(+20),<br>PP(+1)"
    },
    "TG31": {
        name_en: "Ether Factor",
        name_jp: "エーテル・ファクター",
        effect_en: "ALL(+30),<br>HP(+10),<br>PP(+6)",
        effect_jp: "ALL(+30),<br>HP(+10),<br>PP(+6)"
    },
    "TK01": {
        name_en: "Omega Reverie",
        name_jp: "オメガ・レヴリー",
        effect_en: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>HP(+20),<br>PP(+1)"
    },
    "TK02": {
        name_en: "Elder Reverie",
        name_jp: "エルダー・レヴリー",
        effect_en: "MEL Pwr(+40),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(-2)",
        effect_jp: "打撃力(+40),<br>射撃力(+20),<br>法撃力(+20),<br>PP(-2)"
    },
    "TK03": {
        name_en: "Luther Reverie",
        name_jp: "ルーサー・レヴリー",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+40),<br>HP(-20)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+40),<br>HP(-20)"
    },
    "TK04": {
        name_en: "Apprentice Reverie",
        name_jp: "アプレジナ・レヴリー",
        effect_en: "MEL Pwr(+20),<br>RNG Pwr(+40),<br>TEC Pwr(+20),<br>HP(-10),<br>PP(-1)",
        effect_jp: "打撃力(+20),<br>射撃力(+40),<br>法撃力(+20),<br>HP(-10),<br>PP(-1)"
    },
    "TK05": {
        name_en: "Gemini Reverie",
        name_jp: "ダブル・レヴリー",
        effect_en: "MEL Pwr(-20),<br>RNG Pwr(-20),<br>TEC Pwr(-20),<br>HP(+50),<br>PP(+5)",
        effect_jp: "打撃力(-20),<br>射撃力(-20),<br>法撃力(-20),<br>HP(+50),<br>PP(+5)"
    },
    "TK06": {
        name_en: "Persona Reverie",
        name_jp: "ペルソナ・レヴリー",
        effect_en: "MEL Pwr(+40),RNG Pwr(+40),TEC Pwr(+40),MEL Def(-20),RNG Def(-20),TEC Def(-20)",
        effect_jp: "打撃力(+40),射撃力(+40),法撃力(+40),打撃防御(-20),射撃防御(-20),法撃防御(-20)"
    },
    "TK10": {
        name_en: "Mana Reverie",
        name_jp: "マナ・レヴリー",
        effect_en: "MEL Pwr(+50),RNG Pwr(+50),TEC Pwr(+50),HP(+20),PP(+4)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),HP(+20),PP(+4)"
    },
    "TJ01": {
        name_en: "Omega Memoria",
        name_jp: "オメガ・メモリア",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "TE01": {
        name_en: "Veteran\'s Resolve I",
        name_jp: "リターナーⅠ",
        effect_en: "ALL(+3),<br>HP(+3),<br>PP(+1)",
        effect_jp: "ALL(+3),<br>HP(+3),<br>PP(+1)"
    },
    "TE02": {
        name_en: "Veteran\'s Resolve II",
        name_jp: "リターナーⅡ",
        effect_en: "ALL(+5),<br>HP(+5),<br>PP(+2)",
        effect_jp: "ALL(+5),<br>HP(+5),<br>PP(+2)"
    },
    "TE03": {
        name_en: "Veteran\'s Resolve III",
        name_jp: "リターナーⅢ",
        effect_en: "ALL(+10),<br>HP(+10),<br>PP(+3)",
        effect_jp: "ALL(+10),<br>HP(+10),<br>PP(+3)"
    },
    "TE04": {
        name_en: "Veteran\'s Resolve IV",
        name_jp: "リターナーⅣ",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+4)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+4)"
    },
    "TE05": {
        name_en: "Veteran\'s Resolve V",
        name_jp: "リターナーⅤ",
        effect_en: "ALL(+30),<br>HP(+30),<br>PP(+5)",
        effect_jp: "ALL(+30),<br>HP(+30),<br>PP(+5)"
    },
    "TM01": {
        name_en: "Crack I",
        name_jp: "クラックI",
        effect_en: "MEL Pwr(+3), RNG Pwr(+3), TEC Pwr(+3), MEL Def(+5), RNG Def(+5), TEC Def(+5), HP(+5), PP(+1)",
        effect_jp: "打撃力(+3),射撃力(+3),法撃力(+3),打撃防御(+5),射撃防御(+5),法撃防御(+5),HP(+5),PP(+1)"
    },
    "TM02": {
        name_en: "Crack II",
        name_jp: "クラックII",
        effect_en: "MEL Pwr(+5), RNG Pwr(+5), TEC Pwr(+5), MEL Def(+10), RNG Def(+10), TEC Def(+10), HP(+10), PP(+1)",
        effect_jp: "打撃力(+5),射撃力(+5),法撃力(+5),打撃防御(+10),射撃防御(+10),法撃防御(+10),HP(+10),PP(+1)"
    },
    "TM03": {
        name_en: "Crack III",
        name_jp: "クラックIII",
        effect_en: "MEL Pwr(+10), RNG Pwr(+10), TEC Pwr(+10), MEL Def(+15), RNG Def(+15), TEC Def(+15), HP(+15), PP(+1)",
        effect_jp: "打撃力(+10),射撃力(+10),法撃力(+10),打撃防御(+15),射撃防御(+15),法撃防御(+15),HP(+15),PP(+1)"
    },
    "TM04": {
        name_en: "Crack IV",
        name_jp: "クラックIV",
        effect_en: "MEL Pwr(+15), RNG Pwr(+15), TEC Pwr(+15), MEL Def(+30), RNG Def(+30), TEC Def(+30), HP(+30), PP(+2)",
        effect_jp: "打撃力(+15),射撃力(+15),法撃力(+15),打撃防御(+30),射撃防御(+30),法撃防御(+30),HP(+30),PP(+2)"
    },
    "TM05": {
        name_en: "Crack V",
        name_jp: "クラックV",
        effect_en: "MEL Pwr(+30), RNG Pwr(+30), TEC Pwr(+30), MEL Def(+50), RNG Def(+50), TEC Def(+50), HP(+50), PP(+2)",
        effect_jp: "打撃力(+30),射撃力(+30),法撃力(+30),打撃防御(+50),射撃防御(+50),法撃防御(+50),HP(+50),PP(+2)"
    },
    "TN01": {
        name_en: "Ange Glare",
        name_jp: "アンジュール・グレア",
        effect_en: "MEL Pwr(+30), MEL Def(+40), RNG Def(+20), TEC Def(+20)",
        effect_jp: "打撃力(+30),打撃防御(+40),射撃防御(+20),法撃防御(+20)"
    },
    "TN02": {
        name_en: "Veluge Glare",
        name_jp: "べルージュ・グレア",
        effect_en: "RNG Pwr(+30), MEL Def(+20), RNG Def(+40), TEC Def(+20)",
        effect_jp: "射撃力(+30),打撃防御(+20),射撃防御(+40),法撃防御(+20)"
    },
    "TN03": {
        name_en: "Dominus Glare",
        name_jp: "ドゥミヌス・グレア",
        effect_en: "TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+40)",
        effect_jp: "法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+40)"
    },
    "TN04": {
        name_en: "Fordruss Glare",
        name_jp: "フォードルス・グレア",
        effect_en: "MEL Def(+35), RNG Def(+35), TEC Def(+35), HP(+40), PP(+4)",
        effect_jp: "打撃防御(+35),射撃防御(+35),法撃防御(+35),HP(+40),PP(+4)"
    },
    "TN05": {
        name_en: "Execour Glare",
        name_jp: "エクゼクル・グレア",
        effect_en: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), MEL Def(+50), RNG Def(+50), TEC Def(+50)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),打撃防御(+50),射撃防御(+50),法撃防御(+50)"
    },
    "TN06": {
        name_en: "Mitra Glare",
        name_jp: "ミトラ・グレア",
        effect_en: "MEL Pwr(+30), RNG Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),射撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)"
    },
    "TN07": {
        name_en: "Varuna Glare",
        name_jp: "ヴァルナ・グレア",
        effect_en: "MEL Pwr(+30), TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)"
    },
    "TF01": {
        name_en: "Spirit Alpha",
        name_jp: "スピリタ・アルファ",
        effect_en: "DEX(+30),<br>PP(+3)",
        effect_jp: "技量(+30),<br>PP(+3)"
    },
    "TI01": {
        name_en: "Necky Smile",
        name_jp: "ネッキー・スマイル",
        effect_en: "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>PP(+2)",
        effect_jp: "打撃力(+5),<br>射撃力(+5),<br>法撃力(+5),<br>PP(+2)"
    },
    "TH01": {
        name_en: "Doom Break",
        name_jp: "ドゥームブレイクⅠ",
        effect_en: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>PP(+2)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>PP(+2)"
    },
    "TH02": {
        name_en: "Doom Break 2",
        name_jp: "ドゥームブレイクⅡ",
        effect_en: "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25),<br>PP(+3)",
        effect_jp: "打撃力(+25),<br>射撃力(+25),<br>法撃力(+25),<br>PP(+3)"
    },
    "TH03": {
        name_en: "Doom Break 3",
        name_jp: "ドゥームブレイクⅢ",
        effect_en: "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30),<br>PP(+4)",
        effect_jp: "打撃力(+30),<br>射撃力(+30),<br>法撃力(+30),<br>PP(+4)"
    },
    "LP01": {
        name_en: "Lesser Might I",
        name_jp: "レッサー・パワーⅠ",
        effect_en: "MEL Pwr(+5)",
        effect_jp: "打撃力(+5)"
    },
    "LP02": {
        name_en: "Lesser Might II",
        name_jp: "レッサー・パワーⅡ",
        effect_en: "MEL Pwr(+15)",
        effect_jp: "打撃力(+15)"
    },
    "LP03": {
        name_en: "Lesser Might III",
        name_jp: "レッサー・パワーⅢ",
        effect_en: "MEL Pwr(+25)",
        effect_jp: "打撃力(+25)"
    },
    "LP04": {
        name_en: "Lesser Might IV",
        name_jp: "レッサー・パワーⅣ",
        effect_en: "MEL Pwr(+30)",
        effect_jp: "打撃力(+30)"
    },
    "LP05": {
        name_en: "Lesser Might V",
        name_jp: "レッサー・パワーⅤ",
        effect_en: "MEL Pwr(+35)",
        effect_jp: "打撃力(+35)"
    },
    "LS01": {
        name_en: "Lesser Precision I",
        name_jp: "レッサー・シュートⅠ",
        effect_en: "RNG Pwr(+5)",
        effect_jp: "射撃力(+5)"
    },
    "LS02": {
        name_en: "Lesser Precision II",
        name_jp: "レッサー・シュートⅡ",
        effect_en: "RNG Pwr(+15)",
        effect_jp: "射撃力(+15)"
    },
    "LS03": {
        name_en: "Lesser Precision III",
        name_jp: "レッサー・シュートⅢ",
        effect_en: "RNG Pwr(+25)",
        effect_jp: "射撃力(+25)"
    },
    "LS04": {
        name_en: "Lesser Precision IV",
        name_jp: "レッサー・シュートⅣ",
        effect_en: "RNG Pwr(+30)",
        effect_jp: "射撃力(+30)"
    },
    "LS05": {
        name_en: "Lesser Precision V",
        name_jp: "レッサー・シュートⅤ",
        effect_en: "RNG Pwr(+35)",
        effect_jp: "射撃力(+35)"
    },
    "LT01": {
        name_en: "Lesser Casting I",
        name_jp: "レッサー・テクニックⅠ",
        effect_en: "TEC Pwr(+5)",
        effect_jp: "法撃力(+5)"
    },
    "LT02": {
        name_en: "Lesser Casting II",
        name_jp: "レッサー・テクニックⅡ",
        effect_en: "TEC Pwr(+15)",
        effect_jp: "法撃力(+15)"
    },
    "LT03": {
        name_en: "Lesser Casting III",
        name_jp: "レッサー・テクニックⅢ",
        effect_en: "TEC Pwr(+25)",
        effect_jp: "法撃力(+25)"
    },
    "LT04": {
        name_en: "Lesser Casting IV",
        name_jp: "レッサー・テクニックⅣ",
        effect_en: "TEC Pwr(+30)",
        effect_jp: "法撃力(+30)"
    },
    "LT05": {
        name_en: "Lesser Casting V",
        name_jp: "レッサー・テクニックⅤ",
        effect_en: "TEC Pwr(+35)",
        effect_jp: "法撃力(+35)"
    },
    "LM01": {
        name_en: "Lesser Stamina I",
        name_jp: "レッサー・スタミナⅠ",
        effect_en: "HP(+15)",
        effect_jp: "HP(+15)"
    },
    "LM02": {
        name_en: "Lesser Stamina II",
        name_jp: "レッサー・スタミナⅡ",
        effect_en: "HP(+35)",
        effect_jp: "HP(+35)"
    },
    "LM03": {
        name_en: "Lesser Stamina III",
        name_jp: "レッサー・スタミナⅢ",
        effect_en: "HP(+45)",
        effect_jp: "HP(+45)"
    },
    "LM04": {
        name_en: "Lesser Stamina IV",
        name_jp: "レッサー・スタミナⅣ",
        effect_en: "HP(+55)",
        effect_jp: "HP(+55)"
    },
    "LM05": {
        name_en: "Lesser Stamina V",
        name_jp: "レッサー・スタミナⅤ",
        effect_en: "HP(+65)",
        effect_jp: "HP(+65)"
    },
    "LR01": {
        name_en: "Lesser Spirit I",
        name_jp: "レッサー・スピリタⅠ",
        effect_en: "PP(+1)",
        effect_jp: "PP(+1)"
    },
    "LR02": {
        name_en: "Lesser Spirit II",
        name_jp: "レッサー・スピリタⅡ",
        effect_en: "PP(+2)",
        effect_jp: "PP(+2)"
    },
    "LR03": {
        name_en: "Lesser Spirit III",
        name_jp: "レッサー・スピリタⅢ",
        effect_en: "PP(+3)",
        effect_jp: "PP(+3)"
    },
    "LR04": {
        name_en: "Lesser Spirit IV",
        name_jp: "レッサー・スピリタⅣ",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)"
    },
    "LR05": {
        name_en: "Lesser Spirit V",
        name_jp: "レッサー・スピリタⅤ",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)"
    },
    "LP06": {
        name_en: "EV Might HP",
        name_jp: "EV・パワーHP",
        effect_en: "MEL Pwr(+35),<br>HP(+60)",
        effect_jp: "打撃力(+35),<br>HP(+60)"
    },
    "LP07": {
        name_en: "EV Might PP",
        name_jp: "EV・パワーPP",
        effect_en: "MEL Pwr(+35),<br>PP(+4)",
        effect_jp: "打撃力(+35),<br>PP(+4)"
    },
    "LS06": {
        name_en: "EV Precision HP",
        name_jp: "EV・シュートHP",
        effect_en: "RNG Pwr(+35),<br>HP(+60)",
        effect_jp: "射撃力(+35),<br>HP(+60)"
    },
    "LS07": {
        name_en: "EV Precision PP",
        name_jp: "EV・シュートPP",
        effect_en: "RNG Pwr(+35),<br>PP(+4)",
        effect_jp: "射撃力(+35),<br>PP(+4)"
    },
    "LT06": {
        name_en: "EV Casting HP",
        name_jp: "EV・テクニックHP",
        effect_en: "TEC Pwr(+35),<br>HP(+60)",
        effect_jp: "法撃力(+35),<br>HP(+60)"
    },
    "LT07": {
        name_en: "EV Casting PP",
        name_jp: "EV・テクニックPP",
        effect_en: "TEC Pwr(+35),<br>PP(+4)",
        effect_jp: "法撃力(+35),<br>PP(+4)"
    },
    "TD01": {
        name_en: "Lovey Fever",
        name_jp: "ラヴィ・フィーバー",
        effect_en: "MEL Pwr(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>HP(+10)"
    },
    "TD02": {
        name_en: "Egg Fever",
        name_jp: "エグ・フィーバー",
        effect_en: "RNG Pwr(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>HP(+10)"
    },
    "TD03": {
        name_en: "Froggy Fever",
        name_jp: "フログ・フィーバー",
        effect_en: "TEC Pwr(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>HP(+10)"
    },
    "TD04": {
        name_en: "Love Fever",
        name_jp: "ラブ・フィーバー",
        effect_en: "MEL Pwr(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>PP(+2)"
    },
    "TD05": {
        name_en: "Santa Fever",
        name_jp: "セント・フィーバー",
        effect_en: "RNG Pwr(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>PP(+2)"
    },
    "TD06": {
        name_en: "Rattan Fever",
        name_jp: "ラタン・フィーバー",
        effect_en: "TEC Pwr(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>PP(+2)"
    },
    "TD07": {
        name_en: "Summer Fever",
        name_jp: "サマー・フィーバー",
        effect_en: "TEC Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD08": {
        name_en: "Ceremo Fever",
        name_jp: "セレモ・フィーバー",
        effect_en: "MEL Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD09": {
        name_en: "Noiya Fever",
        name_jp: "ノイヤ・フィーバー",
        effect_en: "RNG Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1"
    },
    "TD0A": {
        name_en: "Torokuro Fever",
        name_jp: "トロクロ・フィーバー",
        effect_en: "DEX(+15),<br>HP(+5),<br>PP(+1)",
        effect_jp: "技量(+15),<br>HP(+5),<br>PP(+1)"
    },
    "TD0B": {
        name_en: "Sakura Fever",
        name_jp: "サクラ・フィーバー",
        effect_en: "MEL Def(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃防御(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0C": {
        name_en: "Sonic Fever",
        name_jp: "ソニック・フィーバー",
        effect_en: "MEL Pwr(+10),<br>RNG Def(+10),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>射撃防御(+10),<br>HP(+5),<br>PP(+1)"
    },
    "TD0D": {
        name_en: "Sansan Fever",
        name_jp: "サンサン・フィーバー",
        effect_en: "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+5),<br>射撃力(+5),<br>法撃力(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0E": {
        name_en: "Luna Fever",
        name_jp: "ルーナ・フィーバー",
        effect_en: "TEC Pwr(+10),<br>HP(+10),<br>PP(+1)",
        effect_jp: "法撃力(+10),<br>HP(+10),<br>PP(+1)"
    },
    "TD0F": {
        name_en: "ARKS Fever",
        name_jp: "アクス・フィーバー",
        effect_en: "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>DEX(+5),<br>PP(+5)",
        effect_jp: "打撃力(+5),<br>射撃力(+5),<br>法撃力(+5),<br>技量(+5),<br>PP(+5)"
    },
    "UA01": {
        name_en: "Flict Arma",
        name_jp: "フリクト・アルマ",
        effect_en: "MEL Pwr(+20),<br>PP(+3)",
        effect_jp: "打撃力(+20),<br>PP(+3)"
    },
    "UA11": {
        name_en: "Flict Tyro",
        name_jp: "フリクト・ティロ",
        effect_en: "RNG Pwr(+20),<br>PP(+3)",
        effect_jp: "射撃力(+20),<br>PP(+3)"
    },
    "UA21": {
        name_en: "Flict Magia",
        name_jp: "フリクト・マギア",
        effect_en: "TEC Pwr(+20),<br>PP(+3)",
        effect_jp: "法撃力(+20),<br>PP(+3)"
    },
    "UB01": {
        name_en: "Alter Arma",
        name_jp: "アルター・アルマ",
        effect_en: "MEL Pwr(+20),<br>HP(+30)",
        effect_jp: "打撃力(+20),<br>HP(+30)"
    },
    "UB11": {
        name_en: "Alter Tyro",
        name_jp: "アルター・ティロ",
        effect_en: "RNG Pwr(+20),<br>HP(+30)",
        effect_jp: "射撃力(+20),<br>HP(+30)"
    },
    "UB21": {
        name_en: "Alter Magia",
        name_jp: "アルター・マギア",
        effect_en: "TEC Pwr(+20),<br>HP(+30)",
        effect_jp: "法撃力(+20),<br>HP(+30)"
    },
    "UC01": {
        name_en: "Mark Joy",
        name_jp: "マーク・ジョイオ",
        effect_en: "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40),<br>HP(+50)",
        effect_jp: "打撃力(+40),<br>射撃力(+40),<br>法撃力(+40),<br>HP(+50)"
    },
    "UC11": {
        name_en: "Mark Courage",
        name_jp: "マーク・カレジナ",
        effect_en: "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40),<br>PP(+5)",
        effect_jp: "打撃力(+40),<br>射撃力(+40),<br>法撃力(+40),<br>PP(+5)"
    },
    "UC21": {
        name_en: "Mark Anger",
        name_jp: "マーク・アンガル",
        effect_en: "MEL Pwr(+50),<br>RNG Pwr(+50),<br>TEC Pwr(+50),<br>DEX(+40)",
        effect_jp: "打撃力(+50),<br>射撃力(+50),<br>法撃力(+50),<br>技量(+40)"
    },
    "UC31": {
        name_en: "Mark Grief",
        name_jp: "マーク・グリフ",
        effect_en: "MEL Def(+50),<br>RNG Def(+50),<br>TEC Def(+50),<br>HP(+80)",
        effect_jp: "打撃防御(+50),<br>射撃防御(+50),<br>法撃防御(+50),<br>HP(+80)"
    },
    "ID01": {
        name_en: "Divine Will",
        name_jp: "ディバインウィル",
        effect_en: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), PP(+5)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),PP(+5)"
    },
    "ID02": {
        name_en: "Divine Order",
        name_jp: "ディバイン・オーダー",
        effect_en: "MEL Pwr(+50), RNG Pwr(+50), TEC Pwr(+50), HP(+20), PP(+10)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),HP(+20),PP(+10)"
    },
    "IE01": {
        name_en: "Exceed Energy",
        name_jp: "イクシード・エナジー",
        effect_en: "MEL Pwr(+50), RNG Pwr(+50), TEC Pwr(+50), DEX(+20), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+5)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),技量(+20),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+5)"
    },
    "YA01": {
        name_en: "Sentence Might",
        name_jp: "センテンス・パワー",
        effect_en: "MEL Pwr(+20),<br>PP(+4)",
        effect_jp: "打撃力(+20),<br>PP(+4)"
    },
    "YA05": {
        name_en: "Sentence Arma",
        name_jp: "センテンス・アルマ",
        effect_en: "MEL Pwr(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "打撃力(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA11": {
        name_en: "Sentence Precision",
        name_jp: "センテンス・シュート",
        effect_en: "RNG Pwr(+20),<br>PP(+4)",
        effect_jp: "射撃力(+20),<br>PP(+4)"
    },
    "YA15": {
        name_en: "Sentence Tyro",
        name_jp: "センテンス・ティロ",
        effect_en: "RNG Pwr(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "射撃力(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA21": {
        name_en: "Sentence Tech",
        name_jp: "センテンス・テクニック",
        effect_en: "TEC Pwr(+20),<br>PP(+4)",
        effect_jp: "法撃力(+20),<br>PP(+4)"
    },
    "YA25": {
        name_en: "Sentence Magia",
        name_jp: "センテンス・マギア",
        effect_en: "TEC Pwr(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "法撃力(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA31": {
        name_en: "Sentence Triple",
        name_jp: "センテンス・テクニック",
        effect_en: "MEL Pwr(+30),RNG Pwr(+30),TEC Pwr(+30)",
        effect_jp: "打撃力(+30),射撃力(+30),法撃力(+30)"
    },
    "YB41": {
        name_en: "Phrase Reduce",
        name_jp: "フレイズ・リデュース",
        effect_en: "PP consumption decreases by 4%.",
        effect_jp: "PP消費量-4%。"
    },
    "YB51": {
        name_en: "Phrase Decay",
        name_jp: "フレイズ・ディケイ",
        effect_en: "Boosts damage inflicted to enemies<br>affected by Jellen by 5%.",
        effect_jp: "ジェルン状態の敵への威力+5%。"
    },
    "YB01": {
        name_en: "Phrase Recovery",
        name_jp: "フレイズ・レスポンス",
        effect_en: "+5% PP Recovery Rate.",
        effect_jp: "攻撃時PP回復+5%。"
    },
    "YB11": {
        name_en: "Phrase Weak",
        name_jp: "フレイズ・ウィーク",
        effect_en: "+2% Elemental Weakness damage.",
        effect_jp: "弱点属性威力+2%。"
    },
    "YB21": {
        name_en: "Phrase Response",
        name_jp: "フレイズ・レスポンス",
        effect_en: "+5% ATK PP Recovery.",
        effect_jp: "攻撃時PP回復+5%。"
    },
    "YB31": {
        name_en: "Phrase Chase",
        name_jp: "フレイズ・チェイス",
        effect_en: "+5% damage against enemies with Status Effects.",
        effect_jp: "状態異常の敵への威力+5%。"
    },
    "VA01": {
        name_en: "Lucky Charm I",
        name_jp: "ラッキーライズⅠ",
        effect_en: "Rare drop rate increases +5%.",
        effect_jp: "レアドロップ倍率が増加を5％。"
    },
    "VA02": {
        name_en: "Lucky Charm II",
        name_jp: "ラッキーライズⅡ",
        effect_en: "Rare drop rate increases +7%.",
        effect_jp: "レアドロップ倍率が増加を7％。"
    },
    "VA03": {
        name_en: "Lucky Charm III",
        name_jp: "ラッキーライズⅢ",
        effect_en: "Rare drop rate increases +10%.",
        effect_jp: "レアドロップ倍率が増加を10％。"
    },
    "VB01": {
        name_en: "Meseta Fever I",
        name_jp: "メセタフィーバーⅠ",
        effect_en: "Meseta drop increase +5%.",
        effect_jp: "メセタドロップ率が5％増加。"
    },
    "VZ02": {
        name_en: "Meseta Fever II",
        name_jp: "メセタフィーバーⅡ",
        effect_en: "Meseta drop increase +10%.",
        effect_jp: "メセタドロップ率が10％増加。"
    },
    "VB03": {
        name_en: "Meseta Fever III",
        name_jp: "メセタフィーバーⅢ",
        effect_en: "Meseta drop increase +15%.",
        effect_jp: "メセタドロップ率が15％増加。"
    },
    "VC01": {
        name_en: "Increased EXP I",
        name_jp: "ＥＸＰブーストⅠ",
        effect_en: "Earned EXP increases +5%.",
        effect_jp: "取得する経験値が増加を5％。"
    },
    "VC02": {
        name_en: "Increased EXP II",
        name_jp: "ＥＸＰブーストⅡ",
        effect_en: "Earned EXP increases +7%.",
        effect_jp: "取得する経験値が増加を7％。"
    },
    "VC03": {
        name_en: "Increased EXP III",
        name_jp: "ＥＸＰブーストⅢ",
        effect_en: "Earned EXP increases +10%.",
        effect_jp: "取得する経験値が増加を10％。"
    },
    "VD01": {
        name_en: "Temptation",
        name_jp: "テンプテーション",
        effect_en: "Rare drop rate increases +10%.",
        effect_jp: "レアドロップ倍率が増加を10％。"
    },
    "VE01": {
        name_en: "Alternate History",
        name_jp: "アナザーヒストリー",
        effect_en: "Earned EXP increases +10%.",
        effect_jp: "取得する経験値が増加を10％。"
    },
    "VF01": {
        name_en: "Fresh Sign",
        name_jp: "フレッシュ・サイン",
        effect_en: "Earned EXP increases 30% when under level 30.",
        effect_jp: "Lv30に到達するまで取得する経験値が増加するを30％。"
    },
    "VH01": {
        name_en: "Ultimate Buster",
        name_jp: "アルティメットバスター",
        effect_en: "Damage to Tainted increases 10%. No effect for 13* Weapons",
        effect_jp: "世壊種エネミーに与えるダメージが10%上昇。"
    },
    "VH11": {
        name_en: "Omega Buster",
        name_jp: "オメガバスター",
        effect_en: "Boosts damage against Demons by 3%.",
        effect_jp: "魔物へのダメージは10％増加する。"
    },
    "PA01": {
        name_en: "Ripper/Ltn. Weak",
        name_jp: "リーパー／雷弱点",
        effect_en: "Boost damage against enemies weak to Lightning. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "雷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PB02": {
        name_en: "Ripper/Fire Weak",
        name_jp: "リーパー／火弱点",
        effect_en: "Boost damage against enemies weak to Fire. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "火弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PC03": {
        name_en: "Ripper/Ice Weak",
        name_jp: "リーパー／氷弱点",
        effect_en: "Boost damage against enemies weak to Ice. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "氷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PD04": {
        name_en: "Ripper/Wind Weak",
        name_jp: "リーパー／風弱点",
        effect_en: "Boost damage against enemies weak to Wind. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "風弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PE05": {
        name_en: "Ripper/Light Weak",
        name_jp: "リーパー／光弱点",
        effect_en: "Boost damage against enemies weak to Light. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "光弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PF06": {
        name_en: "Ripper/Dark Weak",
        name_jp: "リーパー／闇弱点",
        effect_en: "Boost damage against enemies weak to Dark. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "闇弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "VQ01": {
        name_en: "Slayer/Armor Type",
        name_jp: "スレイヤー／機甲種",
        effect_en: "Boost damage against Lillipa Mechs. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "機甲種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "VQ02": {
        name_en: "Slayer/Beast Type",
        name_jp: "スレイヤー／野獣種",
        effect_en: "Boost damage against Naberius Natives. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "野獣種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PJ13": {
        name_en: "Slayer/Ocean Type",
        name_jp: "スレイヤー／海王種",
        effect_en: "Boost damage against Oceanids. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "海王種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PK14": {
        name_en: "Slayer/Kuronite Type",
        name_jp: "スレイヤー／黒の民",
        effect_en: "Boost damage against Kuronites. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "黒の民のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PL15": {
        name_en: "Slayer/Phantoms Type",
        name_jp: "スレイヤー／幻創種",
        effect_en: "Boost damage against Phantoms. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "幻創種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PM16": {
        name_en: "Slayer/Darkers",
        name_jp: "スレイヤー／ダーカー",
        effect_en: "Boost damage against Darkers. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "ダーカー種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PN17": {
        name_en: "Slayer/Dragonkin",
        name_jp: "スレイヤー／龍族種",
        effect_en: "Boost damage against Dragonkin. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "龍族種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "PO18": {
        name_en: "Slayer/Luminmech",
        name_jp: "スレイヤー／閃機種",
        effect_en: "Boost damage against Luminmech. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "閃機種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。"
    },
    "VJ01": {
        name_en: "Soul Catalyst",
        name_jp: "ソール・カタリスト",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)"
    },
    "VJ02": {
        name_en: "Factor Catalyst",
        name_jp: "ファクター・カタリスト",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)"
    },
    "VJ03": {
        name_en: "Reverie Catalyst",
        name_jp: "レヴリー・カタリスト",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)"
    },
    "VK03": {
        name_en: "Polytan Smile",
        name_jp: "ポリタン・スマイル",
        effect_en: "Adds 25 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が25増加する。"
    },
    "VK04": {
        name_en: "Arkuma Smile",
        name_jp: "アークマ・スマイル",
        effect_en: "Adds 25 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が25増加する。"
    },
    "VK01": {
        name_en: "Empy Embrace",
        name_jp: "エンぺ・エンブレイス",
        effect_en: "Weapon Enhancement EXP +90.",
        effect_jp: "新世武器強化時の経験値が90増加する。"
    },
    "VO01": {
        name_en: "Guidance Trainer",
        name_jp: "錬成の導き",
        effect_en: "Increase the augmentation success rate by 5%.",
        effect_jp: "特殊能力の成功率を5％上昇させる。"
    },
    "VK05": {
        name_en: "Weapon Booster",
        name_jp: "ＮＴウェポンブースト",
        effect_en: "Weapon Enhancement EXP +800.",
        effect_jp: "新世武器強化時の経験値が800増加する。"
    },
    "WA01": {
        name_en: "Photon Collection",
        name_jp: "フォトンコレクト",
        effect_en: "Boosts status effect affix rate.",
        effect_jp: "状態異常系特殊能力のランクアップ時に成功率を上昇させる。"
    },
    "XA01": {
        name_en: "Soul Receptor",
        name_jp: "ソールレセプター",
        effect_en: "Greatly increases Soul affix rate.",
        effect_jp: "ソール系特殊能力の合成成功率を大幅に上昇。"
    },
    "XB01": {
        name_en: "Extreceptor",
        name_jp: "エクストレセプター",
        effect_en: "Greatly increases Flict and Alter affix rate.<br>ALL(+10)",
        effect_jp: "アルター・フリクト系と特定の特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XC01": {
        name_en: "Gift Receptor",
        name_jp: "ギフトレセプター",
        effect_en: "Allows transfer of Lucky Rise, EXP Boost, and Meseta Fever.",
        effect_jp: "ギフト系特殊能力の引き継ぎが可能になる"
    },
    "XD01": {
        name_en: "Sentence Receptor",
        name_jp: "センテンスレセプター",
        effect_en: "Boosts transfer of Sentence affixes.<br>ALL(+10)",
        effect_jp: "センテンス系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XE01": {
        name_en: "Phrase Receptor",
        name_jp: "フレイズレセプター",
        effect_en: "Boosts transfer of Phrase affixes.<br>ALL(+10)",
        effect_jp: "フレイズ系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XF01": {
        name_en: "Factor Receptor",
        name_jp: "ファクターレセプター",
        effect_en: "Boosts Factor-type ability transfer rates.<br>ALL(+10)",
        effect_jp: "ファクター系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XG01": {
        name_en: "Mark Receptor",
        name_jp: "マークレセプター",
        effect_en: "Allows transfer Mark-type ability.<br>ALL(+10)",
        effect_jp: "マーク系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XJ01": {
        name_en: "Divine Receptor",
        name_jp: "ディバインレセプター",
        effect_en: "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)",
        effect_jp: "ディバイン系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XH01": {
        name_en: "Catalyst Receptor",
        name_jp: "カタリストレセプター",
        effect_en: "Greatly increases affix rate of Catalyst-type ability.<br>ALL(+10)",
        effect_jp: "カタリスト系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)"
    },
    "XI30": {
        name_en: "Attack Receptor",
        name_jp: "アタックレセプター",
        effect_en: "Greatly increases affix rate of Might, Precision, Casting, and Deftness.<br>ALL(+5)",
        effect_jp: "パワー・シュート・テクニック系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)"
    },
    "XI31": {
        name_en: "Guard Receptor",
        name_jp: "ガードレセプター",
        effect_en: "Greatly increases affix rate of Genius, Toughness, and Reflex.<br>ALL(+5)",
        effect_jp: "マインド・ボディ・リアクト系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)"
    },
    "XI32": {
        name_en: "Photon Receptor",
        name_jp: "フォトンレセプター",
        effect_en: "Greatly increases affix rate of Stamina and Spirit.<br>ALL(+5)",
        effect_jp: "スタミナ・スピリタ系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)"
    },
    "XI02": {
        name_en: "Stamina Boost",
        name_jp: "スタミナ・ブースト",
        effect_en: "HP(+45)",
        effect_jp: "HP(+45)"
    },
    "XI03": {
        name_en: "Spirit Boost",
        name_jp: "スピリタ・ブースト",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)"
    },
    "XI04": {
        name_en: "Might Boost",
        name_jp: "パワー・ブースト",
        effect_en: "MEL Pwr(+25)",
        effect_jp: "打撃力(+25)"
    },
    "XI05": {
        name_en: "Precision Boost",
        name_jp: "シュート・ブースト",
        effect_en: "RNG Pwr(+25)",
        effect_jp: "射撃力(+25)"
    },
    "XI06": {
        name_en: "Casting Boost",
        name_jp: "テクニック・ブースト",
        effect_en: "TEC Pwr(+25)",
        effect_jp: "法撃力(+25)"
    },
    "XI0a": {
        name_en: "Tenora Boost",
        name_jp: "テノラ・ブースト",
        effect_en: "MEL Pwr(+35)",
        effect_jp: "打撃力(+35)"
    },
    "XI0b": {
        name_en: "GRM Boost",
        name_jp: "ＧＲＭ・ブースト",
        effect_en: "RNG Pwr(+35)",
        effect_jp: "射撃力(+35)"
    },
    "XI0c": {
        name_en: "Yohmei Boost",
        name_jp: "ヨウメイ・ブースト",
        effect_en: "TEC Pwr(+35)",
        effect_jp: "法撃力(+35)"
    },
    "XI10": {
        name_en: "Noble Stamina",
        name_jp: "ノーブル・スタミナ",
        effect_en: "HP(+50),PP(+3)",
        effect_jp: "HP(+50),PP(+3)"
    },
    "XI14": {
        name_en: "Elegant Stamina",
        name_jp: "エレガント・スタミナ",
        effect_en: "HP(+70),PP(+4)",
        effect_jp: "HP(+70),PP(+4)"
    },
    "XI51": {
        name_en: "Grace Stamina",
        name_jp: "グレース・スタミナ",
        effect_en: "HP(+80),PP(+5)",
        effect_jp: "HP(+80),PP(+5)"
    },
    "XI61": {
        name_en: "Grand Stamina",
        name_jp: "グランド・スタミナ",
        effect_en: "HP(+100),PP(+6)",
        effect_jp: "HP(+100),PP(+6)"
    },
    "XI07": {
        name_en: "Noble Might",
        name_jp: "ノーブル・パワー",
        effect_en: "MEL Pwr(+30),PP(+3)",
        effect_jp: "打撃力(+30),PP(+3)"
    },
    "XI11": {
        name_en: "Elegant Might",
        name_jp: "エレガント・パワー",
        effect_en: "MEL Pwr(+40),PP(+4)",
        effect_jp: "打撃力(+40),PP(+4)"
    },
    "XI52": {
        name_en: "Grace Might",
        name_jp: "グレース・パワー",
        effect_en: "MEL Pwr(+50),PP(+5)",
        effect_jp: "打撃力(+50),PP(+5)"
    },
    "XI62": {
        name_en: "Grand Might",
        name_jp: "グランド・パワー",
        effect_en: "MEL Pwr(+60),HP(+20),PP(+5)",
        effect_jp: "打撃力(+60),HP(+20),PP(+5)"
    },
    "XI08": {
        name_en: "Noble Precision",
        name_jp: "ノーブル・シュート",
        effect_en: "RNG Pwr(+30),PP(+3)",
        effect_jp: "射撃力(+30),PP(+3)"
    },
    "XI12": {
        name_en: "Elegant Precision",
        name_jp: "エレガント・シュート",
        effect_en: "RNG Pwr(+40),PP(+4)",
        effect_jp: "射撃力(+40),PP(+4)"
    },
    "XI53": {
        name_en: "Grace Precision",
        name_jp: "グレース・シュート",
        effect_en: "RNG Pwr(+50),PP(+5)",
        effect_jp: "射撃力(+50),PP(+5)"
    },
    "XI63": {
        name_en: "Grand Precision",
        name_jp: "グランド・シュート",
        effect_en: "RNG Pwr(+60),HP(+20),PP(+5)",
        effect_jp: "射撃力(+60),HP(+20),PP(+5)"
    },
    "XI09": {
        name_en: "Noble Casting",
        name_jp: "ノーブル・テクニック",
        effect_en: "TEC Pwr(+30),PP(+3)",
        effect_jp: "法撃力(+30),PP(+3)"
    },
    "XI13": {
        name_en: "Elegant Casting",
        name_jp: "エレガント・テクニック",
        effect_en: "TEC Pwr(+40),PP(+4)",
        effect_jp: "法撃力(+40),PP(+4)"
    },
    "XI54": {
        name_en: "Grace Casting",
        name_jp: "グレース・テクニック",
        effect_en: "TEC Pwr(+50),PP(+5)",
        effect_jp: "法撃力(+50),PP(+5)"
    },
    "XI64": {
        name_en: "Grand Casting",
        name_jp: "グランド・テクニック",
        effect_en: "TEC Pwr(+60),HP(+20),PP(+5)",
        effect_jp: "法撃力(+50),HP(+20),PP(+5)"
    },
    "XI60": {
        name_en: "Grace Spirit",
        name_jp: "グランド・スピリタ",
        effect_en: "PP(+15)",
        effect_jp: "PP(+15)"
    },
    "XI20": {
        name_en: "Offense Boost",
        name_jp: "オフェンス・ブースト",
        effect_en: "MEL Pwr(+15),RNG Pwr(+15),TEC Pwr(+15),DEX(+25),PP(+1)",
        effect_jp: "打撃力(+15),射撃力(+15),法撃力(+15),技量(+25),PP(+1)"
    },
    "XI22": {
        name_en: "Attack Boost",
        name_jp: "アタックブースト",
        effect_en: "MEL Pwr(+25),RNG Pwr(+25),TEC Pwr(+25),DEX(+40),PP(+3)",
        effect_jp: "打撃力(+25),射撃力(+25),法撃力(+25),技量(+40),PP(+3)"
    },
    "XI21": {
        name_en: "Defense Boost",
        name_jp: "ディフェンス・ブースト",
        effect_en: "MEL Def(+25),RNG Def(+25),TEC Def(+25),HP(+55),PP(+1)",
        effect_jp: "打撃防御(+25),射撃防御(+25),法撃防御(+25),HP(+55),PP(+1)"
    },
    "XI23": {
        name_en: "Guard Boost",
        name_jp: "ガードブースト",
        effect_en: "MEL Def(+35),RNG Def(+35),TEC Def(+35),HP(+75),PP(+3)",
        effect_jp: "打撃防御(+35),射撃防御(+35),法撃防御(+35),HP(+75),PP(+3)"
    },
    "ZA01": {
        name_en: "Junk A",
        name_jp: "ジャンクA",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZB01": {
        name_en: "Junk B",
        name_jp: "ジャンクB",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZC01": {
        name_en: "Junk C",
        name_jp: "ジャンクC",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZD01": {
        name_en: "Junk D",
        name_jp: "ジャンクD",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZE01": {
        name_en: "Junk E",
        name_jp: "ジャンクE",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZF01": {
        name_en: "Junk F",
        name_jp: "ジャンクF",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZG01": {
        name_en: "Junk G",
        name_jp: "ジャンクG",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZH01": {
        name_en: "Junk H",
        name_jp: "ジャンクH",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "ZI01": {
        name_en: "Junk I",
        name_jp: "ジャンクI",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。"
    },
    "LA99": {
        name_en: "S1:Junk",
        name_jp: "S1:ジャンク",
        effect_en: "Represents any S1 ability.",
        effect_jp: "任意のS1能力を表します。"
    },
    "LB99": {
        name_en: "S2:Junk",
        name_jp: "S2:ジャンク",
        effect_en: "Represents any S2 ability.",
        effect_jp: "任意のS2能力を表します。"
    },
    "LC99": {
        name_en: "S3:Junk",
        name_jp: "S3:ジャンク",
        effect_en: "Represents any S3 ability.",
        effect_jp: "任意のS3能力を表します。"
    },
    "LD99": {
        name_en: "S4:Junk",
        name_jp: "S4:ジャンク",
        effect_en: "Represents any S4 ability.",
        effect_jp: "任意のS4能力を表します。"
    },
    "LE99": {
        name_en: "S5:Junk",
        name_jp: "S5:ジャンク",
        effect_en: "Represents any S5 ability.",
        effect_jp: "任意のS5能力を表します。"
    },
    "LF99": {
        name_en: "S6:Junk",
        name_jp: "S6:ジャンク",
        effect_en: "Represents any S6 ability.",
        effect_jp: "任意のS6能力を表します。"
    },
    "LG99": {
        name_en: "S7:Junk",
        name_jp: "S7:ジャンク",
        effect_en: "Represents any S7 ability.",
        effect_jp: "任意のS7能力を表します。"
    },
    "LH99": {
        name_en: "S8:Junk",
        name_jp: "S8:ジャンク",
        effect_en: "Represents any S8 ability.",
        effect_jp: "任意のS8能力を表します。"
    }
});

var module = module || undefined
if (module && module.exports) {
    module.exports.lang = lang
}
