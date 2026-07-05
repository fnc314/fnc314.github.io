<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.5**](../../../README.md)

---

[@fnc314/com.fnc314.website](../../../README.md) / [@fnc314/packages.components](../README.md) / getBentoDOMOrder

# Function: getBentoDOMOrder()

&gt; **getBentoDOMOrder**(`breakpoint`: `BreakpointLabel`): [`BentoBoxType`](../BentoBoxType/README.md)[]

Defined in: [packages/components/lib/bento-layout/bento-layout.types.ts:147](https://github.com/fnc314/fnc314.github.io/blob/094ccf5429ad77a6c905bda8c11a637eab1397a6/packages/components/lib/bento-layout/bento-layout.types.ts#L147)

Determines the logical DOM order for bento box types based on grid placement.
Reading order follows Top-to-Bottom, then Start-to-End (Leading-to-Trailing).

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`breakpoint`

</td>
<td>

`BreakpointLabel`

</td>
<td>

The current active breakpoint.

</td>
</tr>
</tbody>
</table>

## Returns

[`BentoBoxType`](../BentoBoxType/README.md)[]

An array of [BentoBoxType](../BentoBoxType/README.md) in the appropriate order for the DOM.
</body></html>
