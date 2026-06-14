Installing config dependencies...
Installed config dependencies: @pnpm/plugin-types-fixer@0.1.0

[31mInvalid Option: [39mInvalid option "[{"ignoreValues":["0","inherit","transparent","initial","none","unset"],"message":"Use design tokens for ${property}. See https://fnc314.github.io/docs/design-tokens/ for guidance.","properties":["/color/","fill","stroke","border-color","padding","margin","gap","font-size","line-height","font-weight","border-radius"],"expandOf":{"padding":["padding","padding-left","padding-right","padding-top","padding-bottom"],"margin":["margin","margin-left","margin-right","margin-top","margin-bottom"]}}]" for rule "scale-unlimited/declaration-strict-value"

src/index.css
   [2m6:3[22m  [33m[33m⚠[39m  Expected custom property to come before declaration                   [2morder/order[22m
  [2m17:3[22m  [33m[33m⚠[39m  Expected "box-sizing" to come before "padding"                        [2morder/properties-order[22m
  [2m30:3[22m  [33m[33m⚠[39m  Expected "margin" to come before "writing-mode"                       [2morder/properties-order[22m
  [2m32:3[22m  [33m[33m⚠[39m  Expected "padding" to come before "scroll-padding-bottom"             [2morder/properties-order[22m
  [2m33:3[22m  [33m[33m⚠[39m  Expected "background-color" to come before "padding"                  [2morder/properties-order[22m
  [2m39:3[22m  [33m[33m⚠[39m  Expected "display" to come before "min-height"                        [2morder/properties-order[22m
  [2m44:3[22m  [33m[33m⚠[39m  Expected "grid-template-columns" to come before "grid-template-rows"  [2morder/properties-order[22m
  [2m45:3[22m  [33m[33m⚠[39m  Expected "container-type" to come before "grid-template-columns"      [2morder/properties-order[22m
  [2m46:3[22m  [33m[33m⚠[39m  Expected "color" to come before "container-type"                      [2morder/properties-order[22m
  [2m47:3[22m  [33m[33m⚠[39m  Expected "background-color" to come before "color"                    [2morder/properties-order[22m
  [2m56:5[22m  [33m[33m⚠[39m  Expected "color" to come before "overflow-x"                          [2morder/properties-order[22m
  [2m57:5[22m  [33m[33m⚠[39m  Expected "background-color" to come before "color"                    [2morder/properties-order[22m
  [2m61:7[22m  [33m[33m⚠[39m  Expected "height" to come before "width"                              [2morder/properties-order[22m
  [2m64:2[22m  [33m[33m⚠[39m  Insert "⏎"                                                            [2mprettier/prettier[22m

[33m⚠[39m 14 problems ([31m0 errors[39m, [33m14 warnings[39m)
  13 warnings potentially fixable with the "--fix" option.

[4m1 source checked
[24m[31m  /Users/fnc314/Code/websites/fnc314.github.io/src/index.css
[39m
[4m14 warnings found
[24m[2m  order/order: 1 (maybe fixable)
[22m[2m  order/properties-order: 12 (maybe fixable)
[22m[2m  prettier/prettier: 1
[22m
