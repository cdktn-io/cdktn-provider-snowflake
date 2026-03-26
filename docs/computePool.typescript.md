# `computePool` Submodule <a name="`computePool` Submodule" id="@cdktn/provider-snowflake.computePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePool <a name="ComputePool" id="@cdktn/provider-snowflake.computePool.ComputePool"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool snowflake_compute_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.computePool.ComputePool.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

new computePool.ComputePool(scope: Construct, id: string, config: ComputePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig">ComputePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.computePool.ComputePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.computePool.ComputePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.computePool.ComputePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig">ComputePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetAutoResume">resetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetAutoSuspendSecs">resetAutoSuspendSecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetForApplication">resetForApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetInitiallySuspended">resetInitiallySuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.computePool.ComputePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.computePool.ComputePool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.computePool.ComputePool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.computePool.ComputePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.computePool.ComputePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.computePool.ComputePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.computePool.ComputePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.computePool.ComputePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.computePool.ComputePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.computePool.ComputePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.computePool.ComputePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.computePool.ComputePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.computePool.ComputePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.computePool.ComputePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.computePool.ComputePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.computePool.ComputePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.computePool.ComputePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.computePool.ComputePool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.computePool.ComputePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.computePool.ComputePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.computePool.ComputePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.computePool.ComputePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.computePool.ComputePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.computePool.ComputePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.computePool.ComputePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.computePool.ComputePool.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.computePool.ComputePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts">ComputePoolTimeouts</a>

---

##### `resetAutoResume` <a name="resetAutoResume" id="@cdktn/provider-snowflake.computePool.ComputePool.resetAutoResume"></a>

```typescript
public resetAutoResume(): void
```

##### `resetAutoSuspendSecs` <a name="resetAutoSuspendSecs" id="@cdktn/provider-snowflake.computePool.ComputePool.resetAutoSuspendSecs"></a>

```typescript
public resetAutoSuspendSecs(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.computePool.ComputePool.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetForApplication` <a name="resetForApplication" id="@cdktn/provider-snowflake.computePool.ComputePool.resetForApplication"></a>

```typescript
public resetForApplication(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.computePool.ComputePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitiallySuspended` <a name="resetInitiallySuspended" id="@cdktn/provider-snowflake.computePool.ComputePool.resetInitiallySuspended"></a>

```typescript
public resetInitiallySuspended(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.computePool.ComputePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.computePool.ComputePool.isConstruct"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

computePool.ComputePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.computePool.ComputePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.computePool.ComputePool.isTerraformElement"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

computePool.ComputePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.computePool.ComputePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.computePool.ComputePool.isTerraformResource"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

computePool.ComputePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.computePool.ComputePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.computePool.ComputePool.generateConfigForImport"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

computePool.ComputePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComputePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.computePool.ComputePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.computePool.ComputePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.computePool.ComputePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.computePool.ComputePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList">ComputePoolDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList">ComputePoolShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference">ComputePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.autoResumeInput">autoResumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.autoSuspendSecsInput">autoSuspendSecsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.forApplicationInput">forApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.initiallySuspendedInput">initiallySuspendedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.instanceFamilyInput">instanceFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts">ComputePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.autoResume">autoResume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.autoSuspendSecs">autoSuspendSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.forApplication">forApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.initiallySuspended">initiallySuspended</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.computePool.ComputePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.computePool.ComputePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.computePool.ComputePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.computePool.ComputePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.computePool.ComputePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.computePool.ComputePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.computePool.ComputePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.computePool.ComputePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.computePool.ComputePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.computePool.ComputePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.computePool.ComputePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.computePool.ComputePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.computePool.ComputePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.computePool.ComputePool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.describeOutput"></a>

```typescript
public readonly describeOutput: ComputePoolDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList">ComputePoolDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.computePool.ComputePool.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.showOutput"></a>

```typescript
public readonly showOutput: ComputePoolShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList">ComputePoolShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.computePool.ComputePool.property.timeouts"></a>

```typescript
public readonly timeouts: ComputePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference">ComputePoolTimeoutsOutputReference</a>

---

##### `autoResumeInput`<sup>Optional</sup> <a name="autoResumeInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.autoResumeInput"></a>

```typescript
public readonly autoResumeInput: string;
```

- *Type:* string

---

##### `autoSuspendSecsInput`<sup>Optional</sup> <a name="autoSuspendSecsInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.autoSuspendSecsInput"></a>

```typescript
public readonly autoSuspendSecsInput: number;
```

- *Type:* number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `forApplicationInput`<sup>Optional</sup> <a name="forApplicationInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.forApplicationInput"></a>

```typescript
public readonly forApplicationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initiallySuspendedInput`<sup>Optional</sup> <a name="initiallySuspendedInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.initiallySuspendedInput"></a>

```typescript
public readonly initiallySuspendedInput: string;
```

- *Type:* string

---

##### `instanceFamilyInput`<sup>Optional</sup> <a name="instanceFamilyInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.instanceFamilyInput"></a>

```typescript
public readonly instanceFamilyInput: string;
```

- *Type:* string

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.computePool.ComputePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputePoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts">ComputePoolTimeouts</a>

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.computePool.ComputePool.property.autoResume"></a>

```typescript
public readonly autoResume: string;
```

- *Type:* string

---

##### `autoSuspendSecs`<sup>Required</sup> <a name="autoSuspendSecs" id="@cdktn/provider-snowflake.computePool.ComputePool.property.autoSuspendSecs"></a>

```typescript
public readonly autoSuspendSecs: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.computePool.ComputePool.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `forApplication`<sup>Required</sup> <a name="forApplication" id="@cdktn/provider-snowflake.computePool.ComputePool.property.forApplication"></a>

```typescript
public readonly forApplication: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.computePool.ComputePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.computePool.ComputePool.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: string;
```

- *Type:* string

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktn/provider-snowflake.computePool.ComputePool.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.computePool.ComputePool.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.computePool.ComputePool.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.computePool.ComputePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.computePool.ComputePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePoolConfig <a name="ComputePoolConfig" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

const computePoolConfig: computePool.ComputePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | Identifies the type of machine you want to provision for the nodes in the compute pool. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.maxNodes">maxNodes</a></code> | <code>number</code> | Specifies the maximum number of nodes for the compute pool. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.minNodes">minNodes</a></code> | <code>number</code> | Specifies the minimum number of nodes for the compute pool. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the compute pool; |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.autoResume">autoResume</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a compute pool when a service or job is submitted to it. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.autoSuspendSecs">autoSuspendSecs</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of seconds of inactivity after which you want Snowflake to automatically suspend the compute pool. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the compute pool. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.forApplication">forApplication</a></code> | <code>string</code> | Specifies the Snowflake Native App name. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#id ComputePool#id}. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.initiallySuspended">initiallySuspended</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the compute pool is created initially in the suspended state. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts">ComputePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

Identifies the type of machine you want to provision for the nodes in the compute pool.

Valid values are (case-insensitive): `CPU_X64_XS` | `CPU_X64_S` | `CPU_X64_M` | `CPU_X64_SL` | `CPU_X64_L` | `HIGHMEM_X64_S` | `HIGHMEM_X64_M` | `HIGHMEM_X64_L` | `HIGHMEM_X64_SL` | `GPU_NV_S` | `GPU_NV_M` | `GPU_NV_L` | `GPU_NV_XS` | `GPU_NV_SM` | `GPU_NV_2M` | `GPU_NV_3M` | `GPU_NV_SL` | `GPU_GCP_NV_L4_1_24G` | `GPU_GCP_NV_L4_4_24G` | `GPU_GCP_NV_A100_8_40G`. Not all instance families are supported in all regions. Run `SHOW COMPUTE POOL INSTANCE FAMILIES` to see the list of supported instance families in your region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#instance_family ComputePool#instance_family}

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

Specifies the maximum number of nodes for the compute pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#max_nodes ComputePool#max_nodes}

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

Specifies the minimum number of nodes for the compute pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#min_nodes ComputePool#min_nodes}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the compute pool;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#name ComputePool#name}

---

##### `autoResume`<sup>Optional</sup> <a name="autoResume" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.autoResume"></a>

```typescript
public readonly autoResume: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a compute pool when a service or job is submitted to it.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#auto_resume ComputePool#auto_resume}

---

##### `autoSuspendSecs`<sup>Optional</sup> <a name="autoSuspendSecs" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.autoSuspendSecs"></a>

```typescript
public readonly autoSuspendSecs: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Number of seconds of inactivity after which you want Snowflake to automatically suspend the compute pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#auto_suspend_secs ComputePool#auto_suspend_secs}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the compute pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#comment ComputePool#comment}

---

##### `forApplication`<sup>Optional</sup> <a name="forApplication" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.forApplication"></a>

```typescript
public readonly forApplication: string;
```

- *Type:* string

Specifies the Snowflake Native App name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#for_application ComputePool#for_application}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#id ComputePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiallySuspended`<sup>Optional</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the compute pool is created initially in the suspended state.

This field is used only when creating a compute pool. Changes on this field are ignored after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#initially_suspended ComputePool#initially_suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.computePool.ComputePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputePoolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts">ComputePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#timeouts ComputePool#timeouts}

---

### ComputePoolDescribeOutput <a name="ComputePoolDescribeOutput" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutput.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

const computePoolDescribeOutput: computePool.ComputePoolDescribeOutput = { ... }
```


### ComputePoolShowOutput <a name="ComputePoolShowOutput" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutput.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

const computePoolShowOutput: computePool.ComputePoolShowOutput = { ... }
```


### ComputePoolTimeouts <a name="ComputePoolTimeouts" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

const computePoolTimeouts: computePool.ComputePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#create ComputePool#create}. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#delete ComputePool#delete}. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#read ComputePool#read}. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#update ComputePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#create ComputePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#delete ComputePool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#read ComputePool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.1/docs/resources/compute_pool#update ComputePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePoolDescribeOutputList <a name="ComputePoolDescribeOutputList" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

new computePool.ComputePoolDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.get"></a>

```typescript
public get(index: number): ComputePoolDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputePoolDescribeOutputOutputReference <a name="ComputePoolDescribeOutputOutputReference" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

new computePool.ComputePoolDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.activeNodes">activeNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.autoResume">autoResume</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.autoSuspendSecs">autoSuspendSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.errorCode">errorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.idleNodes">idleNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.isExclusive">isExclusive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.numJobs">numJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.numServices">numServices</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.resumedOn">resumedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.targetNodes">targetNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutput">ComputePoolDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeNodes`<sup>Required</sup> <a name="activeNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.activeNodes"></a>

```typescript
public readonly activeNodes: number;
```

- *Type:* number

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.autoResume"></a>

```typescript
public readonly autoResume: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoSuspendSecs`<sup>Required</sup> <a name="autoSuspendSecs" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.autoSuspendSecs"></a>

```typescript
public readonly autoSuspendSecs: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.errorCode"></a>

```typescript
public readonly errorCode: string;
```

- *Type:* string

---

##### `idleNodes`<sup>Required</sup> <a name="idleNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.idleNodes"></a>

```typescript
public readonly idleNodes: number;
```

- *Type:* number

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

---

##### `isExclusive`<sup>Required</sup> <a name="isExclusive" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.isExclusive"></a>

```typescript
public readonly isExclusive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numJobs`<sup>Required</sup> <a name="numJobs" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.numJobs"></a>

```typescript
public readonly numJobs: number;
```

- *Type:* number

---

##### `numServices`<sup>Required</sup> <a name="numServices" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.numServices"></a>

```typescript
public readonly numServices: number;
```

- *Type:* number

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `resumedOn`<sup>Required</sup> <a name="resumedOn" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.resumedOn"></a>

```typescript
public readonly resumedOn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `targetNodes`<sup>Required</sup> <a name="targetNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.targetNodes"></a>

```typescript
public readonly targetNodes: number;
```

- *Type:* number

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputePoolDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolDescribeOutput">ComputePoolDescribeOutput</a>

---


### ComputePoolShowOutputList <a name="ComputePoolShowOutputList" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

new computePool.ComputePoolShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.get"></a>

```typescript
public get(index: number): ComputePoolShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ComputePoolShowOutputOutputReference <a name="ComputePoolShowOutputOutputReference" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

new computePool.ComputePoolShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.activeNodes">activeNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.autoResume">autoResume</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.autoSuspendSecs">autoSuspendSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.idleNodes">idleNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.isExclusive">isExclusive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.numJobs">numJobs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.numServices">numServices</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.resumedOn">resumedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.targetNodes">targetNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutput">ComputePoolShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeNodes`<sup>Required</sup> <a name="activeNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.activeNodes"></a>

```typescript
public readonly activeNodes: number;
```

- *Type:* number

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.autoResume"></a>

```typescript
public readonly autoResume: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoSuspendSecs`<sup>Required</sup> <a name="autoSuspendSecs" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.autoSuspendSecs"></a>

```typescript
public readonly autoSuspendSecs: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `idleNodes`<sup>Required</sup> <a name="idleNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.idleNodes"></a>

```typescript
public readonly idleNodes: number;
```

- *Type:* number

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

---

##### `isExclusive`<sup>Required</sup> <a name="isExclusive" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.isExclusive"></a>

```typescript
public readonly isExclusive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numJobs`<sup>Required</sup> <a name="numJobs" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.numJobs"></a>

```typescript
public readonly numJobs: number;
```

- *Type:* number

---

##### `numServices`<sup>Required</sup> <a name="numServices" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.numServices"></a>

```typescript
public readonly numServices: number;
```

- *Type:* number

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `resumedOn`<sup>Required</sup> <a name="resumedOn" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.resumedOn"></a>

```typescript
public readonly resumedOn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetNodes`<sup>Required</sup> <a name="targetNodes" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.targetNodes"></a>

```typescript
public readonly targetNodes: number;
```

- *Type:* number

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.computePool.ComputePoolShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputePoolShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.computePool.ComputePoolShowOutput">ComputePoolShowOutput</a>

---


### ComputePoolTimeoutsOutputReference <a name="ComputePoolTimeoutsOutputReference" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { computePool } from '@cdktn/provider-snowflake'

new computePool.ComputePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts">ComputePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.computePool.ComputePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputePoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.computePool.ComputePoolTimeouts">ComputePoolTimeouts</a>

---



