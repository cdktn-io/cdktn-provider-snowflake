# `streamOnExternalTable` Submodule <a name="`streamOnExternalTable` Submodule" id="@cdktn/provider-snowflake.streamOnExternalTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamOnExternalTable <a name="StreamOnExternalTable" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table snowflake_stream_on_external_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTable(scope: Construct, id: string, config: StreamOnExternalTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig">StreamOnExternalTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig">StreamOnExternalTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putAt">putAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putBefore">putBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetAt">resetAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetBefore">resetBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetCopyGrants">resetCopyGrants</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetInsertOnly">resetInsertOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAt` <a name="putAt" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putAt"></a>

```typescript
public putAt(value: StreamOnExternalTableAt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putAt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt">StreamOnExternalTableAt</a>

---

##### `putBefore` <a name="putBefore" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putBefore"></a>

```typescript
public putBefore(value: StreamOnExternalTableBefore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putBefore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore">StreamOnExternalTableBefore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamOnExternalTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts">StreamOnExternalTableTimeouts</a>

---

##### `resetAt` <a name="resetAt" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetAt"></a>

```typescript
public resetAt(): void
```

##### `resetBefore` <a name="resetBefore" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetBefore"></a>

```typescript
public resetBefore(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCopyGrants` <a name="resetCopyGrants" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetCopyGrants"></a>

```typescript
public resetCopyGrants(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsertOnly` <a name="resetInsertOnly" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetInsertOnly"></a>

```typescript
public resetInsertOnly(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StreamOnExternalTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isConstruct"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

streamOnExternalTable.StreamOnExternalTable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isTerraformElement"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

streamOnExternalTable.StreamOnExternalTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isTerraformResource"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

streamOnExternalTable.StreamOnExternalTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.generateConfigForImport"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

streamOnExternalTable.StreamOnExternalTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StreamOnExternalTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamOnExternalTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamOnExternalTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StreamOnExternalTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.at">at</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference">StreamOnExternalTableAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.before">before</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference">StreamOnExternalTableBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList">StreamOnExternalTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList">StreamOnExternalTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.stale">stale</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference">StreamOnExternalTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.atInput">atInput</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt">StreamOnExternalTableAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.beforeInput">beforeInput</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore">StreamOnExternalTableBefore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.copyGrantsInput">copyGrantsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.externalTableInput">externalTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.insertOnlyInput">insertOnlyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts">StreamOnExternalTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.externalTable">externalTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.insertOnly">insertOnly</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `at`<sup>Required</sup> <a name="at" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.at"></a>

```typescript
public readonly at: StreamOnExternalTableAtOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference">StreamOnExternalTableAtOutputReference</a>

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.before"></a>

```typescript
public readonly before: StreamOnExternalTableBeforeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference">StreamOnExternalTableBeforeOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.describeOutput"></a>

```typescript
public readonly describeOutput: StreamOnExternalTableDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList">StreamOnExternalTableDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.showOutput"></a>

```typescript
public readonly showOutput: StreamOnExternalTableShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList">StreamOnExternalTableShowOutputList</a>

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.timeouts"></a>

```typescript
public readonly timeouts: StreamOnExternalTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference">StreamOnExternalTableTimeoutsOutputReference</a>

---

##### `atInput`<sup>Optional</sup> <a name="atInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.atInput"></a>

```typescript
public readonly atInput: StreamOnExternalTableAt;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt">StreamOnExternalTableAt</a>

---

##### `beforeInput`<sup>Optional</sup> <a name="beforeInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.beforeInput"></a>

```typescript
public readonly beforeInput: StreamOnExternalTableBefore;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore">StreamOnExternalTableBefore</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `copyGrantsInput`<sup>Optional</sup> <a name="copyGrantsInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.copyGrantsInput"></a>

```typescript
public readonly copyGrantsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `externalTableInput`<sup>Optional</sup> <a name="externalTableInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.externalTableInput"></a>

```typescript
public readonly externalTableInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insertOnlyInput`<sup>Optional</sup> <a name="insertOnlyInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.insertOnlyInput"></a>

```typescript
public readonly insertOnlyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamOnExternalTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts">StreamOnExternalTableTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `copyGrants`<sup>Required</sup> <a name="copyGrants" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `externalTable`<sup>Required</sup> <a name="externalTable" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.externalTable"></a>

```typescript
public readonly externalTable: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insertOnly`<sup>Required</sup> <a name="insertOnly" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.insertOnly"></a>

```typescript
public readonly insertOnly: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamOnExternalTableAt <a name="StreamOnExternalTableAt" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

const streamOnExternalTableAt: streamOnExternalTable.StreamOnExternalTableAt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.offset">offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.statement">statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.stream">stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.timestamp">timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#offset StreamOnExternalTable#offset}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#statement StreamOnExternalTable#statement}

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#stream StreamOnExternalTable#stream}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#timestamp StreamOnExternalTable#timestamp}

---

### StreamOnExternalTableBefore <a name="StreamOnExternalTableBefore" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

const streamOnExternalTableBefore: streamOnExternalTable.StreamOnExternalTableBefore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.offset">offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.statement">statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.stream">stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.timestamp">timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#offset StreamOnExternalTable#offset}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#statement StreamOnExternalTable#statement}

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#stream StreamOnExternalTable#stream}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#timestamp StreamOnExternalTable#timestamp}

---

### StreamOnExternalTableConfig <a name="StreamOnExternalTableConfig" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

const streamOnExternalTableConfig: streamOnExternalTable.StreamOnExternalTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the stream. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.externalTable">externalTable</a></code> | <code>string</code> | Specifies an identifier for the external table the stream will monitor. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the stream. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.at">at</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt">StreamOnExternalTableAt</a></code> | at block. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.before">before</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore">StreamOnExternalTableBefore</a></code> | before block. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktn.IResolvable</code> | (Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#id StreamOnExternalTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.insertOnly">insertOnly</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this is an insert-only stream. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts">StreamOnExternalTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#database StreamOnExternalTable#database}

---

##### `externalTable`<sup>Required</sup> <a name="externalTable" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.externalTable"></a>

```typescript
public readonly externalTable: string;
```

- *Type:* string

Specifies an identifier for the external table the stream will monitor.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./external_table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#external_table StreamOnExternalTable#external_table}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#name StreamOnExternalTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#schema StreamOnExternalTable#schema}

---

##### `at`<sup>Optional</sup> <a name="at" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.at"></a>

```typescript
public readonly at: StreamOnExternalTableAt;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt">StreamOnExternalTableAt</a>

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#at StreamOnExternalTable#at}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.before"></a>

```typescript
public readonly before: StreamOnExternalTableBefore;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore">StreamOnExternalTableBefore</a>

before block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#before StreamOnExternalTable#before}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#comment StreamOnExternalTable#comment}

---

##### `copyGrants`<sup>Optional</sup> <a name="copyGrants" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

(Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause.

This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#copy_grants StreamOnExternalTable#copy_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#id StreamOnExternalTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insertOnly`<sup>Optional</sup> <a name="insertOnly" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.insertOnly"></a>

```typescript
public readonly insertOnly: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this is an insert-only stream.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#insert_only StreamOnExternalTable#insert_only}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamOnExternalTableTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts">StreamOnExternalTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#timeouts StreamOnExternalTable#timeouts}

---

### StreamOnExternalTableDescribeOutput <a name="StreamOnExternalTableDescribeOutput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutput.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

const streamOnExternalTableDescribeOutput: streamOnExternalTable.StreamOnExternalTableDescribeOutput = { ... }
```


### StreamOnExternalTableShowOutput <a name="StreamOnExternalTableShowOutput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutput.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

const streamOnExternalTableShowOutput: streamOnExternalTable.StreamOnExternalTableShowOutput = { ... }
```


### StreamOnExternalTableTimeouts <a name="StreamOnExternalTableTimeouts" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

const streamOnExternalTableTimeouts: streamOnExternalTable.StreamOnExternalTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#create StreamOnExternalTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#delete StreamOnExternalTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#read StreamOnExternalTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#update StreamOnExternalTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#create StreamOnExternalTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#delete StreamOnExternalTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#read StreamOnExternalTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/stream_on_external_table#update StreamOnExternalTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamOnExternalTableAtOutputReference <a name="StreamOnExternalTableAtOutputReference" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTableAtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetStatement">resetStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetStream">resetStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```

##### `resetStream` <a name="resetStream" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetStream"></a>

```typescript
public resetStream(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.streamInput">streamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.stream">stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt">StreamOnExternalTableAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnExternalTableAt;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableAt">StreamOnExternalTableAt</a>

---


### StreamOnExternalTableBeforeOutputReference <a name="StreamOnExternalTableBeforeOutputReference" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTableBeforeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetStatement">resetStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetStream">resetStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```

##### `resetStream` <a name="resetStream" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetStream"></a>

```typescript
public resetStream(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.streamInput">streamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.stream">stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore">StreamOnExternalTableBefore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBeforeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnExternalTableBefore;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableBefore">StreamOnExternalTableBefore</a>

---


### StreamOnExternalTableDescribeOutputList <a name="StreamOnExternalTableDescribeOutputList" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTableDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.get"></a>

```typescript
public get(index: number): StreamOnExternalTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnExternalTableDescribeOutputOutputReference <a name="StreamOnExternalTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.stale">stale</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutput">StreamOnExternalTableDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnExternalTableDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableDescribeOutput">StreamOnExternalTableDescribeOutput</a>

---


### StreamOnExternalTableShowOutputList <a name="StreamOnExternalTableShowOutputList" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTableShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.get"></a>

```typescript
public get(index: number): StreamOnExternalTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnExternalTableShowOutputOutputReference <a name="StreamOnExternalTableShowOutputOutputReference" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.stale">stale</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutput">StreamOnExternalTableShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnExternalTableShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableShowOutput">StreamOnExternalTableShowOutput</a>

---


### StreamOnExternalTableTimeoutsOutputReference <a name="StreamOnExternalTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamOnExternalTable } from '@cdktn/provider-snowflake'

new streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts">StreamOnExternalTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamOnExternalTableTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.streamOnExternalTable.StreamOnExternalTableTimeouts">StreamOnExternalTableTimeouts</a>

---



