# `postgresInstance` Submodule <a name="`postgresInstance` Submodule" id="@cdktn/provider-snowflake.postgresInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresInstance <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance snowflake_postgres_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

new postgresInstance.PostgresInstance(scope: Construct, id: string, config: PostgresInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig">PostgresInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig">PostgresInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability">resetHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart">resetMaintenanceWindowStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy">resetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings">resetPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration">resetStorageIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: PostgresInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetHighAvailability` <a name="resetHighAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability"></a>

```typescript
public resetHighAvailability(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintenanceWindowStart` <a name="resetMaintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart"></a>

```typescript
public resetMaintenanceWindowStart(): void
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy"></a>

```typescript
public resetNetworkPolicy(): void
```

##### `resetPostgresSettings` <a name="resetPostgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings"></a>

```typescript
public resetPostgresSettings(): void
```

##### `resetStorageIntegration` <a name="resetStorageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration"></a>

```typescript
public resetStorageIntegration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

postgresInstance.PostgresInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

postgresInstance.PostgresInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

postgresInstance.PostgresInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

postgresInstance.PostgresInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput">authenticationAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput">computeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput">highAvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput">maintenanceWindowStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput">networkPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput">postgresSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput">postgresVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput">storageIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput">storageSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority">authenticationAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily">computeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability">highAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings">postgresSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion">postgresVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb">storageSizeGb</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput"></a>

```typescript
public readonly describeOutput: PostgresInstanceDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput"></a>

```typescript
public readonly showOutput: PostgresInstanceShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a>

---

##### `authenticationAuthorityInput`<sup>Optional</sup> <a name="authenticationAuthorityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput"></a>

```typescript
public readonly authenticationAuthorityInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `computeFamilyInput`<sup>Optional</sup> <a name="computeFamilyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput"></a>

```typescript
public readonly computeFamilyInput: string;
```

- *Type:* string

---

##### `highAvailabilityInput`<sup>Optional</sup> <a name="highAvailabilityInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput"></a>

```typescript
public readonly highAvailabilityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintenanceWindowStartInput`<sup>Optional</sup> <a name="maintenanceWindowStartInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput"></a>

```typescript
public readonly maintenanceWindowStartInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput"></a>

```typescript
public readonly networkPolicyInput: string;
```

- *Type:* string

---

##### `postgresSettingsInput`<sup>Optional</sup> <a name="postgresSettingsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput"></a>

```typescript
public readonly postgresSettingsInput: string;
```

- *Type:* string

---

##### `postgresVersionInput`<sup>Optional</sup> <a name="postgresVersionInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput"></a>

```typescript
public readonly postgresVersionInput: number;
```

- *Type:* number

---

##### `storageIntegrationInput`<sup>Optional</sup> <a name="storageIntegrationInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput"></a>

```typescript
public readonly storageIntegrationInput: string;
```

- *Type:* string

---

##### `storageSizeGbInput`<sup>Optional</sup> <a name="storageSizeGbInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput"></a>

```typescript
public readonly storageSizeGbInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PostgresInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority"></a>

```typescript
public readonly authenticationAuthority: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily"></a>

```typescript
public readonly computeFamily: string;
```

- *Type:* string

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability"></a>

```typescript
public readonly highAvailability: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings"></a>

```typescript
public readonly postgresSettings: string;
```

- *Type:* string

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion"></a>

```typescript
public readonly postgresVersion: number;
```

- *Type:* number

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb"></a>

```typescript
public readonly storageSizeGb: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresInstanceConfig <a name="PostgresInstanceConfig" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

const postgresInstanceConfig: postgresInstance.PostgresInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority">authenticationAuthority</a></code> | <code>string</code> | Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` \| `POSTGRES_OR_SNOWFLAKE`. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily">computeFamily</a></code> | <code>string</code> | Specifies the compute family for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the Postgres instance; |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion">postgresVersion</a></code> | <code>number</code> | Specifies the Postgres version for the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb">storageSizeGb</a></code> | <code>number</code> | Specifies the storage size in GB for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability">highAvailability</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#id PostgresInstance#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | Specifies the network policy to associate with the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings">postgresSettings</a></code> | <code>string</code> | Specifies custom Postgres settings as a JSON string. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | Specifies the storage integration for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority"></a>

```typescript
public readonly authenticationAuthority: string;
```

- *Type:* string

Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` | `POSTGRES_OR_SNOWFLAKE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#authentication_authority PostgresInstance#authentication_authority}

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily"></a>

```typescript
public readonly computeFamily: string;
```

- *Type:* string

Specifies the compute family for the Postgres instance.

Valid values are (case-insensitive): `STANDARD_M` | `STANDARD_L` | `STANDARD_XL` | `STANDARD_2XL` | `STANDARD_4XL` | `STANDARD_8XL` | `STANDARD_12XL` | `STANDARD_24XL` | `HIGHMEM_L` | `HIGHMEM_XL` | `HIGHMEM_2XL` | `HIGHMEM_4XL` | `HIGHMEM_8XL` | `HIGHMEM_12XL` | `HIGHMEM_16XL` | `HIGHMEM_24XL` | `HIGHMEM_32XL` | `HIGHMEM_48XL` | `BURST_XS` | `BURST_S` | `BURST_M`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#compute_family PostgresInstance#compute_family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the Postgres instance;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#name PostgresInstance#name}

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion"></a>

```typescript
public readonly postgresVersion: number;
```

- *Type:* number

Specifies the Postgres version for the instance.

Note that Snowflake does not allow downgrading; the version can only be upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#postgres_version PostgresInstance#postgres_version}

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb"></a>

```typescript
public readonly storageSizeGb: number;
```

- *Type:* number

Specifies the storage size in GB for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#storage_size_gb PostgresInstance#storage_size_gb}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#comment PostgresInstance#comment}

---

##### `highAvailability`<sup>Optional</sup> <a name="highAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability"></a>

```typescript
public readonly highAvailability: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#high_availability PostgresInstance#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#id PostgresInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindowStart`<sup>Optional</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#maintenance_window_start PostgresInstance#maintenance_window_start}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

Specifies the network policy to associate with the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#network_policy PostgresInstance#network_policy}

---

##### `postgresSettings`<sup>Optional</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings"></a>

```typescript
public readonly postgresSettings: string;
```

- *Type:* string

Specifies custom Postgres settings as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#postgres_settings PostgresInstance#postgres_settings}

---

##### `storageIntegration`<sup>Optional</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

Specifies the storage integration for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#storage_integration PostgresInstance#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PostgresInstanceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#timeouts PostgresInstance#timeouts}

---

### PostgresInstanceDescribeOutput <a name="PostgresInstanceDescribeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

const postgresInstanceDescribeOutput: postgresInstance.PostgresInstanceDescribeOutput = { ... }
```


### PostgresInstanceShowOutput <a name="PostgresInstanceShowOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

const postgresInstanceShowOutput: postgresInstance.PostgresInstanceShowOutput = { ... }
```


### PostgresInstanceTimeouts <a name="PostgresInstanceTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

const postgresInstanceTimeouts: postgresInstance.PostgresInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#create PostgresInstance#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#delete PostgresInstance#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#read PostgresInstance#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#update PostgresInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#create PostgresInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#delete PostgresInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#read PostgresInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/postgres_instance#update PostgresInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresInstanceDescribeOutputList <a name="PostgresInstanceDescribeOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

new postgresInstance.PostgresInstanceDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get"></a>

```typescript
public get(index: number): PostgresInstanceDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PostgresInstanceDescribeOutputOutputReference <a name="PostgresInstanceDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

new postgresInstance.PostgresInstanceDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority">authenticationAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily">computeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability">highAvailability</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings">postgresSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion">postgresVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier">privatelinkServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime">retentionTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration">storageIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb">storageSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority"></a>

```typescript
public readonly authenticationAuthority: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily"></a>

```typescript
public readonly computeFamily: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `highAvailability`<sup>Required</sup> <a name="highAvailability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability"></a>

```typescript
public readonly highAvailability: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart"></a>

```typescript
public readonly maintenanceWindowStart: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings"></a>

```typescript
public readonly postgresSettings: string;
```

- *Type:* string

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion"></a>

```typescript
public readonly postgresVersion: number;
```

- *Type:* number

---

##### `privatelinkServiceIdentifier`<sup>Required</sup> <a name="privatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```typescript
public readonly privatelinkServiceIdentifier: string;
```

- *Type:* string

---

##### `retentionTime`<sup>Required</sup> <a name="retentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime"></a>

```typescript
public readonly retentionTime: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageIntegration`<sup>Required</sup> <a name="storageIntegration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration"></a>

```typescript
public readonly storageIntegration: string;
```

- *Type:* string

---

##### `storageSizeGb`<sup>Required</sup> <a name="storageSizeGb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb"></a>

```typescript
public readonly storageSizeGb: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresInstanceDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a>

---


### PostgresInstanceShowOutputList <a name="PostgresInstanceShowOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

new postgresInstance.PostgresInstanceShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get"></a>

```typescript
public get(index: number): PostgresInstanceShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### PostgresInstanceShowOutputOutputReference <a name="PostgresInstanceShowOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

new postgresInstance.PostgresInstanceShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority">authenticationAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily">computeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa">isHa</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings">postgresSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion">postgresVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier">privatelinkServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime">retentionTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize">storageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationAuthority`<sup>Required</sup> <a name="authenticationAuthority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority"></a>

```typescript
public readonly authenticationAuthority: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `computeFamily`<sup>Required</sup> <a name="computeFamily" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily"></a>

```typescript
public readonly computeFamily: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `isHa`<sup>Required</sup> <a name="isHa" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa"></a>

```typescript
public readonly isHa: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `postgresSettings`<sup>Required</sup> <a name="postgresSettings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings"></a>

```typescript
public readonly postgresSettings: string;
```

- *Type:* string

---

##### `postgresVersion`<sup>Required</sup> <a name="postgresVersion" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion"></a>

```typescript
public readonly postgresVersion: string;
```

- *Type:* string

---

##### `privatelinkServiceIdentifier`<sup>Required</sup> <a name="privatelinkServiceIdentifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```typescript
public readonly privatelinkServiceIdentifier: string;
```

- *Type:* string

---

##### `retentionTime`<sup>Required</sup> <a name="retentionTime" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime"></a>

```typescript
public readonly retentionTime: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize"></a>

```typescript
public readonly storageSize: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn"></a>

```typescript
public readonly updatedOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PostgresInstanceShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a>

---


### PostgresInstanceTimeoutsOutputReference <a name="PostgresInstanceTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { postgresInstance } from '@cdktn/provider-snowflake'

new postgresInstance.PostgresInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PostgresInstanceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---



