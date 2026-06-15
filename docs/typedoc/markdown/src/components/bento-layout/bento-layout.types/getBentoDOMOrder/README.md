<html><head></head><body>[**@fnc314/com.fnc314.website v2.0.0**](../../../../../README.md)

---

[@fnc314/com.fnc314.website](../../../../../README.md) / [src/components/bento-layout/bento-layout.types](../README.md) / getBentoDOMOrder

# Function: getBentoDOMOrder()

&gt; **getBentoDOMOrder**(`breakpoint`: [`Breakpoint`](../../../../types/breakpoints/Breakpoint/README.md)): [`BentoBoxType`](../BentoBoxType/README.md)[]

Defined in: [src/components/bento-layout/bento-layout.types.ts:140](https://github.com/fnc314/fnc314.github.io/blob/feature/bento-ui/src/components/bento-layout/bento-layout.types.ts#L140)

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

[`Breakpoint`](../../../../types/breakpoints/Breakpoint/README.md)

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
