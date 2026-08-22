# `storageLifecyclePolicy` Submodule <a name="`storageLifecyclePolicy` Submodule" id="@cdktn/provider-snowflake.storageLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageLifecyclePolicy <a name="StorageLifecyclePolicy" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy snowflake_storage_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicy(scope: Construct, id: string, config: StorageLifecyclePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig">StorageLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig">StorageLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument">putArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays">resetArchiveForDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier">resetArchiveTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArgument` <a name="putArgument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument"></a>

```typescript
public putArgument(value: IResolvable | StorageLifecyclePolicyArgument[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageLifecyclePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---

##### `resetArchiveForDays` <a name="resetArchiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays"></a>

```typescript
public resetArchiveForDays(): void
```

##### `resetArchiveTier` <a name="resetArchiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier"></a>

```typescript
public resetArchiveTier(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageLifecyclePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument">argument</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput">archiveForDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput">archiveTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput">argumentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays">archiveForDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier">archiveTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument"></a>

```typescript
public readonly argument: StorageLifecyclePolicyArgumentList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput"></a>

```typescript
public readonly describeOutput: StorageLifecyclePolicyDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput"></a>

```typescript
public readonly showOutput: StorageLifecyclePolicyShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: StorageLifecyclePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a>

---

##### `archiveForDaysInput`<sup>Optional</sup> <a name="archiveForDaysInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput"></a>

```typescript
public readonly archiveForDaysInput: number;
```

- *Type:* number

---

##### `archiveTierInput`<sup>Optional</sup> <a name="archiveTierInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput"></a>

```typescript
public readonly archiveTierInput: string;
```

- *Type:* string

---

##### `argumentInput`<sup>Optional</sup> <a name="argumentInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput"></a>

```typescript
public readonly argumentInput: IResolvable | StorageLifecyclePolicyArgument[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageLifecyclePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---

##### `archiveForDays`<sup>Required</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays"></a>

```typescript
public readonly archiveForDays: number;
```

- *Type:* number

---

##### `archiveTier`<sup>Required</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier"></a>

```typescript
public readonly archiveTier: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageLifecyclePolicyArgument <a name="StorageLifecyclePolicyArgument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

const storageLifecyclePolicyArgument: storageLifecyclePolicy.StorageLifecyclePolicyArgument = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name">name</a></code> | <code>string</code> | The argument name. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type">type</a></code> | <code>string</code> | The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#type StorageLifecyclePolicy#type}

---

### StorageLifecyclePolicyConfig <a name="StorageLifecyclePolicyConfig" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

const storageLifecyclePolicyConfig: storageLifecyclePolicy.StorageLifecyclePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument">argument</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]</code> | argument block. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body">body</a></code> | <code>string</code> | Specifies the SQL expression. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the storage lifecycle policy; |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays">archiveForDays</a></code> | <code>number</code> | Specifies the number of days to keep rows that match the policy expression in archive storage. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier">archiveTier</a></code> | <code>string</code> | Specifies the type of storage tier to use for archiving rows. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument"></a>

```typescript
public readonly argument: IResolvable | StorageLifecyclePolicyArgument[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#argument StorageLifecyclePolicy#argument}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#body StorageLifecyclePolicy#body}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#database StorageLifecyclePolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the storage lifecycle policy;

must be unique for the database and schema in which the storage lifecycle policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#schema StorageLifecyclePolicy#schema}

---

##### `archiveForDays`<sup>Optional</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays"></a>

```typescript
public readonly archiveForDays: number;
```

- *Type:* number

Specifies the number of days to keep rows that match the policy expression in archive storage.

If set, Snowflake moves the data into archive storage according to the value you select for archive_tier. If unset, Snowflake expires the rows from the table without archiving the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#archive_for_days StorageLifecyclePolicy#archive_for_days}

---

##### `archiveTier`<sup>Optional</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier"></a>

```typescript
public readonly archiveTier: string;
```

- *Type:* string

Specifies the type of storage tier to use for archiving rows.

After you set the ARCHIVE_TIER for a policy, you can’t modify it. If you don’t specify this parameter, the policy is an expiration policy that deletes rows without archiving them. Valid values are (case-insensitive): `COOL` | `COLD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#archive_tier StorageLifecyclePolicy#archive_tier}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the storage lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#comment StorageLifecyclePolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageLifecyclePolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#timeouts StorageLifecyclePolicy#timeouts}

---

### StorageLifecyclePolicyDescribeOutput <a name="StorageLifecyclePolicyDescribeOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

const storageLifecyclePolicyDescribeOutput: storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput = { ... }
```


### StorageLifecyclePolicyDescribeOutputSignature <a name="StorageLifecyclePolicyDescribeOutputSignature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

const storageLifecyclePolicyDescribeOutputSignature: storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature = { ... }
```


### StorageLifecyclePolicyShowOutput <a name="StorageLifecyclePolicyShowOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

const storageLifecyclePolicyShowOutput: storageLifecyclePolicy.StorageLifecyclePolicyShowOutput = { ... }
```


### StorageLifecyclePolicyTimeouts <a name="StorageLifecyclePolicyTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

const storageLifecyclePolicyTimeouts: storageLifecyclePolicy.StorageLifecyclePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageLifecyclePolicyArgumentList <a name="StorageLifecyclePolicyArgumentList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyArgumentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get"></a>

```typescript
public get(index: number): StorageLifecyclePolicyArgumentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageLifecyclePolicyArgument[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

---


### StorageLifecyclePolicyArgumentOutputReference <a name="StorageLifecyclePolicyArgumentOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageLifecyclePolicyArgument;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>

---


### StorageLifecyclePolicyDescribeOutputList <a name="StorageLifecyclePolicyDescribeOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get"></a>

```typescript
public get(index: number): StorageLifecyclePolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StorageLifecyclePolicyDescribeOutputOutputReference <a name="StorageLifecyclePolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays">archiveForDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier">archiveTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType">returnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archiveForDays`<sup>Required</sup> <a name="archiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays"></a>

```typescript
public readonly archiveForDays: number;
```

- *Type:* number

---

##### `archiveTier`<sup>Required</sup> <a name="archiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier"></a>

```typescript
public readonly archiveTier: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType"></a>

```typescript
public readonly returnType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature"></a>

```typescript
public readonly signature: StorageLifecyclePolicyDescribeOutputSignatureList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageLifecyclePolicyDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a>

---


### StorageLifecyclePolicyDescribeOutputSignatureList <a name="StorageLifecyclePolicyDescribeOutputSignatureList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get"></a>

```typescript
public get(index: number): StorageLifecyclePolicyDescribeOutputSignatureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StorageLifecyclePolicyDescribeOutputSignatureOutputReference <a name="StorageLifecyclePolicyDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageLifecyclePolicyDescribeOutputSignature;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a>

---


### StorageLifecyclePolicyShowOutputList <a name="StorageLifecyclePolicyShowOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get"></a>

```typescript
public get(index: number): StorageLifecyclePolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StorageLifecyclePolicyShowOutputOutputReference <a name="StorageLifecyclePolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options">options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options"></a>

```typescript
public readonly options: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageLifecyclePolicyShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a>

---


### StorageLifecyclePolicyTimeoutsOutputReference <a name="StorageLifecyclePolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageLifecyclePolicy } from '@cdktn/provider-snowflake'

new storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageLifecyclePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---



