# `grantDatabaseRole` Submodule <a name="`grantDatabaseRole` Submodule" id="@cdktn/provider-snowflake.grantDatabaseRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantDatabaseRole <a name="GrantDatabaseRole" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role snowflake_grant_database_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

new grantDatabaseRole.GrantDatabaseRole(scope: Construct, id: string, config: GrantDatabaseRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig">GrantDatabaseRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig">GrantDatabaseRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentDatabaseRoleName">resetParentDatabaseRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentRoleName">resetParentRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.putTimeouts"></a>

```typescript
public putTimeouts(value: GrantDatabaseRoleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts">GrantDatabaseRoleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentDatabaseRoleName` <a name="resetParentDatabaseRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentDatabaseRoleName"></a>

```typescript
public resetParentDatabaseRoleName(): void
```

##### `resetParentRoleName` <a name="resetParentRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetParentRoleName"></a>

```typescript
public resetParentRoleName(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GrantDatabaseRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isConstruct"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

grantDatabaseRole.GrantDatabaseRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformElement"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

grantDatabaseRole.GrantDatabaseRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformResource"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

grantDatabaseRole.GrantDatabaseRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

grantDatabaseRole.GrantDatabaseRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GrantDatabaseRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantDatabaseRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantDatabaseRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GrantDatabaseRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference">GrantDatabaseRoleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleNameInput">databaseRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleNameInput">parentDatabaseRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleNameInput">parentRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts">GrantDatabaseRoleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleName">databaseRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleName">parentDatabaseRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleName">parentRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.timeouts"></a>

```typescript
public readonly timeouts: GrantDatabaseRoleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference">GrantDatabaseRoleTimeoutsOutputReference</a>

---

##### `databaseRoleNameInput`<sup>Optional</sup> <a name="databaseRoleNameInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleNameInput"></a>

```typescript
public readonly databaseRoleNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentDatabaseRoleNameInput`<sup>Optional</sup> <a name="parentDatabaseRoleNameInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleNameInput"></a>

```typescript
public readonly parentDatabaseRoleNameInput: string;
```

- *Type:* string

---

##### `parentRoleNameInput`<sup>Optional</sup> <a name="parentRoleNameInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleNameInput"></a>

```typescript
public readonly parentRoleNameInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GrantDatabaseRoleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts">GrantDatabaseRoleTimeouts</a>

---

##### `databaseRoleName`<sup>Required</sup> <a name="databaseRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.databaseRoleName"></a>

```typescript
public readonly databaseRoleName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentDatabaseRoleName`<sup>Required</sup> <a name="parentDatabaseRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentDatabaseRoleName"></a>

```typescript
public readonly parentDatabaseRoleName: string;
```

- *Type:* string

---

##### `parentRoleName`<sup>Required</sup> <a name="parentRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.parentRoleName"></a>

```typescript
public readonly parentRoleName: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantDatabaseRoleConfig <a name="GrantDatabaseRoleConfig" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.Initializer"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

const grantDatabaseRoleConfig: grantDatabaseRole.GrantDatabaseRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.databaseRoleName">databaseRoleName</a></code> | <code>string</code> | The fully qualified name of the database role which will be granted to share or parent role. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#id GrantDatabaseRole#id}. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentDatabaseRoleName">parentDatabaseRoleName</a></code> | <code>string</code> | The fully qualified name of the parent database role which will create a parent-child relationship between the roles. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentRoleName">parentRoleName</a></code> | <code>string</code> | The fully qualified name of the parent account role which will create a parent-child relationship between the roles. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.shareName">shareName</a></code> | <code>string</code> | The fully qualified name of the share on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts">GrantDatabaseRoleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseRoleName`<sup>Required</sup> <a name="databaseRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.databaseRoleName"></a>

```typescript
public readonly databaseRoleName: string;
```

- *Type:* string

The fully qualified name of the database role which will be granted to share or parent role.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#database_role_name GrantDatabaseRole#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#id GrantDatabaseRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentDatabaseRoleName`<sup>Optional</sup> <a name="parentDatabaseRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentDatabaseRoleName"></a>

```typescript
public readonly parentDatabaseRoleName: string;
```

- *Type:* string

The fully qualified name of the parent database role which will create a parent-child relationship between the roles.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#parent_database_role_name GrantDatabaseRole#parent_database_role_name}

---

##### `parentRoleName`<sup>Optional</sup> <a name="parentRoleName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.parentRoleName"></a>

```typescript
public readonly parentRoleName: string;
```

- *Type:* string

The fully qualified name of the parent account role which will create a parent-child relationship between the roles.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#parent_role_name GrantDatabaseRole#parent_role_name}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

The fully qualified name of the share on which privileges will be granted.

For more information about this resource, see [docs](./share).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#share_name GrantDatabaseRole#share_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GrantDatabaseRoleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts">GrantDatabaseRoleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#timeouts GrantDatabaseRole#timeouts}

---

### GrantDatabaseRoleTimeouts <a name="GrantDatabaseRoleTimeouts" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.Initializer"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

const grantDatabaseRoleTimeouts: grantDatabaseRole.GrantDatabaseRoleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#create GrantDatabaseRole#create}. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#delete GrantDatabaseRole#delete}. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#read GrantDatabaseRole#read}. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#update GrantDatabaseRole#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#create GrantDatabaseRole#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#delete GrantDatabaseRole#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#read GrantDatabaseRole#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs/resources/grant_database_role#update GrantDatabaseRole#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantDatabaseRoleTimeoutsOutputReference <a name="GrantDatabaseRoleTimeoutsOutputReference" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.Initializer"></a>

```typescript
import { grantDatabaseRole } from '@cdktn/provider-snowflake'

new grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts">GrantDatabaseRoleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrantDatabaseRoleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.grantDatabaseRole.GrantDatabaseRoleTimeouts">GrantDatabaseRoleTimeouts</a>

---



