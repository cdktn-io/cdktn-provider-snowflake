# `openflowRuntime` Submodule <a name="`openflowRuntime` Submodule" id="@cdktn/provider-snowflake.openflowRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowRuntime <a name="OpenflowRuntime" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime snowflake_openflow_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

new openflowRuntime.OpenflowRuntime(scope: Construct, id: string, config: OpenflowRuntimeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig">OpenflowRuntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig">OpenflowRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations">resetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts"></a>

```typescript
public putTimeouts(value: OpenflowRuntimeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalAccessIntegrations` <a name="resetExternalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations"></a>

```typescript
public resetExternalAccessIntegrations(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

openflowRuntime.OpenflowRuntime.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

openflowRuntime.OpenflowRuntime.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

openflowRuntime.OpenflowRuntime.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

openflowRuntime.OpenflowRuntime.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpenflowRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpenflowRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput">deploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput">executeAsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput">externalAccessIntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput">maxNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput">minNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole">executeAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput"></a>

```typescript
public readonly describeOutput: OpenflowRuntimeDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput"></a>

```typescript
public readonly showOutput: OpenflowRuntimeShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowRuntimeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executeAsRoleInput`<sup>Optional</sup> <a name="executeAsRoleInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput"></a>

```typescript
public readonly executeAsRoleInput: string;
```

- *Type:* string

---

##### `externalAccessIntegrationsInput`<sup>Optional</sup> <a name="externalAccessIntegrationsInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput"></a>

```typescript
public readonly externalAccessIntegrationsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput"></a>

```typescript
public readonly maxNodesInput: number;
```

- *Type:* number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput"></a>

```typescript
public readonly minNodesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpenflowRuntimeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole"></a>

```typescript
public readonly executeAsRole: string;
```

- *Type:* string

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowRuntimeConfig <a name="OpenflowRuntimeConfig" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

const openflowRuntimeConfig: openflowRuntime.OpenflowRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment">deployment</a></code> | <code>string</code> | Specifies the Openflow deployment the runtime runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole">executeAsRole</a></code> | <code>string</code> | Specifies the role the runtime executes as. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes">maxNodes</a></code> | <code>number</code> | Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes">minNodes</a></code> | <code>number</code> | Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the Openflow runtime; |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType">nodeType</a></code> | <code>string</code> | Specifies the size of the runtime's nodes. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName">displayName</a></code> | <code>string</code> | A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | Specifies the names of the external access integrations that allow the runtime egress to external data sources. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#database OpenflowRuntime#database}

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

Specifies the Openflow deployment the runtime runs in.

Snowflake has no ALTER for it, so changing it recreates the runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#deployment OpenflowRuntime#deployment}

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole"></a>

```typescript
public readonly executeAsRole: string;
```

- *Type:* string

Specifies the role the runtime executes as.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#execute_as_role OpenflowRuntime#execute_as_role}

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#max_nodes OpenflowRuntime#max_nodes}

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#min_nodes OpenflowRuntime#min_nodes}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the Openflow runtime;

must be unique for the schema in which the runtime is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#name OpenflowRuntime#name}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Specifies the size of the runtime's nodes.

Snowflake has no ALTER for it, so changing it recreates the runtime. Valid values are (case-insensitive): `SMALL` | `MEDIUM` | `LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#node_type OpenflowRuntime#node_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#schema OpenflowRuntime#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the Openflow runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#comment OpenflowRuntime#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#display_name OpenflowRuntime#display_name}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

Specifies the names of the external access integrations that allow the runtime egress to external data sources.

Supported for Snowflake-managed deployments only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#external_access_integrations OpenflowRuntime#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowRuntimeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#timeouts OpenflowRuntime#timeouts}

---

### OpenflowRuntimeDescribeOutput <a name="OpenflowRuntimeDescribeOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

const openflowRuntimeDescribeOutput: openflowRuntime.OpenflowRuntimeDescribeOutput = { ... }
```


### OpenflowRuntimeShowOutput <a name="OpenflowRuntimeShowOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

const openflowRuntimeShowOutput: openflowRuntime.OpenflowRuntimeShowOutput = { ... }
```


### OpenflowRuntimeTimeouts <a name="OpenflowRuntimeTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

const openflowRuntimeTimeouts: openflowRuntime.OpenflowRuntimeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowRuntimeDescribeOutputList <a name="OpenflowRuntimeDescribeOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

new openflowRuntime.OpenflowRuntimeDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get"></a>

```typescript
public get(index: number): OpenflowRuntimeDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowRuntimeDescribeOutputOutputReference <a name="OpenflowRuntimeDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

new openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier">nodeTypeTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl">serverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole"></a>

```typescript
public readonly executeAsRole: string;
```

- *Type:* string

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `nodeTypeTier`<sup>Required</sup> <a name="nodeTypeTier" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier"></a>

```typescript
public readonly nodeTypeTier: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl"></a>

```typescript
public readonly serverUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowRuntimeDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a>

---


### OpenflowRuntimeShowOutputList <a name="OpenflowRuntimeShowOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

new openflowRuntime.OpenflowRuntimeShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get"></a>

```typescript
public get(index: number): OpenflowRuntimeShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowRuntimeShowOutputOutputReference <a name="OpenflowRuntimeShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

new openflowRuntime.OpenflowRuntimeShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment">deployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes">minNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment"></a>

```typescript
public readonly deployment: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole"></a>

```typescript
public readonly executeAsRole: string;
```

- *Type:* string

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations"></a>

```typescript
public readonly externalAccessIntegrations: string[];
```

- *Type:* string[]

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended"></a>

```typescript
public readonly initiallySuspended: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes"></a>

```typescript
public readonly maxNodes: number;
```

- *Type:* number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes"></a>

```typescript
public readonly minNodes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowRuntimeShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a>

---


### OpenflowRuntimeTimeoutsOutputReference <a name="OpenflowRuntimeTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer"></a>

```typescript
import { openflowRuntime } from '@cdktn/provider-snowflake'

new openflowRuntime.OpenflowRuntimeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpenflowRuntimeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---



