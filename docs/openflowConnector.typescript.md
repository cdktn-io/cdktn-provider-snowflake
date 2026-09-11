# `openflowConnector` Submodule <a name="`openflowConnector` Submodule" id="@cdktn/provider-snowflake.openflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowConnector <a name="OpenflowConnector" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector snowflake_openflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

new openflowConnector.OpenflowConnector(scope: Construct, id: string, config: OpenflowConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig">OpenflowConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig">OpenflowConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFrom` <a name="putFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom"></a>

```typescript
public putFrom(value: OpenflowConnectorFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts"></a>

```typescript
public putTimeouts(value: OpenflowConnectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

openflowConnector.OpenflowConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

openflowConnector.OpenflowConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

openflowConnector.OpenflowConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

openflowConnector.OpenflowConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpenflowConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpenflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput"></a>

```typescript
public readonly describeOutput: OpenflowConnectorDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a>

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from"></a>

```typescript
public readonly from: OpenflowConnectorFromOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput"></a>

```typescript
public readonly showOutput: OpenflowConnectorShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowConnectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput"></a>

```typescript
public readonly fromInput: OpenflowConnectorFrom;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpenflowConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowConnectorConfig <a name="OpenflowConnectorConfig" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

const openflowConnectorConfig: openflowConnector.OpenflowConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from">from</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the Openflow connector; |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime">runtime</a></code> | <code>string</code> | Specifies the fully qualified name of the Openflow runtime the connector runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName">displayName</a></code> | <code>string</code> | A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#database OpenflowConnector#database}

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from"></a>

```typescript
public readonly from: OpenflowConnectorFrom;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#from OpenflowConnector#from}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the Openflow connector;

must be unique for the schema in which the connector is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#name OpenflowConnector#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Specifies the fully qualified name of the Openflow runtime the connector runs in.

The connector is created in the runtime's schema, so `database` and `schema` must match it. Snowflake has no ALTER for it, so changing it recreates the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#runtime OpenflowConnector#runtime}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#schema OpenflowConnector#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the Openflow connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#comment OpenflowConnector#comment}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#display_name OpenflowConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpenflowConnectorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#timeouts OpenflowConnector#timeouts}

---

### OpenflowConnectorDescribeOutput <a name="OpenflowConnectorDescribeOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

const openflowConnectorDescribeOutput: openflowConnector.OpenflowConnectorDescribeOutput = { ... }
```


### OpenflowConnectorFrom <a name="OpenflowConnectorFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

const openflowConnectorFrom: openflowConnector.OpenflowConnectorFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition">definition</a></code> | <code>string</code> | Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path">path</a></code> | <code>string</code> | Path to the bundle within the stage. The bundle's root is used when omitted. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage">stage</a></code> | <code>string</code> | Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`.

List the available IDs with the `snowflake_openflow_connector_definitions` data source. A connector created this way is a draft: it settles on STOPPED and stays there until a configuration version is committed, which this resource does not do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#definition OpenflowConnector#definition}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to the bundle within the stage. The bundle's root is used when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#path OpenflowConnector#path}

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit.

A git repository stage works here too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#stage OpenflowConnector#stage}

---

### OpenflowConnectorShowOutput <a name="OpenflowConnectorShowOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

const openflowConnectorShowOutput: openflowConnector.OpenflowConnectorShowOutput = { ... }
```


### OpenflowConnectorTimeouts <a name="OpenflowConnectorTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

const openflowConnectorTimeouts: openflowConnector.OpenflowConnectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowConnectorDescribeOutputList <a name="OpenflowConnectorDescribeOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

new openflowConnector.OpenflowConnectorDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get"></a>

```typescript
public get(index: number): OpenflowConnectorDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowConnectorDescribeOutputOutputReference <a name="OpenflowConnectorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

new openflowConnector.OpenflowConnectorDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash">defaultVersionGitCommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias">lastVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash">lastVersionGitCommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri">lastVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName">lastVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri">lastVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition"></a>

```typescript
public readonly connectorDefinition: string;
```

- *Type:* string

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl"></a>

```typescript
public readonly connectorUrl: string;
```

- *Type:* string

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```typescript
public readonly defaultVersionAlias: string;
```

- *Type:* string

---

##### `defaultVersionGitCommitHash`<sup>Required</sup> <a name="defaultVersionGitCommitHash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```typescript
public readonly defaultVersionGitCommitHash: string;
```

- *Type:* string

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```typescript
public readonly defaultVersionLocationUri: string;
```

- *Type:* string

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName"></a>

```typescript
public readonly defaultVersionName: string;
```

- *Type:* string

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```typescript
public readonly defaultVersionSourceLocationUri: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lastVersionAlias`<sup>Required</sup> <a name="lastVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias"></a>

```typescript
public readonly lastVersionAlias: string;
```

- *Type:* string

---

##### `lastVersionGitCommitHash`<sup>Required</sup> <a name="lastVersionGitCommitHash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```typescript
public readonly lastVersionGitCommitHash: string;
```

- *Type:* string

---

##### `lastVersionLocationUri`<sup>Required</sup> <a name="lastVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```typescript
public readonly lastVersionLocationUri: string;
```

- *Type:* string

---

##### `lastVersionName`<sup>Required</sup> <a name="lastVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName"></a>

```typescript
public readonly lastVersionName: string;
```

- *Type:* string

---

##### `lastVersionSourceLocationUri`<sup>Required</sup> <a name="lastVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```typescript
public readonly lastVersionSourceLocationUri: string;
```

- *Type:* string

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```typescript
public readonly liveVersionLocationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowConnectorDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a>

---


### OpenflowConnectorFromOutputReference <a name="OpenflowConnectorFromOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

new openflowConnector.OpenflowConnectorFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage">resetStage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage"></a>

```typescript
public resetStage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowConnectorFrom;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---


### OpenflowConnectorShowOutputList <a name="OpenflowConnectorShowOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

new openflowConnector.OpenflowConnectorShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get"></a>

```typescript
public get(index: number): OpenflowConnectorShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OpenflowConnectorShowOutputOutputReference <a name="OpenflowConnectorShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

new openflowConnector.OpenflowConnectorShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition"></a>

```typescript
public readonly connectorDefinition: string;
```

- *Type:* string

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl"></a>

```typescript
public readonly connectorUrl: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias"></a>

```typescript
public readonly defaultVersionAlias: string;
```

- *Type:* string

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```typescript
public readonly defaultVersionLocationUri: string;
```

- *Type:* string

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName"></a>

```typescript
public readonly defaultVersionName: string;
```

- *Type:* string

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```typescript
public readonly defaultVersionSourceLocationUri: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri"></a>

```typescript
public readonly liveVersionLocationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpenflowConnectorShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a>

---


### OpenflowConnectorTimeoutsOutputReference <a name="OpenflowConnectorTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { openflowConnector } from '@cdktn/provider-snowflake'

new openflowConnector.OpenflowConnectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpenflowConnectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---



