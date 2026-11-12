# `replicationGroup` Submodule <a name="`replicationGroup` Submodule" id="@cdktn/provider-snowflake.replicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReplicationGroup <a name="ReplicationGroup" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group snowflake_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.Initializer"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

new replicationGroup.ReplicationGroup(scope: Construct, id: string, config: ReplicationGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig">ReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig">ReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedDatabases">resetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedExternalVolumes">resetAllowedExternalVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedIntegrationTypes">resetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedShares">resetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetErrorIntegration">resetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetIgnoreEditionCheck">resetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetReplicationSchedule">resetReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ReplicationGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts">ReplicationGroupTimeouts</a>

---

##### `resetAllowedDatabases` <a name="resetAllowedDatabases" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedDatabases"></a>

```typescript
public resetAllowedDatabases(): void
```

##### `resetAllowedExternalVolumes` <a name="resetAllowedExternalVolumes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedExternalVolumes"></a>

```typescript
public resetAllowedExternalVolumes(): void
```

##### `resetAllowedIntegrationTypes` <a name="resetAllowedIntegrationTypes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedIntegrationTypes"></a>

```typescript
public resetAllowedIntegrationTypes(): void
```

##### `resetAllowedShares` <a name="resetAllowedShares" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetAllowedShares"></a>

```typescript
public resetAllowedShares(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetErrorIntegration` <a name="resetErrorIntegration" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetErrorIntegration"></a>

```typescript
public resetErrorIntegration(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreEditionCheck` <a name="resetIgnoreEditionCheck" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetIgnoreEditionCheck"></a>

```typescript
public resetIgnoreEditionCheck(): void
```

##### `resetReplicationSchedule` <a name="resetReplicationSchedule" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetReplicationSchedule"></a>

```typescript
public resetReplicationSchedule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isConstruct"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

replicationGroup.ReplicationGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isTerraformElement"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

replicationGroup.ReplicationGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isTerraformResource"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

replicationGroup.ReplicationGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.generateConfigForImport"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

replicationGroup.ReplicationGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ReplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.isPrimary">isPrimary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList">ReplicationGroupShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference">ReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedAccountsInput">allowedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedDatabasesInput">allowedDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedExternalVolumesInput">allowedExternalVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedIntegrationTypesInput">allowedIntegrationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedSharesInput">allowedSharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.errorIntegrationInput">errorIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.ignoreEditionCheckInput">ignoreEditionCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.objectTypesInput">objectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts">ReplicationGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedDatabases">allowedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedExternalVolumes">allowedExternalVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedShares">allowedShares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.errorIntegration">errorIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.showOutput"></a>

```typescript
public readonly showOutput: ReplicationGroupShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList">ReplicationGroupShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ReplicationGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference">ReplicationGroupTimeoutsOutputReference</a>

---

##### `allowedAccountsInput`<sup>Optional</sup> <a name="allowedAccountsInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedAccountsInput"></a>

```typescript
public readonly allowedAccountsInput: string[];
```

- *Type:* string[]

---

##### `allowedDatabasesInput`<sup>Optional</sup> <a name="allowedDatabasesInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedDatabasesInput"></a>

```typescript
public readonly allowedDatabasesInput: string[];
```

- *Type:* string[]

---

##### `allowedExternalVolumesInput`<sup>Optional</sup> <a name="allowedExternalVolumesInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedExternalVolumesInput"></a>

```typescript
public readonly allowedExternalVolumesInput: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypesInput`<sup>Optional</sup> <a name="allowedIntegrationTypesInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedIntegrationTypesInput"></a>

```typescript
public readonly allowedIntegrationTypesInput: string[];
```

- *Type:* string[]

---

##### `allowedSharesInput`<sup>Optional</sup> <a name="allowedSharesInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedSharesInput"></a>

```typescript
public readonly allowedSharesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `errorIntegrationInput`<sup>Optional</sup> <a name="errorIntegrationInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.errorIntegrationInput"></a>

```typescript
public readonly errorIntegrationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreEditionCheckInput`<sup>Optional</sup> <a name="ignoreEditionCheckInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.ignoreEditionCheckInput"></a>

```typescript
public readonly ignoreEditionCheckInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectTypesInput`<sup>Optional</sup> <a name="objectTypesInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.objectTypesInput"></a>

```typescript
public readonly objectTypesInput: string[];
```

- *Type:* string[]

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.replicationScheduleInput"></a>

```typescript
public readonly replicationScheduleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ReplicationGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts">ReplicationGroupTimeouts</a>

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

---

##### `allowedDatabases`<sup>Required</sup> <a name="allowedDatabases" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedDatabases"></a>

```typescript
public readonly allowedDatabases: string[];
```

- *Type:* string[]

---

##### `allowedExternalVolumes`<sup>Required</sup> <a name="allowedExternalVolumes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedExternalVolumes"></a>

```typescript
public readonly allowedExternalVolumes: string[];
```

- *Type:* string[]

---

##### `allowedIntegrationTypes`<sup>Required</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

---

##### `allowedShares`<sup>Required</sup> <a name="allowedShares" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.allowedShares"></a>

```typescript
public readonly allowedShares: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `errorIntegration`<sup>Required</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.errorIntegration"></a>

```typescript
public readonly errorIntegration: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreEditionCheck`<sup>Required</sup> <a name="ignoreEditionCheck" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ReplicationGroupConfig <a name="ReplicationGroupConfig" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.Initializer"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

const replicationGroupConfig: replicationGroup.ReplicationGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | Target accounts, as organization and account name, to which replication is enabled. Snowflake also includes the source account. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the replication group; |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.objectTypes">objectTypes</a></code> | <code>string[]</code> | Types of objects replicated from the source account to the target accounts. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedDatabases">allowedDatabases</a></code> | <code>string[]</code> | Databases enabled for replication. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedExternalVolumes">allowedExternalVolumes</a></code> | <code>string[]</code> | External volumes enabled for replication. Preview feature, open to all accounts. OBJECT_TYPES must include EXTERNAL VOLUMES. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedIntegrationTypes">allowedIntegrationTypes</a></code> | <code>string[]</code> | Integration types enabled for replication. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedShares">allowedShares</a></code> | <code>string[]</code> | Shares enabled for replication. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.comment">comment</a></code> | <code>string</code> | Comment for the replication group. The alter page defaults it to NULL. CREATE has no COMMENT clause. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.errorIntegration">errorIntegration</a></code> | <code>string</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#id ReplicationGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.ignoreEditionCheck">ignoreEditionCheck</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Allows replication to accounts on lower editions in the cases listed on the create page. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | Schedule for refreshing secondary replication groups. An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. NULL when unset. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts">ReplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

Target accounts, as organization and account name, to which replication is enabled. Snowflake also includes the source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#allowed_accounts ReplicationGroup#allowed_accounts}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the replication group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#name ReplicationGroup#name}

---

##### `objectTypes`<sup>Required</sup> <a name="objectTypes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.objectTypes"></a>

```typescript
public readonly objectTypes: string[];
```

- *Type:* string[]

Types of objects replicated from the source account to the target accounts.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `NETWORK POLICIES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#object_types ReplicationGroup#object_types}

---

##### `allowedDatabases`<sup>Optional</sup> <a name="allowedDatabases" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedDatabases"></a>

```typescript
public readonly allowedDatabases: string[];
```

- *Type:* string[]

Databases enabled for replication. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#allowed_databases ReplicationGroup#allowed_databases}

---

##### `allowedExternalVolumes`<sup>Optional</sup> <a name="allowedExternalVolumes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedExternalVolumes"></a>

```typescript
public readonly allowedExternalVolumes: string[];
```

- *Type:* string[]

External volumes enabled for replication. Preview feature, open to all accounts. OBJECT_TYPES must include EXTERNAL VOLUMES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#allowed_external_volumes ReplicationGroup#allowed_external_volumes}

---

##### `allowedIntegrationTypes`<sup>Optional</sup> <a name="allowedIntegrationTypes" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedIntegrationTypes"></a>

```typescript
public readonly allowedIntegrationTypes: string[];
```

- *Type:* string[]

Integration types enabled for replication.

Requires Business Critical Edition or higher. OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#allowed_integration_types ReplicationGroup#allowed_integration_types}

---

##### `allowedShares`<sup>Optional</sup> <a name="allowedShares" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.allowedShares"></a>

```typescript
public readonly allowedShares: string[];
```

- *Type:* string[]

Shares enabled for replication. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#allowed_shares ReplicationGroup#allowed_shares}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comment for the replication group. The alter page defaults it to NULL. CREATE has no COMMENT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#comment ReplicationGroup#comment}

---

##### `errorIntegration`<sup>Optional</sup> <a name="errorIntegration" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.errorIntegration"></a>

```typescript
public readonly errorIntegration: string;
```

- *Type:* string

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#error_integration ReplicationGroup#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#id ReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreEditionCheck`<sup>Optional</sup> <a name="ignoreEditionCheck" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.ignoreEditionCheck"></a>

```typescript
public readonly ignoreEditionCheck: string;
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Allows replication to accounts on lower editions in the cases listed on the create page.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#ignore_edition_check ReplicationGroup#ignore_edition_check}

---

##### `replicationSchedule`<sup>Optional</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

Schedule for refreshing secondary replication groups. An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. NULL when unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#replication_schedule ReplicationGroup#replication_schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ReplicationGroupTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts">ReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#timeouts ReplicationGroup#timeouts}

---

### ReplicationGroupShowOutput <a name="ReplicationGroupShowOutput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutput.Initializer"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

const replicationGroupShowOutput: replicationGroup.ReplicationGroupShowOutput = { ... }
```


### ReplicationGroupTimeouts <a name="ReplicationGroupTimeouts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.Initializer"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

const replicationGroupTimeouts: replicationGroup.ReplicationGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#create ReplicationGroup#create}. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#delete ReplicationGroup#delete}. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#read ReplicationGroup#read}. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#update ReplicationGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#create ReplicationGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#delete ReplicationGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#read ReplicationGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/replication_group#update ReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReplicationGroupShowOutputList <a name="ReplicationGroupShowOutputList" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.Initializer"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

new replicationGroup.ReplicationGroupShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.get"></a>

```typescript
public get(index: number): ReplicationGroupShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ReplicationGroupShowOutputOutputReference <a name="ReplicationGroupShowOutputOutputReference" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

new replicationGroup.ReplicationGroupShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.allowedAccounts">allowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup">isListingAutoFulfillmentGroup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.isPrimary">isPrimary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.nextScheduledRefresh">nextScheduledRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.primary">primary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.regionGroup">regionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.secondaryState">secondaryState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutput">ReplicationGroupShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.accountLocator"></a>

```typescript
public readonly accountLocator: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `allowedAccounts`<sup>Required</sup> <a name="allowedAccounts" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.allowedAccounts"></a>

```typescript
public readonly allowedAccounts: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `isListingAutoFulfillmentGroup`<sup>Required</sup> <a name="isListingAutoFulfillmentGroup" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```typescript
public readonly isListingAutoFulfillmentGroup: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.isPrimary"></a>

```typescript
public readonly isPrimary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nextScheduledRefresh`<sup>Required</sup> <a name="nextScheduledRefresh" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.nextScheduledRefresh"></a>

```typescript
public readonly nextScheduledRefresh: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.primary"></a>

```typescript
public readonly primary: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `regionGroup`<sup>Required</sup> <a name="regionGroup" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.regionGroup"></a>

```typescript
public readonly regionGroup: string;
```

- *Type:* string

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

##### `secondaryState`<sup>Required</sup> <a name="secondaryState" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.secondaryState"></a>

```typescript
public readonly secondaryState: string;
```

- *Type:* string

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.snowflakeRegion"></a>

```typescript
public readonly snowflakeRegion: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReplicationGroupShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupShowOutput">ReplicationGroupShowOutput</a>

---


### ReplicationGroupTimeoutsOutputReference <a name="ReplicationGroupTimeoutsOutputReference" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { replicationGroup } from '@cdktn/provider-snowflake'

new replicationGroup.ReplicationGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts">ReplicationGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReplicationGroupTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.replicationGroup.ReplicationGroupTimeouts">ReplicationGroupTimeouts</a>

---



